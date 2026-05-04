"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleRegisterFunc = async (data) => {
    const { email, name, photo, password } = data;
    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
      callbackURL: "/auth/login",
    });

    if (error) {
      toast.error(error.message);
    }
    if (res) {
      toast.success("Registration successful! 🎉");
      router.push("/auth/login");
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({ provider: "google", callbackURL: "/auth/login" });
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
              Create an account
            </h1>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-8">
              Join SkillSphere and start learning today.
            </p>

            <form onSubmit={handleSubmit(handleRegisterFunc)} className="space-y-5">
              
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                  Full name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md text-sm placeholder-neutral-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black dark:bg-black dark:text-white dark:focus:border-white dark:focus:ring-white transition-colors"
                  {...register("name", { required: "Name is required" })}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Photo URL Field */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                  Profile picture URL
                </label>
                <input
                  type="url"
                  className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md text-sm placeholder-neutral-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black dark:bg-black dark:text-white dark:focus:border-white dark:focus:ring-white transition-colors"
                  {...register("photo", { required: "Photo URL is required" })}
                  placeholder="https://example.com/photo.jpg"
                />
                {errors.photo && (
                  <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">
                    {errors.photo.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                  Email address
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md text-sm placeholder-neutral-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black dark:bg-black dark:text-white dark:focus:border-white dark:focus:ring-white transition-colors"
                  {...register("email", { required: "Email is required" })}
                  placeholder="you@example.com"
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
                    placeholder="Create a strong password"
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
                  By signing up, you agree to our Terms.
                </span>
              </div>

              {/* Primary Register Button - Solid Black/White */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-black hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Creating account..." : "Sign up"}
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
                Already have an account?{" "}
                <Link href="/auth/login" className="font-medium text-black dark:text-white hover:underline">
                  Log in
                </Link>
              </p>
            </form>
          </div>
        </div>

        {/* Right Side: Image with subtle background separation */}
        <div className="hidden md:flex md:w-1/2 bg-neutral-50 dark:bg-neutral-900 border-l border-neutral-200 dark:border-neutral-800 items-center justify-center p-12">
          <div className="w-full max-w-64 aspect-square rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
            <p className="text-neutral-400 dark:text-neutral-600 text-sm font-medium">SkillSphere</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RegisterPage;