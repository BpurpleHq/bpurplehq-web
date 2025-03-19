import CourseDetailBodyAI from '@/components/CourseDetailsBodyAI';
import CourseInfo from '@/components/CourseInfo';
import CoursesDetailsHeroAI from '@/components/CoursesDetailsHeroAI';
import React from 'react'

export const metadata = {
  title: 'bpurpleHQ | Courses - AI',
};

const page = () => {
  return (
    <div>
      <section className='sm:px-16 px-6 lg:py-10 py-4'>
        <CoursesDetailsHeroAI
          title='School of Artificial Intelligence'
          subtitle='Embark on a journey into the realm of Artificial Intelligence (AI) with our specialized learning path. From machine learning algorithms to neural network architectures, delve into the intricacies of AI technology. Gain hands-on experience in building intelligent systems capable of performing tasks that traditionally require human intelligence.'
          status='We are NOT currently taking applications!'
        />        
      </section>
      <section className='bg-extra'>
        <CourseInfo />
      </section>
      <section>
        <CourseDetailBodyAI />
      </section>
    </div>
  )
}

export default page