import CourseDetailBodyDA from '@/components/CourseDetailsBodyDA';
import CourseInfo from '@/components/CourseInfo';
import CoursesDetailsHeroDA from '@/components/CoursesDetailsHeroDA';
import React from 'react'

export const metadata = {
  title: 'bpurpleHQ | Courses - School of Data',
};

const page = () => {
  return (
    <div>
      <section className='sm:px-16 px-6 lg:py-10 py-4'>
        <CoursesDetailsHeroDA
          title='School of Data'
          subtitle='Unlock the power of data with our comprehensive Data School learning path. Explore data collection, analysis, visualization, and interpretation techniques across various domains. Whether you are a beginner or an experienced data enthusiast, this path caters to individuals seeking to harness data-driven insights for informed decision-making.'
          // image='/herolady.png'
          status='We are currently taking applications!'
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