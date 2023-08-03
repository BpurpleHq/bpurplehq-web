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
          subtitle='Virtual assistants are revolutionizing the way we manage our personal and professional lives. From automating mundane tasks to providing personalized support, these AI-powered assistants empower individuals and businesses to maximize productivity, improve time management, and enhance overall efficiency..'
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