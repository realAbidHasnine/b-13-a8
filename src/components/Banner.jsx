import Link from "next/link";
import Image from "next/image";


const Banner = () => {
  return (
    <section className="bg-white dark:bg-black pt-16 md:pt-32 pb-16 overflow-hidden border-b border-neutral-200 dark:border-neutral-800 font-sans">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-16">
          <div className="text-center md:text-left flex-1 z-10">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-black dark:text-white leading-[1.1] animate__animated animate__backInLeft">
              Learn, Build & Grow <br className="hidden md:block" /> with
              SkillSphere
            </h1>

            <p className="mt-6 text-neutral-600 dark:text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto md:mx-0 animate__animated animate__backInLeft tracking-tight">
              Join thousands of learners and master in-demand skills with
              structured courses, real projects, and expert guidance.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4 animate__animated animate__backInLeft">
              <Link href="/courses" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-black text-white dark:bg-white dark:text-black px-8 py-3.5 rounded-md text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
                  Browse Courses
                </button>
              </Link>

              <Link href="/about" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto border border-neutral-300 dark:border-neutral-700 text-black dark:text-white bg-transparent px-8 py-3.5 rounded-md text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors">
                  Explore Platform
                </button>
              </Link>
            </div>
          </div>

          <div className="flex-1 flex justify-center md:justify-end w-full animate__animated animate__fadeIn">
            <div className="relative w-full max-w-150 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-2 md:p-3 shadow-sm">
              <Image
                src="/window.svg"
                alt="SkillSphere Platform Overview"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg border border-neutral-200 dark:border-neutral-800"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
