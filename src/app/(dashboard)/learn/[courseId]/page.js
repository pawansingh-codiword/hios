"use client";

import React, { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import { courses } from "@/lib/data/courses";
import { enrollments } from "@/lib/data/users";
import { Button } from "@/components/ui/button";
import { Lock, Play, CheckCircle, AlertCircle, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function CoursePlayerPage() {
    const params = useParams(); // Using hook for client component
    const courseId = params.courseId;

    // Initialize state with dummy data
    const initialCourse = courses.find(c => c.id === courseId);
    const initialEnrollment = enrollments.find(e => e.courseId === courseId) || {
        feePaidPercent: 0,
        completedLessons: []
    };

    const [feePaidPercent, setFeePaidPercent] = useState(initialEnrollment.feePaidPercent);
    const [activeLessonId, setActiveLessonId] = useState(
        initialCourse?.modules[0]?.lessons[0]?.id
    );

    // --- CORE LOGIC: ACCESS CONTROL ---
    const allowedAccessPercent = useMemo(() => {
        if (!initialCourse) return 0;
        // Find the rule that applies
        // Rules: { fee: 0, access: 0 }, { fee: 25, access: 25 } ...
        // Sort rules by fee descending to find first match <= feePaid
        const sortedRules = [...initialCourse.accessRules].sort((a, b) => b.fee - a.fee);
        const rule = sortedRules.find(r => feePaidPercent >= r.fee);
        return rule ? rule.access : 0;
    }, [feePaidPercent, initialCourse]);

    const totalLessonsCount = initialCourse?.totalLessons || 0;
    const unlockedLessonsCount = Math.floor((totalLessonsCount * allowedAccessPercent) / 100);

    // Flatten lessons to index them for locking logic
    const allLessons = useMemo(() => {
        if (!initialCourse) return [];
        return initialCourse.modules.flatMap(m => m.lessons);
    }, [initialCourse]);

    const activeLesson = allLessons.find(l => l.id === activeLessonId);

    // Determine if active lesson is locked
    const activeLessonIndex = allLessons.findIndex(l => l.id === activeLessonId);
    const isLessonLocked = (index) => {
        // If it's labeled "isFree", it's always open
        if (allLessons[index].isFree) return false;
        // Otherwise check index against unlocked count
        // e.g. unlocked 3 => indices 0, 1, 2 are open. Index 3 is locked.
        return index >= unlockedLessonsCount;
    };

    const isCurrentLocked = isLessonLocked(activeLessonIndex);

    // --- MOCK PAYMENT ---
    const handlePayMore = () => {
        // Simulate paying next chunk (e.g. +25%)
        let nextStep = feePaidPercent + 25;
        if (nextStep > 100) nextStep = 100;
        setFeePaidPercent(nextStep);
        // In real app, this would trigger payment gateway
    };

    if (!initialCourse) return <div>Course not found</div>;

    return (
        <div className="flex h-[calc(100vh-4rem)] flex-col lg:flex-row">
            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-y-auto bg-background p-6">
                <div className="aspect-video bg-black rounded-lg overflow-hidden relative shadow-lg">
                    {isCurrentLocked ? (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-slate-900/90 p-8 text-center">
                            <Lock className="w-16 h-16 mb-4 text-accent" />
                            <h2 className="text-2xl font-bold mb-2">Lesson Locked</h2>
                            <p className="max-w-md text-slate-300 mb-6">
                                You have access to <span className="text-accent font-bold">{allowedAccessPercent}%</span> of the course content based on your payment of {feePaidPercent}%.
                            </p>
                            <Button
                                size="lg"
                                className="bg-accent text-accent-foreground hover:bg-accent/90 animate-pulse"
                                onClick={handlePayMore}
                            >
                                Pay to Unlock Next Section
                            </Button>
                        </div>
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-500 bg-slate-100">
                            {/* Mock Video Player */}
                            <div className="text-center">
                                <Play className="w-20 h-20 mx-auto mb-4 opacity-20" />
                                <p>Video Player Placeholder</p>
                                <p className="text-sm font-mono mt-2">{activeLesson?.title}</p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="mt-6 space-y-4">
                    <h1 className="text-2xl font-bold">{activeLesson?.title}</h1>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{initialCourse.title}</span>
                        <span>•</span>
                        <span>Instructor: {initialCourse.instructor}</span>
                    </div>

                    <div className="p-4 bg-muted/30 rounded-lg border">
                        <h3 className="font-semibold mb-2">Lesson Notes</h3>
                        <p className="text-sm text-muted-foreground">
                            This is dummy content for the lesson notes. In a real application,
                            this would be fetched from the backend or MDX files.
                        </p>
                    </div>
                </div>
            </div>

            {/* Sidebar: Course Content */}
            <div className="w-full lg:w-96 border-l bg-card flex flex-col">
                <div className="p-4 border-b bg-muted/20">
                    <h3 className="font-bold text-lg">Course Content</h3>
                    <div className="mt-2 text-sm">
                        <div className="flex justify-between mb-1">
                            <span className="text-muted-foreground">Payment Status</span>
                            <span className="font-medium text-primary">{feePaidPercent}% Paid</span>
                        </div>
                        <div className="h-2 bg-secondary/20 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${feePaidPercent}%` }}
                                className="h-full bg-secondary"
                            />
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                            {unlockedLessonsCount} of {totalLessonsCount} lessons unlocked
                        </p>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                    {initialCourse.modules.map((module, modIndex) => (
                        <div key={module.id} className="border-b last:border-0">
                            <div className="bg-muted/40 px-4 py-3 text-sm font-medium sticky top-0">
                                {module.title}
                            </div>
                            <div>
                                {module.lessons.map((lesson) => {
                                    // Correctly map lesson to the flattened index to check lock status
                                    const globalIndex = allLessons.findIndex(l => l.id === lesson.id);
                                    const locked = isLessonLocked(globalIndex);
                                    const isActive = activeLessonId === lesson.id;

                                    return (
                                        <button
                                            key={lesson.id}
                                            onClick={() => setActiveLessonId(lesson.id)}
                                            className={cn(
                                                "w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors text-left",
                                                isActive ? "bg-primary/5 border-l-4 border-primary" : "hover:bg-muted/50 border-l-4 border-transparent",
                                                locked ? "opacity-60" : ""
                                            )}
                                        >
                                            <div className="flex-shrink-0">
                                                {locked ? (
                                                    <Lock className="w-4 h-4 text-muted-foreground" />
                                                ) : isActive ? (
                                                    <Play className="w-4 h-4 text-primary fill-primary" />
                                                ) : (
                                                    <CheckCircle className="w-4 h-4 text-green-500/50" />
                                                    // Mocking "some are completed" could be better, but CheckCircle looks nice for "available"
                                                )}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="truncate font-medium">{lesson.title}</div>
                                                <div className="text-xs text-muted-foreground flex items-center gap-2">
                                                    <span>{lesson.duration}</span>
                                                    {lesson.isFree && <span className="text-green-600 font-bold text-[10px] uppercase">Free</span>}
                                                </div>
                                            </div>
                                            {locked && <div className="text-[10px] font-bold text-accent">LOCKED</div>}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA at bottom of sidebar if not fully paid */}
                {feePaidPercent < 100 && (
                    <div className="p-4 border-t bg-accent/5">
                        <div className="flex items-start gap-3 mb-3">
                            <AlertCircle className="w-5 h-5 text-accent mt-0.5" />
                            <div className="text-xs">
                                <p className="font-semibold text-foreground">Unlock more content</p>
                                <p className="text-muted-foreground">Pay the next installment to access upcoming modules.</p>
                            </div>
                        </div>
                        <Button size="sm" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" onClick={handlePayMore}>
                            Pay Now (+25%)
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
