import CourseDetailBodyQA from '@/components/CourseDetailsBodyQA';
import CourseInfo from '@/components/CourseInfo';
import CoursesDetailsHero from '@/components/CourseDetailsHeroQA';
import React from 'react'

export const metadata = {
  title: 'bpurpleHQ | Courses - SDET',
};

const page = () => {
  return (
    <div>
      <section className='sm:px-16 px-6 lg:py-10 py-4'>
        <CoursesDetailsHero
          title='Software Development in Test (SDET)'
          subtitle='Master the art of software testing with our comprehensive learning path. Explore testing methodologies, strategies, and tools used to ensure software quality and reliability. From manual testing techniques to automated testing frameworks, this path covers a wide range of testing approaches to help you become a proficient software tester.'
          image='/qa.png'
          status='Applications is Open!'
        />        
      </section>
      <section className='bg-extra'>
        <CourseInfo />
      </section>
      <section>
        <CourseDetailBodyQA />
      </section>
    </div>
  )
}

export default page