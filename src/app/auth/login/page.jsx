"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleLoginFunc = async (data) => {
    const { email, password } = data;
    const { data: res, error } = await authClient.signIn.email({
      email: email,
      password: password,
      rememberMe: true,
      callbackURL: redirectTo,
    });

    if (error) {
      toast.error(error.message);
    }
    if (res) {
      toast.success("Login successful!");
      router.push(redirectTo);
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({ provider: "google", callbackURL: redirectTo });
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 py-16 px-4 sm:px-6 lg:px-8 font-sans flex items-center justify-center">
      
      {/* Main Container - High contrast border instead of heavy shadows */}
      <div className="w-full max-w-5xl bg-white dark:bg-black rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side: Form */}
        <div className="flex-1 px-6 py-12 sm:px-12 flex flex-col justify-center">
          <div className="w-full max-w-sm mx-auto">
            
            {/* Vercel style tight tracking for headers */}
            <h1 className="text-3xl font-bold tracking-tight text-black dark:text-white mb-2">
              Welcome back
            </h1>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-8">
              Log in to your account to continue.
            </p>

            <form onSubmit={handleSubmit(handleLoginFunc)} className="space-y-5">
              
              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                  Email address
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md text-sm placeholder-neutral-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black dark:bg-black dark:text-white dark:focus:border-white dark:focus:ring-white transition-colors"
                  {...register("email", { required: "Email is required" })}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={isShowPassword ? "text" : "password"}
                    className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md text-sm placeholder-neutral-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black dark:bg-black dark:text-white dark:focus:border-white dark:focus:ring-white transition-colors"
                    {...register("password", { required: "Password is required" })}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
                    onClick={() => setIsShowPassword(!isShowPassword)}
                  >
                    {isShowPassword ? <FaEye size={16} /> : <FaEyeSlash size={16} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-neutral-500 dark:text-neutral-400">
                  By logging in, you agree to our Terms.
                </span>
                <Link href="#" className="font-medium text-black dark:text-white hover:underline">
                  Reset password
                </Link>
              </div>

              {/* Primary Login Button - Solid Black/White */}
              <button
                type="submit"
                className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-black hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 transition-colors"
              >
                Log in
              </button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-neutral-200 dark:border-neutral-800"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-black text-neutral-500">
                    OR
                  </span>
                </div>
              </div>

              {/* Google Button - Outlined minimalist style */}
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 border border-neutral-300 dark:border-neutral-700 rounded-md bg-white dark:bg-black text-sm font-medium text-black dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
              >
                <FcGoogle size={18} />
                Continue with Google
              </button>

              <p className="mt-6 text-center text-sm text-neutral-600 dark:text-neutral-400">
                Dont have an account?{" "}
                <Link href="/auth/register" className="font-medium text-black dark:text-white hover:underline">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>

        {/* Right Side: Image with subtle background separation */}
        <div className="hidden md:flex md:w-1/2 bg-neutral-50 dark:bg-neutral-900 border-l border-neutral-200 dark:border-neutral-800 items-center justify-center p-12">
          <div className="w-full max-w-64 aspect-square rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
            <p className="text-neutral-400 dark:text-neutral-600 text-sm font-medium">Add your image here</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;