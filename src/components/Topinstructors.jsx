import { Star, Trophy, CheckCircle2 } from "lucide-react";

const instructors = [
  {
    name: "Gilbert Strang",
    role: "Linear Algebra",
    rating: 4.9,
    students: "100K+",
    image: "https://i.ibb.co.com/FqNkxpjF/linkedin-sales-solutions-p-At-A8xe-i-VM-unsplash.jpg"
  },
  {
    name: "Ana Bell",
    role: "Python Programming",
    rating: 4.8,
    students: "50K+",
    image: "https://i.ibb.co.com/zHtYf6TW/mccarthy-beckan-RGKd-WJOUFH0-unsplash.jpg"
  },
  {
    name: "Patrick Winston",
    role: "Artificial Intelligence",
    rating: 4.8,
    students: "75K+",
    image: "https://i.ibb.co.com/bMgGcxQk/charlie-green-3-Jmf-ENc-L24-M-unsplash.jpg"
  },
  {
    name: "Walter Lewin",
    role: "Classical Mechanics",
    rating: 4.9,
    students: "120K+",
    image: "https://i.ibb.co.com/HDx65THZ/stefan-stefancik-QXev-Dflbl8-A-unsplash.jpg"
  }
];

const TopInstructors = () => {
  return (
    <section className="py-14 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Trophy className="w-7 h-7 text-yellow-500" />
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Top Instructors
            </h2>
          </div>
          <p className="text-muted-foreground mt-2">
            Learn from world-renowned MIT professors
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="border border-border rounded-xl p-6 text-center hover:border-neutral-300 dark:hover:border-neutral-600 transition-colors"
            >
               <div className="w-16 h-16 rounded-full mx-auto overflow-hidden border border-border">
                 <img
                   src={instructor.image}
                   alt={instructor.name}
                   className="w-full h-full object-cover"
                   loading="lazy"
                 />
               </div>

              <h3 className="font-semibold mt-3 flex justify-center items-center gap-1 text-sm">
                {instructor.name} <CheckCircle2 className="w-4 h-4 text-neutral-400" />
              </h3>

              <p className="text-xs text-muted-foreground mt-1">{instructor.role}</p>

              <div className="flex justify-center mt-3">
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{instructor.rating}</span>
                </div>
              </div>

              <div className="mt-3">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-muted text-xs">
                  {instructor.students} Students
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopInstructors;
