import CourseDetailBodyVA from '@/components/CourseDetailsBodyVA';
import CourseInfo from '@/components/CourseInfo';
import CoursesDetailsHero from '@/components/CoursesDetailsHero';
import React from 'react'

export const metadata = {
  title: 'bpurpleHQ | Courses - Virtual Assistant',
};

const page = () => {
  return (
    <div>
      <section className='sm:px-16 px-6 lg:py-10 py-4'>
        <CoursesDetailsHero
          title='Virtual Assistant'
          subtitle='Start off your career today as a Virtual Assistant. Learn how to offer administrative services to clients from a remote location.'
          image='/virtualImage.png'
          status='We are currently NOT taking applications!'
        />        
      </section>
      <section className='bg-extra'>
        <CourseInfo />
      </section>
      <section>
        <CourseDetailBodyVA />
      </section>
    </div>
  )
}

export default page