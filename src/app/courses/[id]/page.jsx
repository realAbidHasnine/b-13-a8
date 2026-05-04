"use client";

import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { Star, Clock, User, Layers, ArrowRight, BookOpen, Play, Circle } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";

const curriculumModules = [
  {
    title: "Module 1: Introduction & Fundamentals",
    lessons: ["Course Overview", "Setting Up Your Environment", "Core Concepts & Terminology", "First Steps Guide"]
  },
  {
    title: "Module 2: Building Core Skills",
    lessons: ["Deep Dive - Part 1", "Deep Dive - Part 2", "Hands-on Exercise 1", "Hands-on Exercise 2"]
  },
  {
    title: "Module 3: Advanced Techniques",
    lessons: ["Advanced Methods", "Problem Solving Strategies", "Case Study Analysis", "Best Practices"]
  },
  {
    title: "Module 4: Real-World Applications",
    lessons: ["Industry Use Cases", "Project Planning", "Implementation Guide", "Testing & Debugging"]
  },
  {
    title: "Module 5: Final Project & Assessment",
    lessons: ["Capstone Project Brief", "Project Development", "Code Review & Feedback", "Final Assessment"]
  }
];

const CourseDetailsPage = () => {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  const params = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push(`/auth/login?redirect=/courses/${params.id}`);
    }
  }, [isPending, session, router, params.id]);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await fetch('/data.json');
        const courses = await res.json();
        const found = courses.find((c) => String(c.id) === String(params.id));
        setCourse(found);
      } catch (e) {
        // Failed to fetch course
      } finally {
        setLoading(false);
      }
    };

    if (session?.user) {
      fetchCourse();
    }
  }, [session, params.id]);

  if (isPending || loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (!session?.user) {
    return null;
  }

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
      <div className="aspect-video bg-muted rounded-xl mb-8 flex items-center justify-center border border-border overflow-hidden">
        <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
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
        <div className="flex items-center gap-1.5">
          <BookOpen className="w-4 h-4" />
          <span className="text-green-600 font-medium">Free</span>
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
          Free access <Circle className="w-2 h-2" /> MIT OpenCourseWare
        </div>
      </div>

      <div className="border border-border rounded-xl overflow-hidden">
        <div className="bg-muted/50 px-6 py-4 border-b border-border">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Curriculum
          </h2>
          <p className="text-sm text-muted-foreground mt-1">{curriculumModules.length} modules • {curriculumModules.reduce((acc, m) => acc + m.lessons.length, 0)} lessons</p>
        </div>
        <div className="divide-y divide-border">
          {curriculumModules.map((module, index) => (
            <div key={index} className="px-6 py-4">
              <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-foreground text-background text-xs font-bold">
                  {index + 1}
                </span>
                {module.title}
              </h3>
              <div className="space-y-2 ml-8">
                {module.lessons.map((lesson, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Play className="w-3 h-3" />
                    <span>{lesson}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
