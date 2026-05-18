"use client";

import { Button } from "@/components/ui/button";
import { enrollments, currentUser } from "@/lib/data/users";
import { courses } from "@/lib/data/courses";
import { ArrowRight, PlayCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
};

export default function DashboardPage() {
    const myCourses = enrollments.map(enrollment => {
        const courseDetail = courses.find(c => c.id === enrollment.courseId);
        return { ...enrollment, ...courseDetail };
    });

    return (
        <motion.div
            className="space-y-6"
            initial="hidden"
            animate="show"
            variants={container}
        >
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
                <Link href="/courses">
                    <Button>Browse Courses</Button>
                </Link>
            </div>

            <motion.div
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
                variants={item}
            >
                <div className="rounded-xl border bg-card text-card-foreground shadow p-6 transform hover:scale-105 transition-transform duration-200">
                    <h3 className="text-sm font-medium text-muted-foreground">Courses Enrolled</h3>
                    <div className="text-2xl font-bold mt-2">{myCourses.length}</div>
                </div>
                <div className="rounded-xl border bg-card text-card-foreground shadow p-6 transform hover:scale-105 transition-transform duration-200">
                    <h3 className="text-sm font-medium text-muted-foreground">Lessons Completed</h3>
                    <div className="text-2xl font-bold mt-2">
                        {myCourses.reduce((acc, curr) => acc + curr.completedLessons.length, 0)}
                    </div>
                </div>
                <div className="rounded-xl border bg-card text-card-foreground shadow p-6 transform hover:scale-105 transition-transform duration-200">
                    <h3 className="text-sm font-medium text-muted-foreground">Total Spent</h3>
                    <div className="text-2xl font-bold mt-2">
                        ₹{myCourses.reduce((acc, curr) => acc + (curr.price * curr.feePaidPercent / 100), 0)}
                    </div>
                </div>
            </motion.div>

            <motion.div variants={item}>
                <h2 className="text-xl font-semibold mb-4">My Learning</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {myCourses.map((course) => (
                        <motion.div
                            key={course.id}
                            className="flex flex-col border rounded-lg bg-card shadow-sm overflow-hidden group"
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="h-32 bg-muted relative overflow-hidden">
                                <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Link href={`/learn/${course.id}`}>
                                        <PlayCircle className="w-12 h-12 text-white hover:scale-110 transition-transform cursor-pointer" />
                                    </Link>
                                </div>
                            </div>
                            <div className="p-4 flex flex-col gap-4 flex-1">
                                <div>
                                    <h3 className="font-semibold group-hover:text-primary transition-colors">{course.title}</h3>
                                    <p className="text-xs text-muted-foreground mt-1">Instructor: {course.instructor}</p>
                                </div>

                                <div className="mt-auto space-y-2">
                                    <div className="flex items-center justify-between text-xs">
                                        <span>Progress</span>
                                        <span>{Math.round((course.completedLessons.length / course.totalLessons) * 100)}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-secondary/20 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-secondary"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${(course.completedLessons.length / course.totalLessons) * 100}%` }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                        />
                                    </div>

                                    <div className="flex items-center justify-between text-xs mt-2 pt-2 border-t">
                                        <span className={cn("px-2 py-0.5 rounded-full",
                                            course.feePaidPercent < 100 ? "bg-accent/10 text-accent font-medium" : "bg-green-100 text-green-700 font-medium"
                                        )}>
                                            {course.feePaidPercent}% Paid
                                        </span>
                                        <Link href={`/learn/${course.id}`} className="text-primary hover:underline flex items-center gap-1 font-medium">
                                            Continue <ArrowRight className="w-3 h-3" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
}
