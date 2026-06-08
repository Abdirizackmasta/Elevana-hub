import Link from "next/link";
import type { Course } from "../../types/course";

type CourseCardProps = Pick<
  Course,
  | "tag"
  | "category"
  | "title"
  | "desc"
  | "duration"
  | "lessons"
  | "rating"
  | "reviews"
  | "price"
  | "icon"
  | "gradient"
  | "slug"
>;

export default function CourseCard({
  tag,
  category,
  title,
  desc,
  duration,
  lessons,
  rating,
  reviews,
  price,
  icon,
  gradient,
  slug,
}: CourseCardProps) {
  return (
    <div className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-purple-500 transition hover:-translate-y-2 duration-300">

      {/* image */}
      <div
        className={`h-[180px] relative flex items-center justify-center text-6xl bg-gradient-to-br ${gradient}`}
      >
        {icon}

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />

        <span className="absolute top-4 right-4 text-[11px] font-bold px-3 py-1 rounded-full border border-white/20 bg-black/30">
          {tag}
        </span>
      </div>

      {/* body */}
      <div className="p-6">
        <p className="text-xs tracking-[2px] text-purple-400 font-semibold mb-2">
          {category}
        </p>

        <h3 className="text-[18px] font-bold leading-snug mb-2">
          {title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-5">
          {desc}
        </p>

        {/* meta */}
        <div className="flex gap-4 text-xs text-gray-400 mb-4">
          <span>⏱ {duration}</span>
          <span>📚 {lessons}</span>
          <span>🎓 Certificate</span>
        </div>

        {/* rating */}
        <div className="flex items-center gap-2 mb-5">
          <span className="text-yellow-400 text-sm">★★★★★</span>
          <span className="text-sm font-semibold">{rating}</span>
          <span className="text-xs text-gray-500">{reviews}</span>
        </div>

        {/* footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="text-xl font-extrabold">
            {price === "FREE" ? (
              <span className="text-purple-400">FREE</span>
            ) : (
              <>
                <span className="text-sm text-gray-400">$</span>
                {price.replace("$", "")}
              </>
            )}
          </div>

          <Link href={`/courses/${slug}`}>
            <button className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-sm font-semibold transition cursor-pointer">
              Enroll Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}