export const currentUser = {
    id: "user-123",
    name: "Sandeep Kumar",
    email: "sandeep@example.com",
    role: "student", // or 'instructor', 'admin'
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sandeep"
};

export const enrollments = [
    {
        userId: "user-123",
        courseId: "course-1",
        feePaidPercent: 25,
        unlockedLessonCount: 3, // Logic: totalLessons(12) * 25% = 3
        completedLessons: ["les-1", "les-2"],
        currentLesson: "les-3",
        lastAccessed: "2026-02-01T10:00:00Z"
    }
];
