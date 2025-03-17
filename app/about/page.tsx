
import { services1, testimonials, values } from '@/constants';
import Image from 'next/image';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'bpurpleHQ | About US',
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
    <main className=" relative w-full">
        <section className="bg-gray-50 pt-10 pb-6" data-aos="fade-up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          
            {/* Text Content */}
            <div className="lg:w-1/2 m-2 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                Creating a Unique Experience That Put YOU First.

              </h1>
              <p className="mt-4 text-lg text-gray-800">
                We are focused on providing high-quality tech services, products, training, hiring, and consulting to businesses 
              and individuals looking to acquire and develop their tech skills.</p>
              {/*<button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700">
                View Courses
              </button>*/}
            </div>
            {/* Image Collage */}
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              {/* Placeholder images */}
              <img src="" alt="" className="rounded-lg" />
              
            </div>
            
          </div>
        </section>

      {/*<section className="max-w-[1440px] mx-auto sm:px-16 px-6 pt-4 pb-14">
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
      </section>*/}

      

     <section className="max-w-[1440px] mx-auto sm:px-16 px-6 lg:py-16 py-8 bg-extra bg-gradient-to-br from-background to-muted">
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
              <p className="text-muted-foreground">To be a leading technology provider, empowering individuals and corporates to thrive in a fast pace tech ecosystem, leveraging emerging technology tools and principles to deliver business value and drive innovation.</p>
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
              <p className="text-muted-foreground">Our mission is to provide exceptional tech services, innovative products, hands-on training, and strategic consulting tailored to the unique needs of businesses and individuals.</p>
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
              <p className="text-muted-foreground">Whether it’s developing new capabilities, hiring top talents, or building a resilient workforce ready for the challenges of tomorrow, we are committed to helping our 
clients thrive in the digital age. We bring expertise, passion, and a forward-thinking approach to ensure you don’t just keep up with the future.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="max-w-[1440px] mx-auto sm:px-16 px-6 lg:py-10 py-5">
          <h2 className="text-headline-3 lg:text-headline-2 text-secondary text-center lg:text-start">Our Values</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            {values.map((value) => (
              <ValueCard key={value.id} {...value} id={String(value.id)} />
            ))}
          </div>
        </div>
      </section>


      <section className="bg-extra">
        <div className="max-w-[1440px] mx-auto sm:px-16 px-6 lg:py-10 py-5">
          <h2 className="text-headline-3 lg:text-headline-2 text-center text-primary mt-2">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
            {services1.map((service) => (
              <ServiceItem key={service.id} {...service} id={String(service.id)} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

