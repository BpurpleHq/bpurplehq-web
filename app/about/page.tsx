
import { services1, testimonials, values } from '@/constants';
import Image from 'next/image';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'bpurple | About',
};

interface ValueCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

const ValueCard = ({ title, description, image }: ValueCardProps) => (
  <div className="border border-primary rounded-xl py-4 px-5 shadow-xl hover:shadow-2xl transition-shadow">
    <h3 className="text-center font-bold text-headline-3 text-primary mt-5">{title}</h3>
    <p className="lg:w-[300px] mt-5">{description}</p>
    <div className="flex justify-center mt-3">
      <Image src={image} alt={title} width={70} height={70} priority />
    </div>
  </div>
);

interface ServiceItemProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

const ServiceItem = ({ title, description, image }: ServiceItemProps) => (
  <div className="mt-4 group">
    <div className="flex gap-3 items-center">
      <Image src={image} alt="service icon" width={15} height={15} className="transition-transform group-hover:scale-110" />
      <h3 className="font-bold text-primary">{title}</h3>
    </div>
    <p className="lg:w-[550px] mt-1 pl-6">{description}</p>
  </div>
);

interface MissionSectionProps {
  title: string;
  content: string;
  variant: 'primary' | 'secondary';
  align?: 'start' | 'end';
}

const MissionSection = ({ title, content, variant, align = 'start' }: MissionSectionProps) => (
  <div className={`flex flex-col ${align === 'end' ? 'lg:items-end' : 'lg:items-start'}`}>
    <h2 className={`text-headline-3 lg:text-headline-2 text-${variant}`}>{title}</h2>
    <p className={`lg:w-[600px] mt-2 ${align === 'end' ? 'lg:text-end' : ''}`}>{content}</p>
  </div>
);

export default function AboutPage() {
  return (
    <main>
      <section className="max-w-[1440px] mx-auto sm:px-16 px-6 pt-4 pb-14">
        <h3 className="lg:text-headline-4 text-headline-3 text-primary lg:mb-12 mb-10 underline font-bold lg:text-mid">
          About Us
        </h3>
        <div className="flex flex-col lg:flex-row justify-between">
          <h2 className="text-headline-3 lg:text-headline-2 text-primary text-center lg:text-start">
            We Create Experience That Put <span className="text-secondary">People</span> First
          </h2>
          <div className="lg:max-w-[600px]">
            <p className="lg:mt-6 mt-3">
              Bpurple connotes a state of mind, a state of relevance, agility, staying up to date and evolving with technology 
              trends while building market ready skills and making businesses to stay competitive.
            </p>
            <p className="mt-3">
              We are focused on providing high-quality tech services, products, training, hiring, and consulting to businesses 
              and individuals looking to acquire and develop their tech skills.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-extra">
        <div className="max-w-[1440px] mx-auto sm:px-16 px-6 lg:py-10 py-5">
          <h2 className="text-headline-3 lg:text-headline-2 text-secondary text-center lg:text-start">Our Values</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            {values.map((value) => (
              <ValueCard key={value.id} {...value} />
            ))}
          </div>
        </div>
      </section>

     <section className="max-w-[1440px] mx-auto sm:px-16 px-6 lg:py-16 py-8 bg-gradient-to-br from-background to-muted">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="bg-card rounded-xl p-6 h-full shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <span className="inline-block p-3 bg-primary/10 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Our Vision</h3>
              <p className="text-muted-foreground">To be a leading technology education provider, empowering individuals and corporates to thrive in a fast moving tech ecosystem.</p>
            </div>
          </div>

          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="bg-card rounded-xl p-6 h-full shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <span className="inline-block p-3 bg-secondary/10 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </span>
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-3">Our Mission</h3>
              <p className="text-muted-foreground">To increase tech literacy by establishing coding bootcamps and tech hotspots in major African cities and states, delivering comprehensive solutions.</p>
            </div>
          </div>

          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="bg-card rounded-xl p-6 h-full shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <span className="inline-block p-3 bg-primary/10 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Our Goal</h3>
              <p className="text-muted-foreground">To be part of the solution in making Africa a tech-first continent, becoming the leading tech training and consulting firm in Nigeria and across major African cities.</p>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-extra">
        <div className="max-w-[1440px] mx-auto sm:px-16 px-6 lg:py-10 py-5">
          <h2 className="text-headline-3 lg:text-headline-2 text-center text-primary mt-2">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
            {services1.map((service) => (
              <ServiceItem key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}



// import { services1, testimonials, values } from '@/constants'
// import Image from 'next/image'
// import React from 'react'

// export const metadata = {
//   title: 'bpurple | About',
// };

// const page = () => {
//   return (
//     <div>
//     <section className='max-w-[1440px] mx-auto sm:px-16 px-6 pt-4 pb-14'>
//       <h3 className='lg:text-headline-4 text-headline-3 text-primary lg:mb-12 mb-10 underline font-bold lg:text-mid'>About Us</h3>
//       <div className='flex flex-col lg:flex-row justify-between'>
//         <div className=''>
//           <h2 className='text-headline-3 lg:text-headline-2 text-primary text-center lg:text-start'>We Create Experience That Put <span className='text-secondary'>People</span> First</h2>
//         </div>
//         <div>
//           <p className='lg:mt-6 mt-3'>Bpurple connotes a state of mind, a state of relevance, agility, staying up to date and evolving with technology 
//           trends while building market ready skills and making businesses to stay competitive.<br /> <br />We are focused on providing high-quality tech services, products, 
//           training, hiring, and consulting to businesses and individuals looking to acquire and develop their tech skills.</p>
//         </div>
//         </div>
//         {/** <div className='flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between mt-3'>
//           <Image src='/aboutImage1.png' width={520} height={300} alt='about image' />
//           <Image src='/aboutImage2.png' width={550} height={359} alt='about image' />
//         </div> **/}
//       </section>
//         <section className='bg-extra'>
//         <div className='max-w-[1440px] mx-auto sm:px-16 px-6 lg:py-10 py-5'>
//           <h2 className='font-semibold text-center lg:text-start'></h2>
//           <h2 className='text-headline-3 lg:text-headline-2 text-secondary text-center lg:text-start'>Our Values</h2>
//           <div className='flex flex-col lg:flex-row gap-4 lg:gap-0 lg:justify-between mt-3'>
//             {values.map(({ id, title, description, image }) => (
//               <div key={id} className='border border-primary rounded-xl py-4 px-5 shadow-xl'>
//                 <p className='text-center font-bold text-headline-3 text-primary mt-5'>{title}</p>
//                 <p className='lg:w-[300px] mt-5'>{description}</p>
//                 <div className='flex justify-center mt-3'>
//                   <Image src={image} alt={title} width={70} height={70} />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       <section>
//         <div className='max-w-[1440px] mx-auto flex flex-col gap-3 sm:px-16 px-6 lg:py-10 py-4'>
//           <h3 className='text-body-2 font-bold'></h3>
//           <div className='flex flex-col Lg:items-start mt-3'>
//             <h2 className='text-headline-3 lg:text-headline-2 text-primary'>Our Vision</h2>
//             <p className='lg:w-[600px] mt-2'>Our vision is to be a leading technology education provider, empowering individuals and corporates to thrive in a fast moving tech ecosystem. </p>
//           </div>
//           <div className='relative flex flex-col lg:items-end'>
//             <h2 className='text-headline-3 lg:text-headline-2 text-secondary'>Our Mission</h2>
//             <p className='lg:w-[600px] lg:text-end mt-2'>Our mission is to increase tech literacy by establishing coding bootcamps and tech hotspots in major African cities and states, delivery comprehensive solutions. </p>
//           </div>
//           <div className='flex flex-col lg:items-start'>
//             <h2 className='text-headline-3 lg:text-headline-2 text-primary'>Our Goal</h2>
//             <p className='lg:w-[600px] mt-2'>Our long-term goal is to be part of the solution to making africa a tech first continent, to become the leading tech training and consulting firm in Nigeria and spanning to major cities in the African continent, with a reputation for providing high-quality services and producing top-notch talent in the tech industry.</p>
//           </div>
//         </div>
//       </section>
    
//       <section className='bg-extra'>
//         <div className='max-w-[1440px] mx-auto sm:px-16 px-6 lg:py-10 py-5'>
//           <h3 className='text-body-2 text-center font-semibold'></h3>
//           <h2 className='text-headline-3 lg:text-headline-2 text-center text-primary mt-2'>Our Services</h2>
//           <div className='grid grid-cols-1 md:grid-cols-2'>
//             {services1.map(({ id, title, description, image }) => (
//               <div key={id} className='mt-4'>
//                 <div className='flex gap-3'>
//                   <Image src={image} alt='dot' width={15} height={15} />
//                   <p className='text-bold text-primary'>{title}</p>
//                 </div>
//                 <p className='lg:w-[550px] mt-1 pl-6'>{description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
      
//     </div>
//   )
// }

// export default page