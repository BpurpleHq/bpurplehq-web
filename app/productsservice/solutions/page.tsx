import CustomButton from '@/components/CustomButton';
import { workforceCard } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react'
import { AchievementsCard, Card, InfoCard, TestimonialCard } from '@/components/InfoCard';

export const metadata = {
  title: 'bpurpleHQ | Products and Solutions',
};

const page = () => {
  return (
    <div>

       {/* <section className='bg-extra' data-aos="fade-up">
        <section>
        <div>
         
          <div className="bg-extra mt-3 px-[60px]">
            <div className="flex flex-col md:flex-row md:justify-around">
              <InfoCardservice
                className=""
                
                title="Why Choose Us"
                content="Because we focus on results. For us, it's all about what adds value for you and your business. Above all, we want our words to work for you."
              />
              <InfoCardservice
                className=""
               
                title="Save Your Time"
                content="Let us handle the complexities while you focus on what really matters. With our strategic guidance, you’ll have more time to grow your business and reach your goals."
              />
              <InfoCardservice
                className=""
                
                title="Affordable Price For You"
                content="Great service doesn’t have to come with a hefty price tag. We offer top-notch solutions that fit your budget, ensuring you get the best value without breaking the bank."
              />

            </div>
          </div>
          <div className="bg-extra mt-3 px-[60px]">
            <div className="flex flex-col md:flex-row md:justify-around">
              <InfoCardservice
                className=""
                
                title="Why Choose Us"
                content="Because we focus on results. For us, it's all about what adds value for you and your business. Above all, we want our words to work for you."
              />
              <InfoCardservice
                className=""
                
                title="Save Your Time"
                content="Let us handle the complexities while you focus on what really matters. With our strategic guidance, you’ll have more time to grow your business and reach your goals."
              />
             
              
            </div>
          </div>
        </div>
      </section>
      </section> */}

 <section className='bg-white' data-aos="fade-up">
  <div className='max-w-[1440px] mx-auto flex flex-col-reverse lg:flex-row justify-between items-center sm:px-16 px-6 lg:py-10 py-4'>
    <div className='lg:w-1/2 m-5 lg:m-5 rounded-2xl overflow-hidden lg:order-1 order-2'>
      <Image 
        src='/frame444.jpeg' 
        alt='workforce image' 
        layout='responsive' 
        width={700} 
        height={550} 
      />
    </div>
    <div className='lg:w-1/2 mt-5 lg:mt-0 lg:order-2 order-1'>
      <h2 className='text-headline-3 text-center lg:text-start lg:text-headline-2 text-primary'>
       Expert Web & APP <span className='text-secondary'>Development</span> Services
      </h2>
      <p className='lg:w-[560px] mt-3'>
        Elevate your online presence with our expert web development services. We design and build custom, responsive, and secure websites that meet your unique business needs and goals. Let's get started.
Contact us to bring your vision to life.

      </p>
        <p className='lg:w-[560px] mt-3'>
        
Contact us to bring your vision to life.
        
      </p>
    </div>
  </div>
</section>


      <section className='bg-extra' data-aos="fade-up">
        <div className='max-w-[1440px] mx-auto flex flex-col-reverse lg:flex-row justify-between items-center sm:px-16 px-6 lg:py-10 py-4'>
          <div className='mt-4 lg:mt-4'>
            <h2 className='text-headline-3 text-center lg:text-start lg:text-headline-2 text-primary lg:w-[522px]'>Prepare and <span className='text-secondary'>Empower</span> your labor force for the <span className='text-secondary'>future</span> of work.</h2>

            <p className='lg:w-[560px] mt-3'>The future of work is shaped by transformative trends such as automation, artificial intelligence, remote collaboration, and a shift toward skill-based employment. As industries embrace digitization and innovation, organizations must ensure their teams are agile, resilient, and equipped to handle emerging technologies and roles.

            </p>

           

            <p className='lg:w-[560px] mt-3'>Let bpurpleHQ help you make that team a dream come true. Contact us clicking the button below</p>


           {/*  <div className='mt-5'>
              <Link href='/faq/ask-a-question' target="_blank" rel="noopener noreferrer">
                <CustomButton 
                  title='Connect with us'
                  containerStyles='bg-secondary p-2 rounded-xl'
                  btnType='button'
                  textStyles='text-dark'
                />
              </Link>  
            </div> */}
          </div>
          <div className='lg:w-[] m-5'>
            <Image src='/frame1.png' alt='workforce image' width={700} height={550} />
          </div>
        </div>
      </section>

      <section className='bg-white' data-aos="fade-up">
        <div className='max-w-[1440px] mx-auto flex flex-col-reverse lg:flex-row justify-between items-center sm:px-16 px-6 lg:py-10 py-4'>
          
           <div className='lg:w-[] m-10'>
            <Image src='/frame2.png' alt='workforce image' width={700} height={550} />
          </div>

          <div className='mt-4 lg:mt-4'>
            <h2 className='text-headline-3 text-center lg:text-start lg:text-headline-2 text-primary lg:w-[522px]'>Drive Your Business with <span className='text-secondary'>Tailored Solutions</span> for Your Unique Need.</h2>
            <p className='lg:w-[560px] mt-3'>Every business operates differently, with unique processes, priorities, and pain points. Generic tools often fall short in addressing specific needs, resulting in inefficiencies and missed opportunities. Our tailored solutions are designed to fit your operations perfectly, ensuring maximum effectiveness and a competitive edge.</p>

            <p className='lg:w-[560px] mt-3'>Your business deserves solutions that are as unique as your processes. Let us help you unlock new efficiencies, improve performance, and achieve your goals with tailored strategies designed for your success. Contact us to schedule a consultation to learn how we can help drive your business with amazing, customized solutions. </p>

<p className='lg:w-[560px] mt-3'>Together, we’ll take your business to the next level!</p>


          </div>
         
        </div>
      </section>
      <section className='max-w-[1440px] mx-auto sm:px-16 px-6 lg:py-10 py-4 bg-extra data-aos="fade-up"'>
        <h2 className='text-headline-3 text-primary text-center'>Transform your labor force</h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-3'>
          {workforceCard.map(({ id, title, content }) => (
            <div key={id}>
              <h4 className='font-semibold text-center'>{title}</h4>
              <p className='text-center pt-[8px]'>{content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default page