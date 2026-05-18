import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PublicLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen futuristic-bg-container overflow-x-hidden">
            {/* Global Background Elements */}
            <div className="futuristic-bg-fixed">
                <div className="glow-blue" />
                <div className="glow-cyan" />
                <div className="ring-animated ring-outer" />
                <div className="ring-animated ring-inner" />
            </div>

            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-1">
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    );
}
