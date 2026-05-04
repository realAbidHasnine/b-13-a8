"use client";

import Link from 'next/link';
import { Star, Clock, BookOpen, Flame } from 'lucide-react';
import mitLogo from '@/assets/MIT-Logo.jpg';

const CourseCard = ({ course, badge }) => {
  return (
    <Link href={`/courses/${course.id}`}>
      <div className="group border border-border rounded-xl overflow-hidden bg-card hover:border-neutral-300 dark:hover:border-neutral-600 transition-colors duration-200 relative">
        {badge && (
          <div className="absolute top-3 left-3 z-10 flex items-center gap-1 px-2 py-1 rounded-full bg-orange-500 text-white text-xs font-medium">
            <Flame className="w-3 h-3" />
            {badge}
          </div>
        )}
        <div className="aspect-video bg-muted relative overflow-hidden">
          <img
            src={course.image || mitLogo.src}
            alt={course.title}
            className="w-full h-full object-cover"
            onError={(e) => { e.target.src = mitLogo.src; }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 dark:group-hover:bg-white/5 transition-colors duration-200" />
        </div>
        <div className="p-5">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
            <span className="px-2 py-0.5 rounded-full bg-muted">{course.level}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {course.duration}
            </span>
          </div>
          <h3 className="font-semibold text-base mb-1 line-clamp-2 group-hover:text-neutral-500 transition-colors">
            {course.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{course.description}</p>
          <p className="text-xs text-muted-foreground mb-3">{course.instructor}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{course.rating}</span>
            </div>
            <span className="text-xs font-medium text-green-600">Free</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
