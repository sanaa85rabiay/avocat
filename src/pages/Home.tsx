import Hero from '@/sections/Hero';
import Marquee from '@/sections/Marquee';
import Intro from '@/sections/Intro';
import AreasGrid from '@/sections/AreasGrid';
import WhyUs from '@/sections/WhyUs';
import Stats from '@/sections/Stats';
import Testimonials from '@/sections/Testimonials';
import CtaBand from '@/sections/CtaBand';
import { useReveal } from '@/hooks/useReveal';

export default function Home() {
  useReveal();
  return (
    <>
      <Hero />
      <Marquee />
      <Intro />
      <Stats />
      <AreasGrid limit={6} />
      <WhyUs />
      <Testimonials />
      <CtaBand />
    </>
  );
}
