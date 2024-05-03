import CourseDetailBodySW from '@/components/CourseDetailsBodySW';
import CourseInfo from '@/components/CourseInfo';
import CoursesDetailsHeroSW from '@/components/CourseDetailsHeroSW';
import React from 'react'

export const metadata = {
  title: 'bpurpleHQ | Courses - Software',
};

const page = () => {
  return (
    <div>
      <section className='sm:px-16 px-6 lg:py-10 py-4'>
        <CoursesDetailsHeroSW
          title='Software Engineering'
          subtitle='Master the craft of software engineering with our comprehensive learning path. From software design and development methodologies to testing and deployment strategies, this path covers the full software development lifecycle. Whether you are interested in front-end development, back-end engineering, or full-stack development, our curriculum provides the essential skills and knowledge to thrive in the software industry.'
          image='/bphq.png'
          status='We are currently taking applications!'
        />        
      </section>
      <section className='bg-extra'>
        <CourseInfo />
      </section>
      <section>
        <CourseDetailBodySW />
      </section>
    </div>
  )
}

export default page






  
