import { Sidebar } from "@/components/layout/Sidebar";
import { Navbar } from "@/components/layout/Navbar"; // OPTIONAL: Could use a different top bar

export default function DashboardLayout({ children }) {
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <Sidebar />
            <div className="flex flex-col">
                {/* Simple Topbar for Mobile Toggle (To be implemented fully later, reusing Navbar for now but stripped) */}
                <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-6 lg:h-[60px] md:hidden">
                    <span className="font-bold">Hamsa Institute</span>
                    {/* Mobile Sidebar Toggle would go here */}
                </header>
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
