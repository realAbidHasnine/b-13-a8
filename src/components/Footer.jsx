import { PhoneCall, Locate, Mail, Heart } from "lucide-react";
import Link from "next/link";

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-black mt-auto">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              SkillSphere
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Empowering your career with industry‑ready skills. Learn from experts, anytime, anywhere.
            </p>
          </div>

          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Contact
            </h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-3">
                <Locate className="mt-0.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Address</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Dhaka, Bangladesh</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <PhoneCall className="mt-0.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Phone</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">+880 1700 000000</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Email</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <Link href="mailto:info@skillsphere.com" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                      info@skillsphere.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

        
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Quick Links
            </h3>
            <nav className="mt-4 flex flex-col gap-2">
              <Link href="/courses" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                All Courses
              </Link>
              <Link href="/my-profile" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                My Profile
              </Link>
              <Link href="/learning-tips" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                Learning Tips
              </Link>
            </nav>
          </div>

       
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
              Legal
            </h3>
            <nav className="mt-4 flex flex-col gap-2">
              <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </nav>
            <div className="mt-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
                Follow Us
              </h4>
              <div className="mt-3 flex gap-3">
                <Link href="https://facebook.com" target="_blank" className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white transition-colors" aria-label="Facebook">
                  <FacebookIcon />
                </Link>
                <Link href="https://twitter.com" target="_blank" className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white transition-colors" aria-label="Twitter">
                  <TwitterIcon />
                </Link>
                <Link href="https://instagram.com" target="_blank" className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white transition-colors" aria-label="Instagram">
                  <InstagramIcon />
                </Link>
                <Link href="https://linkedin.com" target="_blank" className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white transition-colors" aria-label="LinkedIn">
                  <LinkedinIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <p className="flex items-center justify-center gap-1 text-center text-xs text-gray-500 dark:text-gray-400">
            © {currentYear} SkillSphere. All rights reserved. 
            <span className="hidden sm:inline">|</span>
            <span className="inline-flex items-center gap-1">
              Made with <Heart className="h-3 w-3 text-red-500" /> for learners
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;