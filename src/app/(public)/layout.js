import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import { LeadModalProvider } from "@/components/forms/LeadModalProvider";

export default function PublicLayout({ children }) {
    return (
        <LeadModalProvider>
            <div className="flex flex-col min-h-screen futuristic-bg-container overflow-x-clip">
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

                <WhatsAppFab />
            </div>
        </LeadModalProvider>
    );
}
