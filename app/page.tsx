"use client"

import { useEffect } from 'react';

import { useRouter } from 'next/navigation'
import { CTA, Metrics, Products, Banner} from '@/components';
import CustomButton from '@/components/CustomButton';
import Image from 'next/image';
import Link from 'next/link';
import { AchievementsCard, Card, InfoCard, TestimonialCard } from '@/components/InfoCard';
import HeroCarousel from "@/components/hero-carousel";
import Fp from "@/components/Fp";
import WhyUs from "@/components/WhyUs";
import DataDiscovery from "@/components/DataDiscovery";
import Solutions from "@/components/Solutions";
import Partners from "@/components/Partners";
import { motion } from "framer-motion";

export default function Home() {

  const router = useRouter()
      
  return (
    <main className="w-full relative">
      
      <section>
            <Fp />
      </section>
  
    <section>
        <HeroCarousel />
      </section>

      <section>
        <Solutions />
      </section>

       <section>
        {/*<Partners />*/}
      </section>
  
      <section>
          <WhyUs />
      </section>

      <section>
        <DataDiscovery />
      </section>

    </main>
  );
}