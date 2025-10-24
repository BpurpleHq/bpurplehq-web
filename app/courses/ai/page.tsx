import CourseDetailBodyAI from '@/components/CourseDetailsBodyAI';
import CourseInfo from '@/components/CourseInfo';
import CoursesDetailsHeroAI from '@/components/CoursesDetailsHeroAI';
import React from 'react'

export const metadata = {
  title: 'bpurpleHQ | Courses - AI',
};

const page = () => {
  return (
    <div>
      <section className='sm:px-16 px-6 lg:py-10 py-4'>
        <CoursesDetailsHeroAI
          title='School of Artificial Intelligence'
          subtitle='Embark on a journey into the realm of Artificial Intelligence (AI) with our specialized learning path. From machine learning algorithms to neural network architectures, delve into the intricacies of AI technology. Gain hands-on experience in building intelligent systems capable of performing tasks that traditionally require human intelligence.'
          status='We are NOT currently taking applications!'
        />        
      </section>
      <section className='bg-extra'>
        <CourseInfo />
      </section>
      <section>
        <CourseDetailBodyAI />
      </section>
    </div>
  )
}

export default page

// /// pages/AISchool.tsx
// "use client"

// import { useEffect } from 'react';
// import { useState } from 'react';
// import React from 'react'
// import { useRouter } from 'next/navigation'
// import Image from 'next/image';
// import { motion } from 'framer-motion'; // For animations

// // Placeholder assets
// const heroImage = '/slideimg2.jpg';
// const courseImage1 = '/productImage.png';
// const courseImage2 = '/productImage.png';
// const courseImage3 = '/productImage.png';
// const testimonialAvatar = '/testimonial2.png';

// const page: React.FC = () => {

//   return (
//     <div className="min-h-screen bg-gray-900 text-white font-sans">

//         <section>
//         <h2 className="text-4xl font-bold text-center mb-12">Our Programs</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
//           {/* Course Card 1 */}
//           <div className="group relative rounded-lg overflow-hidden bg-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-2">
//             <Image
//               src={courseImage1}
//               alt="AI Fundamentals"
//               width={400}
//               height={250}
//               className="object-cover group-hover:scale-110 transition-transform duration-500"
//             />
//             <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
//             <div className="p-6 relative z-10">
//               <h3 className="text-2xl font-semibold">AI Fundamentals</h3>
//               <p className="mt-2 text-gray-300">
//                 Dive into the basics of AI, from algorithms to neural networks.
//               </p>
//               <a href="#" className="mt-4 inline-block text-indigo-400 hover:underline group-hover:scale-105 transition-transform">
//                 Learn More
//               </a>
//             </div>
//           </div>
//           {/* Course Card 2 */}
//           <div className="group relative rounded-lg overflow-hidden bg-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-2">
//             <Image
//               src={courseImage2}
//               alt="Machine Learning Mastery"
//               width={400}
//               height={250}
//               className="object-cover group-hover:scale-110 transition-transform duration-500"
//             />
//             <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
//             <div className="p-6 relative z-10">
//               <h3 className="text-2xl font-semibold">Machine Learning Mastery</h3>
//               <p className="mt-2 text-gray-300">
//                 Build and deploy ML models with real-world applications.
//               </p>
//               <a href="#" className="mt-4 inline-block text-indigo-400 hover:underline group-hover:scale-105 transition-transform">
//                 Learn More
//               </a>
//             </div>
//           </div>
//           {/* Course Card 3 */}
//           <div className="group relative rounded-lg overflow-hidden bg-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-2">
//             <Image
//               src={courseImage3}
//               alt="Advanced AI"
//               width={400}
//               height={250}
//               className="object-cover group-hover:scale-110 transition-transform duration-500"
//             />
//             <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
//             <div className="p-6 relative z-10">
//               <h3 className="text-2xl font-semibold">Advanced AI</h3>
//               <p className="mt-2 text-gray-300">
//                 Explore cutting-edge AI research and innovation.
//               </p>
//               <a href="#" className="mt-4 inline-block text-indigo-400 hover:underline group-hover:scale-105 transition-transform">
//                 Learn More
//               </a>
//             </div>
//           </div>
//         </div>
//         </section>

//         <section>
//         <h2 className="text-4xl font-bold text-center mb-12">What Our Students Say</h2>
//         <div className="max-w-4xl mx-auto px-6">
//           <div className="flex flex-col md:flex-row gap-8">
//             <div className="flex-1 p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300">
//               <p className="text-gray-300 italic">
//                 "The AI Fundamentals course gave me the confidence to switch careers. The instructors are phenomenal!"
//               </p>
//               <div className="mt-4 flex items-center">
//                 <Image
//                   src={testimonialAvatar}
//                   alt="Student"
//                   width={50}
//                   height={50}
//                   className="rounded-full transform hover:scale-110 transition-transform duration-300"
//                 />
//                 <span className="ml-4 font-semibold">Alex M.</span>
//               </div>
//             </div>
//             <div className="flex-1 p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300">
//               <p className="text-gray-300 italic">
//                 "Machine Learning Mastery was a game-changer. I’m now building AI tools at work!"
//               </p>
//               <div className="mt-4 flex items-center">
//                 <Image
//                   src={testimonialAvatar}
//                   alt="Student"
//                   width={50}
//                   height={50}
//                   className="rounded-full transform hover:scale-110 transition-transform duration-300"
//                 />
//                 <span className="ml-4 font-semibold">Priya S.</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>


//     </div>
//   );
// };

// export default page;