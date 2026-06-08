export interface Lesson {
  title: string;
  duration: string;
  description: string;
}

export interface Module {
  title: string;
  duration: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  slug: string;
  tag: string;
  category: string;
  title: string;
  subtitle: string;
  desc: string;
  duration: string;
  lessons: number;
  rating: number;
  reviews: number;
  students: number;
  price: string;
  icon: string;
  gradient: string;
  introVideo: string;
  language: string;
  certificate: boolean;
  learn: string[];
  requirements: string[];
  modules: Module[];
}
