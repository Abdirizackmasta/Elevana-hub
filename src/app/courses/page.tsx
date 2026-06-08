'use client';

import { useState } from "react";
import CourseCard from "@/components/ui/CourseCard";
import { courses } from "@/lib/courses";
import type { Course } from "../../types/course";

export default function CoursesPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "TECHNOLOGY",
    "DESIGN",
    "DATA & AI",
    "BUSINESS",
    "MARKETING",
    "FINANCE",
  ];

  const filteredCourses: Course[] =
    activeFilter === "All"
      ? courses
      : courses.filter((course) => course.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#0a0412] text-white pt-28">

      {/* HERO */}
      <div className="text-center px-6 relative">

        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(109,33,232,0.2),transparent_70%)] pointer-events-none" />

        <p className="text-purple-400 tracking-[3px] uppercase text-xs font-semibold relative z-10">
          All Courses
        </p>

        <h1 className="text-[42px] md:text-[62px] font-extrabold tracking-[-2px] mt-4 relative z-10">
          Explore{" "}
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            20+ Skills
          </span>
        </h1>

        <p className="text-gray-400 mt-5 max-w-xl mx-auto leading-relaxed relative z-10">
          From beginner fundamentals to advanced professional certifications —
          find the course that fits your goals.
        </p>

        {/* FILTERS */}
        <div className="flex flex-wrap justify-center gap-2 mt-10 relative z-10">

          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setActiveFilter(item)}
              className={`px-5 py-2 rounded-full border text-sm transition
                ${
                  activeFilter === item
                    ? "bg-purple-600 border-purple-600 text-white"
                    : "border-white/10 text-gray-400 hover:bg-purple-600 hover:border-purple-600 hover:text-white"
                }`}
            >
              {item}
            </button>
          ))}

        </div>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto px-6 mt-16 grid md:grid-cols-3 gap-6 pb-24">

        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              tag={course.tag}
              category={course.category}
              title={course.title}
              desc={course.desc}
              duration={course.duration}
              lessons={course.lessons}
              rating={course.rating}
              reviews={course.reviews}
              price={course.price}
              icon={course.icon}
              gradient={course.gradient}
              slug={course.slug}
            />
          ))
        ) : (
          <div className="col-span-3 text-center text-gray-400">
            No courses found in this category.
          </div>
        )}

      </div>
    </div>
  );
}