import { learningPath } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CustomButton from './CustomButton'

const CoursesOffered = () => {
  return (
    <div className='max-w-[1440px] mx-auto sm:px-16 px-6 py-10'>
      <h3 className='text-headline-3 lg:text-headline-2 text--gray-900 font-bold tracking-tight mb-6'>
        The Learning Paths
      </h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-9'>
        {learningPath.map(({ id, image, title, description, duration, url }) => (
          <div 
            key={id} 
            className='group bg-extra rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'
          >
            <div className='relative aspect-video'>
              <Image 
                src={image} 
                alt={title} 
                fill
                className='object-cover transition-transform duration-500 group-hover:scale-90' 
              />
              <div className='absolute inset-0 bg-black/40'></div>
            </div>
            <div className='p-6 space-y-4'>
              <h4 className='text-xl font-semibold text-primary line-clamp-1 group-hover:text-secondary transition-colors'>
                {title}
              </h4>
              <p className='text-gray-600 line-clamp-2 text-sm'>
                {description}
              </p>
              <div className='flex items-center text-sm font-medium text-gray-500'>
                <span className='flex items-center'>
                  Duration: {duration}
                </span>
              </div>
              <Link href={url} className='block'>
                <CustomButton
                  title='Explore Course'
                  btnType='button'
                  containerStyles='w-full bg-black hover:bg-black rounded-lg py-3 transition-all duration-300'
                  textStyles='text-white font-medium text-center'
                />
              </Link>
            </div>
          </div>    
        ))}
      </div>        
    </div>
  )
}

export default CoursesOffered


// import { learningPath } from '@/constants'
// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'
// import CustomButton from './CustomButton'

// const CoursesOffered = () => {
//   return (
//     <div className='max-w-[1440px] mx-auto sm:px-16 px-6 py-10'>
//      <h3 className='text-headline-3 lg:text-headline-2 text-secondary'>The Learning Paths</h3>
//      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-9'>
//         {learningPath.map(({ id, image, title, description, duration, url }) => (
//             <div key={id} className='bg-extra rounded-lg pb-5 shadow-lg'>
//                 <div className='relative hover:bg-primary lg:hover:scale-105'>
//                     <Image src={image} alt={title} width={417} height={300}  className='object-contain rounded' />
//                 </div>
//                 <p className='mt-3 px-5 text-headline-3 text-primary'>{title}</p>
//                 <p className='mt-3 px-5'>{description}</p>
//                 <p className='mt-3 px-5 font-semibold'>Duration: {duration}</p>

//                 <Link href={url} className='flex-2'>
//                     <CustomButton
//                         title='Explore Course'
//                         btnType='button'
//                         containerStyles='bg-secondary px-3 py-2 rounded-lg mt-3 ml-5 hover:grayscale'
//                         textStyles='text-dark font-medium'
//                     />
//                 </Link>
//             </div>    
//         ))}
//       </div>        
//     </div>
//   )
// }

// export default CoursesOffered