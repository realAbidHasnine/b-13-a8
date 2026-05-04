import Link from 'next/link';
import { Star, Clock, BookOpen } from 'lucide-react';

const CourseCard = ({ course }) => {
  return (
    <Link href={`/courses/${course.id}`}>
      <div className="group border border-border rounded-xl overflow-hidden bg-card hover:border-neutral-300 dark:hover:border-neutral-600 transition-colors duration-200">
        <div className="aspect-video bg-muted relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-muted-foreground text-sm font-medium">{course.category}</span>
          </div>
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
          <p className="text-sm text-muted-foreground mb-3">{course.instructor}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{course.rating}</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <BookOpen className="w-3 h-3" />
              <span>{course.courseCode}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
