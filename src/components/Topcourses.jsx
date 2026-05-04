import { Flame } from "lucide-react";
import CourseCard from "./CourseCard";

const TopCourses = async () => {
  const res = await fetch(new URL("/data.json", process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000").toString(), {
    next: { revalidate: 3600 },
  });
  const courses = await res.json();

  const topCourses = [...courses]
    .sort((a, b) => Number(b.rating) - Number(a.rating))
    .slice(0, 3);

  return (
    <section className="py-10 md:py-14 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="flex items-center justify-center gap-2 text-2xl md:text-3xl font-bold tracking-tight">
            <Flame className="w-6 h-6 text-orange-500" />
            <span>Top Courses</span>
            <Flame className="w-6 h-6 text-orange-500" />
          </h1>
          <p className="text-muted-foreground mt-2 text-sm md:text-base">
            Highest-rated courses from MIT OpenCourseWare
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {topCourses.map(course => (
            <CourseCard key={course.id} course={course} badge="Trending" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCourses;
