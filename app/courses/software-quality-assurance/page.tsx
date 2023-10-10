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
          subtitle='Throughout the training, participants will engage in hands-on exercises and real-world projects that simulate software testing scenarios. By applying their knowledge in practical settings, they will gain the confidence and competence to address testing challenges in their professional roles. Assessment methods, including quizzes, assignments, and a final project, will be used to evaluate participants understanding and application of SDET concepts.'
          image='/virtualImage.png'
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