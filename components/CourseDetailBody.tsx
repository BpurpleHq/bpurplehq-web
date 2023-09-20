import React from 'react'
import CustomButton from './CustomButton'
import Link from 'next/link'

const CourseDetailBody = () => {
  return (
    <div className='max-w-[1440px] mx-auto flex flex-col sm:px-16 px-6 lg:py-10 py-4'>
        <div>
            <h3 className='text-center text-primary text-headline-3'>About this course</h3>
            <p className='text center mt-2'>In today's rapidly evolving world, where location-based data plays a crucial role in decision-making, Geographic Information Systems (GIS) have emerged as indispensable tools. GIS enables organizations to gather, analyze, and visualize spatial data, unlocking valuable insights and empowering informed decision-making processes across various industries. This article aims to shed light on the fundamentals, applications, and benefits of GIS. Geographic Information Systems (GIS) encompass a set of technologies, methodologies, and tools used to capture, manage, analyze, and display geographically referenced data. By integrating spatial data with attributes, GIS enables us to explore relationships, patterns, and trends, providing a comprehensive understanding of complex real-world problems..</p>
        </div>
        <div className='mt-4'>
            <h3 className='text-center text-primary text-headline-3'>What you will learn</h3>
            <p className='text center mt-2'>- Introduction to GIS: Understanding the basic principles, components, and applications of GIS. <br/>
- Spatial Data Types: Exploring different types of spatial data, including points, lines, polygons, and raster data.<br/>
- Cordinate Systems and Projections: Understanding coordinate systems, map projections, and their importance in spatial data analysis. <br/>
- Data Collection and Sources: Learning various methods of data collection, including GPS, remote sensing, and digitizing. Exploring different data sources such as aerial imagery, satellite imagery, and open data repositories.<br/>
- Data Management: Learning techniques to organize, store, and manage spatial data effectively. This includes file formats, geodatabases, metadata, and data quality assurance.<br/>
- Spatial Analysis: Applying analytical techniques to spatial data, including buffering, overlay analysis, proximity analysis, and spatial querying.<br/>
- Map Design and Visualization: Understanding principles of cartography, creating effective maps, and visualizing spatial data using different symbology and labeling techniques.</p>
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