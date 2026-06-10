import Hero from "@/components/layout/Hero";
import CTA from "@/components/sections/CTA";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";



export default function Home() {
  return (
    <div className="w-full max-w-full">
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
    </div>
    )
  
}