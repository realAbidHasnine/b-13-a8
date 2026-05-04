import Link from "next/link";
import { Star, Clock, User, Layers, CheckCircle2, ArrowRight, Dot } from "lucide-react";

const CourseDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(new URL("/data.json", process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000").toString(), {
    next: { revalidate: 3600 },
  });

  const courses = await res.json();
  const course = courses.find((c) => String(c.id) === String(id));

  if (!course) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center mt-20">
        <h2 className="text-3xl font-bold mb-4">
          Course Not Found
        </h2>
        <Link href="/courses">
          <button className="px-4 py-2 bg-foreground text-background rounded-lg text-sm font-medium hover:opacity-80 transition-opacity">
            All Courses
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 mb-10">
      <div className="aspect-video bg-muted rounded-xl mb-8 flex items-center justify-center border border-border">
        <span className="text-muted-foreground font-medium">{course.category}</span>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">{course.title}</h1>

      <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <User className="w-4 h-4" />
          <span>{course.instructor}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="w-4 h-4" />
          <span>{course.duration}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span>{course.rating}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Layers className="w-4 h-4" />
          <span className="px-2 py-0.5 rounded-full bg-muted text-xs">{course.level}</span>
        </div>
      </div>

      <p className="text-muted-foreground text-base leading-relaxed mb-10">
        {course.description}
      </p>

      <div className="mb-10">
        <a
          href={course.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg text-sm font-semibold hover:opacity-80 transition-opacity"
        >
          Enroll Now - Start Learning
          <ArrowRight className="w-4 h-4" />
        </a>
        <div className="flex items-center justify-start gap-0.5 text-sm text-muted-foreground mt-4">
          Free access <Dot className="w-4 h-4" /> MIT OpenCourseWare
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
