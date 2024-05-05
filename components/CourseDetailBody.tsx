import React from 'react'
import CustomButton from './CustomButton'
import Link from 'next/link'

const CourseDetailBody = () => {
  return (
    <div className='max-w-[1440px] mx-auto flex flex-col sm:px-16 px-6 lg:py-10 py-4'>
        <div>
            <h3 className='text-center text-primary text-headline-3 lg:text-headline-2 lg:text-start'>About this course</h3>
            <p className='text center mt-2'>In today's rapidly evolving world, where location-based data plays a crucial role in decision-making, Geographic Information Systems (GIS) have emerged as indispensable tools. GIS enables organizations to gather, analyze, and visualize spatial data, unlocking valuable insights and empowering informed decision-making processes across various industries. This article aims to shed light on the fundamentals, applications, and benefits of GIS. Geographic Information Systems (GIS) encompass a set of technologies, methodologies, and tools used to capture, manage, analyze, and display geographically referenced data. By integrating spatial data with attributes, GIS enables us to explore relationships, patterns, and trends, providing a comprehensive understanding of complex real-world problems..</p>
        </div>
        <div className='mt-4'>
            <h3 className='text-center text-primary text-headline-3 lg:text-headline-2 lg:text-start'>What you will learn</h3>
            <p className='text center mt-2'> - Introduction to GIS <br/>
- Spatial Data Types<br/>
- Cordinate Systems and Projections <br/>
- Data Collection and Sources <br/>
- Data Management.<br/>
- Spatial Analysis<br/>
- Map Design and Visualization.</p>
          </div>
          <div className='flex justify-center gap-6 mt-6'>
              <Link href='https://forms.gle/ubN1UipLdP3oUcCj8' target="_blank" rel="noopener noreferrer">
                        <CustomButton
                            title='Apply Now'
                            btnType='button'
                            containerStyles='bg-secondary p-3 rounded-lg'
                            textStyles='text-dark'
                        />
                    </Link>
                    <Link href='https://www.canva.com/design/DAFuOfNglAQ/Mck-adTOh_8acflrj4yLHQ/view?website#2:let-s-be-part-of-your-transition-into-the-world-of-tech-we-get-you-started-and-keep-you-purple' target="_blank" rel="noopener noreferrer">
                        <CustomButton
                            title='Download Syllabus'
                            btnType='button'
                            containerStyles='bg-secondary p-3 rounded-lg'
                            textStyles='text-dark'
                        />
                    </Link>
          </div>
    </div>
  )
}

export default CourseDetailBody