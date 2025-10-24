"use client"

import { useEffect } from 'react';

import { useRouter } from 'next/navigation'
import { CTA, Metrics, Products, Banner} from '@/components';
import CustomButton from '@/components/CustomButton';
import Image from 'next/image';
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import { AchievementsCard, Card, InfoCard, TestimonialCard } from '@/components/InfoCard';
import HeroCarousel from "@/components/hero-carousel";
import Fp from "@/components/Fp";
import { motion } from "framer-motion";

export default function Home() {

  const router = useRouter()

  useEffect(() => {
        AOS.init();
      }, [])
      
  return (
    <main className="w-full relative">
      <section className='bg-bpurpleDark text-white' data-aos="fade-up">
      <Fp />

      </section>
  
    <section className='bg-extra' data-aos="fade-up">
        <HeroCarousel />
        

      </section>
      
      {/* Data Discovery Section */}
      <section
        className="bg-white flex flex-col-reverse lg:flex-row gap-8 lg:gap-12 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-12 lg:pb-16"
        data-aos="fade-up"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:justify-start lg:items-start w-full lg:max-w-[60%] flex-1 space-y-6"
        >
          <h1 className="text-3xl mt-10 md:text-4xl lg:text-5xl font-bold text-bpurpleDark font-montserrat text-center lg:text-left">
            Unlock the Power of Your Data
          </h1>
          <p className="text-lg text-gray-700 font-open-sans text-center lg:text-left lg:w-[80%]">
            In today’s data-driven world, your business has access to vast amounts of data waiting to be harnessed. Don’t let guesswork or outdated methods hold you back from discovering valuable opportunities hidden in your data.
          </p>
          <p className="text-lg text-gray-700 font-open-sans text-center lg:text-left lg:w-[80%]">
            Our customized data discovery report assesses your current capabilities and provides actionable insights to drive growth, optimize operations, and maximize ROI with Bpurple’s technology solutions.
          </p>
         {/* <div className="flex justify-center lg:justify-start gap-4 mt-8">
            <Link href="/community" onClick={() => router.push("/community")}>
              <CustomButton
                title="Join Community"
                btnType="button"
                textStyles="text-dark font-montserrat font-semibold"
                containerStyles="bg-orange text-white rounded-lg py-3 px-6 hover:bg-orange-600 transition duration-300"
              />
            </Link>
          </div>*/}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full lg:w-[550px] lg:h-[510px] h-[320px] rounded-xl overflow-hidden"
        >
          <Image src="/aboutImg.png" alt="Data Discovery Illustration" fill className="object-cover" />
        </motion.div>
      </section>

      {/* Metrics Section */}
      <section className="bg-extra py-12" data-aos="fade-up">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <Metrics />
        </div>
      </section>

      
      {/* CTA Section */}
      <section className="bg-gradient-to-br from-bpurplePrimary to-black text-white py-12 md:py-16" data-aos="fade-up">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold font-montserrat mb-4"
          >
            Ready to Take the Leap? - Watch!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg font-open-sans mb-8"
          >
            Join thousands who trust Bpurple Technology for cutting-edge training, Huawei solutions, and advanced security systems.
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/*<Link href="/training">
              <CustomButton
                title="Explore Training Programs"
                btnType="button"
                textStyles="text-white font-montserrat font-semibold"
                containerStyles="bg-orange rounded-lg py-3 px-6 hover:bg-orange-600 transition duration-300"
              />
            </Link>*/}
           {/* <Link href="/contact">
              <CustomButton
                title="Request a Consultation"
                btnType="button"
                textStyles="text-white font-montserrat font-semibold"
                containerStyles="bg-transparent border-2 border-white rounded-lg py-3 px-6 hover:bg-white hover:text-primary transition duration-300"
              />
            </Link>*/}
          </div>
        </div>
      </section>


      {/* Experience Section */}
      <section className="bg-white py-12 md:py-16" data-aos="fade-up">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <Image
              src="/over52.png"
              height={350}
              width={550}
              alt="Bpurple Technology Experience"
              className="rounded-lg shadow-lg object-cover"
            />
          </motion.div>
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-bpurpleDark font-montserrat text-center lg:text-left">
              Over 5 Years of Excellence in Technology Services
            </h2>
            <p className="text-lg text-gray-700 font-open-sans text-center lg:text-left">
              At Bpurple Technology, we believe in the power of strategic guidance to transform businesses and empower individuals. Our expertise in technology training, Huawei solutions, and advanced security systems helps you navigate challenges and achieve sustainable success.
            </p>
            <p className="text-lg text-gray-700 font-open-sans text-center lg:text-left">
              With a wealth of knowledge across AI, Data Analytics, and cybersecurity, we deliver comprehensive solutions tailored to your unique needs, ensuring measurable results.
            </p>
           {/* <div className="text-center lg:text-left">
              <Link href="/about">
                <CustomButton
                  title="Learn More"
                  btnType="button"
                  textStyles="text-dark font-montserrat font-semibold"
                  containerStyles="bg-orange text-white rounded-lg py-3 px-6 hover:bg-orange-600 transition duration-300"
                />
              </Link>
            </div>*/}
          </div>
        </div>
      </section>

    
 <section className="relative py-12 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-[1440px]">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-bpurpleDark font-sans text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Partner with Us?
        </motion.h2>
        <div className=" flex items-center gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <InfoCard
            icon="/handshake.png"
            title="Results-Driven Approach"
            content="We prioritize measurable outcomes, delivering value through our expert-led training, Huawei solutions, and advanced security systems to empower your success."
          />
          <InfoCard
            icon="/check.png"
            title="Save Time and Effort"
            content="Let us manage the complexities of technology adoption, freeing you to focus on growing your career or business with confidence."
          />
          <InfoCard
            icon="/people.png"
            title="Affordable Excellence"
            content="Our high-quality solutions fit your budget, ensuring you get maximum value without compromising on performance."
          />
        </div>
      </div>
    </section>

      {/* CTA Section */}
<section className="bg-gradient-to-br from-bpurplePrimary to-black text-white py-12 md:py-16" data-aos="fade-up">
  <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-4xl font-bold font-montserrat mb-4"
    >
      Ready to Transform Your Future?
    </motion.h2>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-4 mb-8"
    >
      <p className="text-lg font-montserrat max-w-3xl mx-auto">
        Partner with Bpurple Technology to Unlock Limitless Possibilities, At Bpurple Technology, we’re passionate about empowering individuals and organizations to thrive in the digital age.
      </p>
      
    </motion.div>
    
  </div>
</section>

      {/* Testimonials Section */}
   {/*   <section className="bg-extra py-12 md:py-16" data-aos="fade-up">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-montserrat text-center mb-8">
            What Client Says About Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              imageSrc="/frame4.png"
              quoteIconSrc="/quote.png"
              content="The sessions in Excel, PowerBI, and SQL were clear and effective, enabling me to confidently handle data manipulation, processing, and presentation."
              fullName="Stephanie O."
            />
            <TestimonialCard
              imageSrc="/frame5.png"
              quoteIconSrc="/quote.png"
              content="The data analytics course at Bpurple was a huge success, providing me with essential skills to handle complex datasets and extract valuable insights."
              fullName="Steve Peters"
            />
            <TestimonialCard
              imageSrc="/frame6.png"
              quoteIconSrc="/quote.png"
              content="Working with Bpurple was seamless, with top-notch service and support. Highly recommended!"
              fullName="Ashley M."
            />
          </div>
        </div>
      </section>*/}
    </main>
  );
}