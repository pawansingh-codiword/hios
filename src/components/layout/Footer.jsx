import Link from "next/link";
import { GraduationCap } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-blue-500/20 bg-slate-950/40 text-gray-200 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white">
                            <GraduationCap className="h-6 w-6 text-blue-500" />
                            <span>Hamsa Institute</span>
                        </Link>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Empowering seekers with ancient Vedic wisdom through a next-gen scientific paradigm.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-4 uppercase tracking-widest text-xs">Knowledge Grid</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/courses" className="hover:text-blue-400 transition-colors">Course Catalog</Link></li>
                            <li><Link href="/pricing" className="hover:text-blue-400 transition-colors">Pricing Protocol</Link></li>
                            <li><Link href="/instructors" className="hover:text-blue-400 transition-colors">System Archons</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-4 uppercase tracking-widest text-xs">Foundation</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/about" className="hover:text-blue-400 transition-colors">About the Node</Link></li>
                            <li><Link href="/careers" className="hover:text-blue-400 transition-colors">Career Branches</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Access Terminal</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-4 uppercase tracking-widest text-xs">Security</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/terms" className="hover:text-blue-400 transition-colors">System Terms</Link></li>
                            <li><Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Shield</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-blue-500/10 text-center text-[10px] text-gray-500 font-mono tracking-widest">
                    © {new Date().getFullYear()} HAMSA INSTITUTE OF OCCULTED SCIENCE. // DATA_VERSION_1.0
                </div>
            </div>
        </footer>
    );
}
