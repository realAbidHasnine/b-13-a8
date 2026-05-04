import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black px-6 text-center font-sans">
      
      <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-black dark:text-white">
        404
      </h1>

      <h2 className="text-xl md:text-2xl font-medium mt-4 text-neutral-800 dark:text-neutral-200 tracking-tight">
        Page Not Found
      </h2>

      <p className="mt-3 text-neutral-500 max-w-md text-sm md:text-base">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      
       <Link
         href="/"
         className="mt-8 bg-black text-white dark:bg-white dark:text-black border border-transparent dark:border-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
       >
         Go Home
       </Link>

    </div>
  );
};

export default NotFoundPage;