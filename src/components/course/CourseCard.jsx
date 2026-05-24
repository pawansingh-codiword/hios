"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function CourseCard({ course }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-shadow"
        >
            <div className="aspect-video relative overflow-hidden bg-muted">
                <motion.img
                    src={course.thumbnail}
                    alt={course.title}
                    className="object-cover w-full h-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                />
            </div>
            <div className="p-6">
                <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                    {course.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                    {course.description}
                </p>
                <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground">Instructor</span>
                    <span className="font-medium text-sm">{course.instructor}</span>
                </div>
            </div>
            <div className="p-6 pt-0">
                <Link href={`/courses`}>
                    <Button className="w-full">View Details</Button>
                </Link>
            </div>
        </motion.div>
    );
}
