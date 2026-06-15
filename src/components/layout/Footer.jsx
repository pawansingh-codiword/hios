import { Facebook, Instagram, Linkedin, Youtube, MessageCircle } from "lucide-react";
import Link from "next/link";

export function Footer() {
    const socialLinks = [
  { icon: Facebook, label: "Facebook", link: "https://www.facebook.com/profile.php?id=61590649798423" },
  { icon: Youtube, label: "YouTube", link: "https://youtu.be/YAcrC0i9-LA" },
  { icon: Instagram, label: "Instagram", link: "https://www.instagram.com/indiaocc/" },
  { icon: Linkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/hamsa-institute-785aa2413/" },
  { icon: MessageCircle, label: "WhatsApp", link: "https://chat.whatsapp.com/CuDZVFVw5My75dvz4Twrzy" },
];
    return (
        <footer className="border-t border-amber-500/20 bg-slate-950/60 text-gray-200 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-3 font-bold text-xl text-white">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-amber-400/40 shadow-md shadow-amber-900/40">
                                <img
                                    src="/images/logo.png"
                                    alt="Hamsa Institute"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span>Hamsa Institute</span>
                        </Link>
                        <p className="text-sm text-amber-100/60 leading-relaxed">
                            Empowering seekers with ancient occult wisdom — Discover, Learn, Transform.
                        </p>

                        <div className="flex items-center gap-3">
                        {socialLinks.map((item, i) => {
                            const Icon = item.icon;
                            return (
                            <a
                                key={i}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={item.label}
                                className="w-9 h-9 flex items-center justify-center rounded-full border border-amber-500/25 bg-amber-950/20 text-gray-300 hover:text-amber-300 hover:border-amber-400/50 transition-colors"
                            >
                                <Icon className="w-4 h-4" />
                            </a>
                            );
                        })}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-amber-200 mb-4 uppercase tracking-widest text-xs">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="/courses" className="hover:text-amber-300 transition-colors">Courses</Link></li>
                            <li><Link href="/about" className="hover:text-amber-300 transition-colors">About Us</Link></li>
                            {/* <li><Link href="/awards" className="hover:text-amber-300 transition-colors">Awards</Link></li> */}
                            {/* <li><Link href="/blog" className="hover:text-amber-300 transition-colors">Blog</Link></li> */}
                        </ul>
                        <Link href="/admissions" className="inline-block mt-6 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded transition-colors">
                            Admissions Form
                        </Link>
                    </div>

                    <div>
                        <h3 className="font-bold text-amber-200 mb-4 uppercase tracking-widest text-xs">Useful Info</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            {/* <li><Link href="/tools" className="hover:text-amber-300 transition-colors">Tools</Link></li> */}
                            <li><Link href="/sadhana" className="hover:text-amber-300 transition-colors">Sadhana</Link></li>
                            <li><Link href="/master-class" className="hover:text-amber-300 transition-colors">Free Master Class</Link></li>
                            {/* <li><Link href="/web-stories" className="hover:text-amber-300 transition-colors">Web Stories</Link></li> */}
                        </ul>
                        <Link href="/register" className="inline-block mt-6 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded transition-colors">
                         Register Now
                        </Link>
                    </div>

                    <div>
                        <h3 className="font-bold text-amber-200 mb-4 uppercase tracking-widest text-xs">Contact Us</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>
                                <a href="tel:9682930862" className="hover:text-amber-300 transition-colors">
                                    📞 +91 9682930862
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@indianoccult.com" className="hover:text-amber-300 transition-colors break-all">
                                    ✉ info@indianoccult.com
                                </a>
                            </li>
                            <li>
                                <a href="mailto:support@indianoccult.com" className="hover:text-amber-300 transition-colors break-all">
                                    ✉ support@indianoccult.com
                                </a>
                            </li>
                            <li><Link href="/contact" className="hover:text-amber-300 transition-colors">Get in Touch</Link></li>
                            <li><Link href="/privacy" className="hover:text-amber-300 transition-colors">Privacy</Link></li>
                        </ul>

                        <Link href="/applyjob" className="inline-block mt-6 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded transition-colors">
                          Apply For Jobs
                        </Link>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-amber-500/15 text-center text-[10px] text-amber-100/40 font-mono tracking-widest">
                    © {new Date().getFullYear()} HAMSA INSTITUTE OF OCCULT SCIENCE — DISCOVER • LEARN • TRANSFORM
                </div>
            </div>
        </footer>
    );
}
