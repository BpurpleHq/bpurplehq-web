"use client"

import Image from "next/image";
import {
  useState,
  useCallback,
  useEffect,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";
import { useRouter } from 'next/navigation'

import Spec from "@/components/Ideahub/Spec";
import Prod from "@/components/Ideahub/Product";
import DataDiscovery from "@/components/DataDiscovery";
import IdealHero from "@/components/Ideahub/idealhero";


export default function Home() {

  const router = useRouter()
      
  return (
    <main className="w-full relative">
       <section><IdealHero /></section>
      <section><Prod /></section>
      <section>
            <Spec />
      </section>
      <section>
           <DataDiscovery />
      </section>



    </main>
  );
}