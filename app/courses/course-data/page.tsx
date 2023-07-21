import CourseDetailBodyDA from '@/components/CourseDetailsBodyDA';
import CourseInfo from '@/components/CourseInfo';
import CoursesDetailsHero from '@/components/CoursesDetailsHero';
import React from 'react'

export const metadata = {
  title: 'bpurpleHQ | Courses - School of Data',
};

const page = () => {
  return (
    <div>
      <section className='sm:px-16 px-6 lg:py-10 py-4'>
        <CoursesDetailsHero
          title='School of Data'
          subtitle='Start off your career today as a Data Analyst. Learn how to review and identify key insights into business’ customers and ways data can be used to solve problems.'
          image='/dataImage.png'
          status='We are currently NOT taking applications!'
        />        
      </section>
      <section className='bg-extra'>
        <CourseInfo />
      </section>
      <section>
        <CourseDetailBodyDA />
      </section>
    </div>
  )
}

export default page