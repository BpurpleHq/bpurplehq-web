




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
import ClientsLogo from "@/components/clients";

export default function Home() {

  const router = useRouter()

  useEffect(() => {
        AOS.init();
      }, [])
      
  return (
    <main className="w-full relative">
    
    <section className='bg-extra' data-aos="fade-up">
        <HeroCarousel />
        <ClientsLogo />

      </section>
      
      <section className='bg-white flex flex-col-reverse lg:flex-row gap-5 lg:gap-0 relative z-0 max-w-[1440px] mx-auto sm:px-16 px-3 pt-[10px] mb-[20px] lg:mb-0 pb-7 lg:pb-0 mt-5' data-aos="fade-up">
        <div className='flex flex-col lg:justify-start lg:items-start lg:mt-[50px] w-full lg:max-w-[60%] flex-1'>
        <h1 className='text-headline-3 lg:text-headline-2 text-primary text-center md:text-start lg:mb-10'>There is so much more DATA</h1>
          {/*<h1 className='text-headline-2 text-primary text-center md:text-start'>Unlocking Business Potential with Customized  <span className='text-secondary'>Technology Solutions</span></h1>*/}
        
         <p className='text-body lg:text-headline-4 mt-5 lg:w-[80%]'>Today, you have access to an unprecedented volume of data, and it’s time to unlock its full potential. Relying on guesswork, intuition, or outdated habits could mean you’re overlooking valuable opportunities buried in the data you’ve meticulously collected. </p>  

         <p className='text-body lg:text-headline-4 mt-5 lg:w-[80%]'>Our customized data discovery report will help you assess your current data capabilities and provide tailored insights into the most impactful areas for growth and potential returns on investment. </p>

          {/* <p className='text-body lg:text-headline-4 text-primary mt-4 lg:w-[75%]'>We are part of the solution in building a <span className='text-secondary text-headline-3'>SKILLED</span> continent.</p> */}
         
         
          <div className='flex justify-center items-center lg:justify-items-start gap-3 mt-8 md:mt-8'>
            
            <Link href='/community' onClick={() => router.push('/community')}>
            <CustomButton
              title='Join Community'
              btnType='button'
              textStyles='text-dark'
              containerStyles='hidden bg-transparent rounded-lg py-1 min-w-[130px]'
            />
            </Link >
          </div>
        </div>
        

        <div className='flex relative lg:w-[550px] lg:h-[510px] h-[320px] rounded-xl'>
          <Image src='/aboutImg.png' alt='Hero Image'fill  />

       {/* <div className='flex relative lg:w-[480px] lg:h-[550px] h-[300px] rounded-xl'>
          <Image src='/heroImage.png' alt='Hero Image'fill  /> */}


        </div>
        {/* <div className='hidden lg:block absolute bottom-[10%] left-[-1px]'>
          <Image src='/arrowIcon.svg' alt='arrow' width={130} height={700} />
        </div> */} 
      </section>

      <section className='bg-extra' data-aos="fade-up">
        <Metrics />
      </section>


       <section className='bg-white' data-aos="fade-up" >
        
        <div className="flex gap-8 flex-col lg:flex-row lg:justify-between md:items-center px-[54px] pb-4 mt-10">
          <Image
            src="/contact.png"
            height={150}
            width={350}
            alt="image"
            className="flex-1 mt-5 lg:mt-0"
          />
          <div className="flex-1">
            <h2 className="text-subtitle text-center lg:text-start">
              Over 5 years of Experience in Technology Services, Training and Consulting.
            </h2>
            <p className="text-body text-center lg:text-start pt-3">
              We believe in the power of strategic guidance to transform
              businesses and drive sustainable success. With a team of seasoned
              professionals and a commitment to excellence, we partner with
              organizations to navigate challenges, seize opportunities, and
              achieve full potential.
            </p>
            <p className="text-body text-center lg:text-start py-6">
              We bring together a wealth of knowledge across various industries,
              enabling us to offer comprehensie solutions tailored to the
              unqique needs of our clients
            </p>

           {/** <div className="flex justify-center items-center lg:justify-start lg:items-start">
              <CustomButton
                title="Learn More"
                btnType="button"
                containerStyles="bg-secondary p-2 rounded-lg"
                textStyles="text-dark font-medium"
              />
            </div> */}
          </div>
        </div>
      
      </section>


      <section className='bg-extra' data-aos="fade-up">
        <section>
        <div>
         
          <div className="bg-extra mt-3 px-[60px]">
            <div className="flex flex-col md:flex-row md:justify-around">
              <InfoCard
                className="md:border-r md:border-gray-500 md:border-opacity-50"
                icon="/handshake.png"
                title="Why Choose Us"
                content="Because we focus on results. For us, it's all about what adds value for you and your business. Above all, we want our words to work for you."
              />
              <InfoCard
                className="md:border-r md:border-gray-500 md:border-opacity-50"
                icon="/check.png"
                title="Save Your Time"
                content="Let us handle the complexities while you focus on what really matters. With our strategic guidance, you’ll have more time to grow your business and reach your goals."
              />
              <InfoCard
                className=""
                icon="/people.png"
                title="Affordable Price For You"
                content="Great service doesn’t have to come with a hefty price tag. We offer top-notch solutions that fit your budget, ensuring you get the best value without breaking the bank."
              />
            </div>
          </div>
        </div>
      </section>
      </section>

 <section className='bg-extra' data-aos="fade-up">
       <CTA />
      </section>
      
<section className='bg-extra' data-aos="fade-up">
       
        
        <div className="flex justify-center items-center">
          <h2 className="sm:px-10 text-center text-primary m-5 lg:text-headline-2 text-headline-3">
            What Client Says About Us
          </h2>
        </div>
        <div className="flex flex-wrap flex-col items-center justify-center gap-12 md:flex-row py-7 px-7 lg:px-0">
          <TestimonialCard
            imageSrc="/frame4.png"
            quoteIconSrc="/quote.png"
            content="The sessions in Excel, PowerBI and SQL were clear and effective, enabling me to confidently handle data manipulation, processing, and presentation.."
            fullName="Stephanie O."
          />
          <TestimonialCard
            imageSrc="/frame5.png"
            quoteIconSrc="/quote.png"
            content="The data analysis course at bpurplehq was a huge success, providing me with essential skills to handle complex datasets and extract valuable insights in real-time."
            fullName="Steve Peters"
          />
          <TestimonialCard
            imageSrc="/frame6.png"
            quoteIconSrc="/quote.png"
            content="The was easy working with the team at bpurple technology, service level and customer service was top notch. Highly recommended all day all time"
            fullName="Ashey M."
          />
        </div>
      </section>
      


      <section className='bg-white' data-aos="fade-up">
        <Products />
      </section>
      
      
    </main>
  )
}
