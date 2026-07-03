import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
  Locate,
} from "lucide-react";
import Link from "next/link";

export function Footer() {
  const socialLinks = [
    {
      icon: Facebook,
      label: "Facebook",
      link: "https://www.facebook.com/profile.php?id=61590649798423",
    },
    { icon: Youtube, label: "YouTube", link: "https://youtu.be/YAcrC0i9-LA" },
    {
      icon: Instagram,
      label: "Instagram",
      link: "https://www.instagram.com/indiaocc/",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/hamsa-institute-785aa2413/",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      link: "https://chat.whatsapp.com/CuDZVFVw5My75dvz4Twrzy",
    },
  ];

  return (
    <footer className="border-t border-amber-500/20 bg-slate-950/60 text-gray-200 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 lg:gap-14">
          {/* 1. BRAND */}
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center gap-3 font-bold text-xl text-white"
            >
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-amber-400/40 shadow-md shadow-amber-900/40">
                <img
                  src="/images/logo.png"
                  alt="Hamsa Institute"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-lg sm:text-xl">Hamsa Institute</span>
            </Link>

            <p className="text-sm text-amber-100/60 leading-relaxed">
              Empowering seekers with ancient occult wisdom — Discover, Learn,
              Transform.
            </p>

            <div className="flex flex-wrap items-center gap-3">
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

          {/* 2. QUICK LINKS */}
          <div>
            <h3 className="font-bold text-amber-200 mb-4 uppercase tracking-widest text-xs">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/courses" className="hover:text-amber-300">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-300">
                  About Us
                </Link>
              </li>
            </ul>

            <Link
              href="/admissions"
              className="mt-6 w-full sm:w-auto inline-flex justify-center px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded transition-colors"
            >
              Admissions Form
            </Link>
          </div>

          {/* 3. USEFUL INFO */}
          <div>
            <h3 className="font-bold text-amber-200 mb-4 uppercase tracking-widest text-xs">
              Useful Info
            </h3>

            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/sadhana" className="hover:text-amber-300">
                  Sadhana
                </Link>
              </li>
              <li>
                <Link href="/master-class" className="hover:text-amber-300">
                  Free Master Class
                </Link>
              </li>
            </ul>

            <Link
              href="/register"
              className="mt-6 w-full sm:w-auto inline-flex justify-center px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded transition-colors"
            >
              Register Now
            </Link>
          </div>

          {/* 4. CONTACT */}
          <div className="xl:max-w-sm">
            <h3 className="font-bold text-amber-200 mb-4 uppercase tracking-widest text-xs">
              Contact Us
            </h3>

            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a href="tel:9682930862" className="hover:text-amber-300">
                  📞 +91 9682930862
                </a>
              </li>

              <li>
                <a
                  href="mailto:info@indianoccult.com"
                  className="hover:text-amber-300"
                >
                  ✉ info@indianoccult.com
                </a>
              </li>

              <li>
                <a
                  href="mailto:support@indianoccult.com"
                  className="hover:text-amber-300"
                >
                  ✉ support@indianoccult.com
                </a>
              </li>
            </ul>

            <Link
              href="/applyjob"
              className="mt-6 w-full sm:w-auto inline-flex justify-center px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded transition-colors"
            >
              Apply For Jobs
            </Link>
          </div>
        </div>
        {/* OFFICES */}
        <div className="mt-6 w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Head Office */}
          <div className="w-full h-full rounded-lg border border-amber-500/20 bg-amber-950/10 p-4">
            <h4 className="font-semibold text-amber-300 mb-2 flex items-center gap-2">
              <Locate className="w-4 h-4 text-amber-300" />
              Head Office
            </h4>
            <p className="text-sm text-gray-400 leading-6">
              Building No. 4, Sapru Marg, Near Sunny Toyota Showroom,
              <br />
              Hazratganj, Lucknow, Uttar Pradesh 226001
            </p>
          </div>

          {/* Branch Office */}
          <div className="w-full h-full rounded-lg border border-amber-500/20 bg-amber-950/10 p-4">
            <h4 className="font-semibold text-amber-300 mb-2 flex items-center gap-2">
              <Locate className="w-4 h-4 text-amber-300" />
              Branch Office
            </h4>
            <p className="text-sm text-gray-400 leading-6">
              339, E Block Road, Greater Kailash I,
              <br />
              New Delhi, Delhi 110048
            </p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 border-t border-amber-500/15 pt-6 text-center text-xs sm:text-sm text-amber-100/50">
          © {new Date().getFullYear()} HAMSA INSTITUTE OF OCCULT SCIENCE —
          DISCOVER • LEARN • TRANSFORM
        </div>
      </div>
    </footer>
  );
}
