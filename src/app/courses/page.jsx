"use client";

import CourseCard from '@/components/CourseCard';
import React, { useEffect, useState } from 'react';
import { Search } from 'lucide-react';

const AllCoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        setCourses(data);
        setLoading(false);
      })
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-pulse text-muted-foreground">Loading courses...</div>
      </div>
    )
  }

  const filtered = courses.filter(course =>
    course.title.toLowerCase().includes(search.toLowerCase()) ||
    course.category.toLowerCase().includes(search.toLowerCase()) ||
    course.instructor.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          All Courses
        </h1>
        <p className="text-muted-foreground">
          Explore skill-based learning programs from MIT OpenCourseWare
        </p>
      </div>

      <div className="relative mb-8 max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search courses..."
          className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-sm outline-none focus:ring-2 focus:ring-neutral-200 dark:focus:ring-neutral-700 transition-shadow"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground">No courses found</p>
        </div>
      )}
    </div>
  );
};

export default AllCoursesPage;
