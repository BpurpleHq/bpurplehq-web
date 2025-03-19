import CourseDetailBody from '@/components/CourseDetailsBodyProduct';
import CourseInfo from '@/components/CourseInfo';
import CoursesDetailsHeroPrd from '@/components/CoursesDetailsHeroProduct';
import React from 'react'

export const metadata = {
  title: 'bpurpleHQ | Courses - School of Products',
};

const page = () => {
  return (
    <div>
      <section className='sm:px-16 px-6 lg:py-10 py-4'>
        <CoursesDetailsHeroPrd
          title='School of Products'
          subtitle='Learn the art and science of product development through our Products School learning path. Explore product management methodologies, user experience design principles, and agile development practices. Whether you aspire to create innovative software products or manage product lifecycles effectively, this path prepares you for success in the competitive product landscape.'
          // image='/productImage.png'
          status='Applications are Open!'
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