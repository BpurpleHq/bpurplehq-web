import CourseDetailBody from '@/components/CourseDetailBody';
import CourseInfo from '@/components/CourseInfo';
import CoursesDetailsHero from '@/components/CoursesDetailsHero';
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
          subtitle='Geographic Information Systems (GIS) encompass a set of technologies, methodologies, and tools used to capture, manage, analyze, and display geographically referenced data. By integrating spatial data with attributes, GIS enables us to explore relationships, patterns, and trends, providing a comprehensive understanding of complex real-world problems.
          
          Start off your career today as a GIS specialist. Learn to design high quality digital maps using geographical data and analyze spatial and non-spatial information. '
          image='/GISImage.png'
          status='We are currently NOT taking applications!'
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