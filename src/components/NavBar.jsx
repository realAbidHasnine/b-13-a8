"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogOut, UserPen, Menu, X, Loader2 } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);

  const linkClass = (path) =>
    `pb-0.5 border-b transition-all duration-200 ${
      pathname === path
        ? "border-gray-900 text-gray-900 dark:border-white dark:text-white"
        : "border-transparent text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
    }`;

  const handleSignOut = async () => {
    setIsSigningOut(true);
    await authClient.signOut();
    router.push("/");
    setIsSigningOut(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg dark:border-gray-800 dark:bg-black/80">
      <nav className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          <Link href="/" className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            SkillSphere
          </Link>

          
          <div className="hidden md:flex md:items-center md:gap-8">
            <Link href="/" className={`text-sm font-medium ${linkClass("/")}`}>
              Home
            </Link>
            <Link href="/courses" className={`text-sm font-medium ${linkClass("/courses")}`}>
              All Courses
            </Link>
            <Link href="/profile" className={`text-sm font-medium ${linkClass("/profile")}`}>
              My Profile
            </Link>
          </div>

          
          <div className="hidden md:flex md:items-center md:gap-4">
            {isPending ? (
              <Loader2 className="h-5 w-5 animate-spin text-gray-500" />
            ) : user ? (
              <div className="flex items-center gap-4">
                
                <div className="group relative">
                  {user.image ? (
                    <div className="relative h-8 w-8 overflow-hidden rounded-full border border-gray-200 dark:border-gray-700">
                      <Image
                        src={user.image}
                        alt={user.name || "User avatar"}
                        width={32}
                        height={32}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                      <UserPen className="h-4 w-4" />
                    </div>
                  )}
                  <div className="absolute right-0 top-10 w-56 rounded-lg border border-gray-200 bg-white p-3 shadow-lg opacity-0 transition-opacity group-hover:opacity-100 dark:border-gray-700 dark:bg-gray-900 pointer-events-none group-hover:pointer-events-auto">
                    <div className="flex flex-col items-center gap-2">
                      {user.image && (
                        <div className="relative h-14 w-14 overflow-hidden rounded-full border border-gray-200 dark:border-gray-700">
                          <Image src={user.image} alt={user.name} width={56} height={56} className="h-full w-full object-cover" />
                        </div>
                      )}
                      <p className="font-medium text-gray-900 dark:text-white">{user.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 break-all text-center">
                        {user.email}
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleSignOut}
                  disabled={isSigningOut}
                  className="flex items-center gap-1 rounded-md px-2 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white disabled:opacity-50"
                >
                  {isSigningOut ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <LogOut className="h-3.5 w-3.5" />}
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  href="/auth/login"
                  className="rounded-md px-3 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
                >
                  Login
                </Link>
                <Link
                  href="/auth/register"
                  className="rounded-md bg-gray-900 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-md p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        
        {menuOpen && (
          <div className="mt-4 flex flex-col gap-4 border-t border-gray-200 pt-4 dark:border-gray-800 md:hidden">
            <Link
              href="/"
              className={`text-sm font-medium ${linkClass("/")}`}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/courses"
              className={`text-sm font-medium ${linkClass("/courses")}`}
              onClick={() => setMenuOpen(false)}
            >
              All Courses
            </Link>
            <Link
              href="/profile"
              className={`text-sm font-medium ${linkClass("/profile")}`}
              onClick={() => setMenuOpen(false)}
            >
              My Profile
            </Link>

            <div className="border-t border-gray-200 pt-4 dark:border-gray-800">
              {isPending ? (
                <div className="flex justify-center py-4">
                  <Loader2 className="h-5 w-5 animate-spin text-gray-500" />
                </div>
              ) : user ? (
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    {user.image ? (
                      <div className="relative h-10 w-10 overflow-hidden rounded-full border border-gray-200 dark:border-gray-700">
                        <Image src={user.image} alt={user.name} width={40} height={40} className="h-full w-full object-cover" />
                      </div>
                    ) : (
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                        <UserPen className="h-5 w-5" />
                      </div>
                    )}
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{user.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{user.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      handleSignOut();
                      setMenuOpen(false);
                    }}
                    disabled={isSigningOut}
                    className="flex items-center justify-center gap-1 rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
                  >
                    {isSigningOut ? <Loader2 className="h-4 w-4 animate-spin" /> : <LogOut className="h-4 w-4" />}
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <Link
                    href="/auth/login"
                    className="block rounded-md px-3 py-2 text-center text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="/auth/register"
                    className="block rounded-md bg-gray-900 px-3 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                    onClick={() => setMenuOpen(false)}
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;