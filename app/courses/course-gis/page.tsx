import CourseDetailBody from '@/components/CourseDetailBody';
import CourseInfo from '@/components/CourseInfo';
import CoursesDetailsHero from '@/components/CoursesDetailsHeroGis';
import React from 'react'

export const metadata = {
  title: 'bpurpleHQ | Courses - School of GIS',
};

const page = () => {
  return (
    <div>
      <section className='sm:px-16 px-6 lg:py-10 py-4'>
        <CoursesDetailsHero
          title='School of GIS'
          subtitle='   Explore the fascinating field of Geographic Information Systems (GIS) through our specialized learning path. Learn how to capture, store, analyze, and visualize spatial data to solve real-world problems. From mapping and spatial analysis to geospatial database management, this path equips you with the skills needed to work with geospatial technologies across diverse industries..
          
          Start off your career today as a GIS specialist. Learn to design high quality digital maps using geographical data and analyze spatial and non-spatial information. '
          
          status='We are currently taking applications!'
        />        
      </section>
      <section className='bg-extra'>
        <CourseInfo />
      </section>
      <section>
        <CourseDetailBody />
      </section>
    </div>
  )
}

export default page