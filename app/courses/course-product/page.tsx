import CourseDetailBody from '@/components/CourseDetailsBodyProduct';
import CourseInfo from '@/components/CourseInfo';
import CoursesDetailsHero from '@/components/CoursesDetailsHero';
import React from 'react'

export const metadata = {
  title: 'bpurpleHQ | Courses - School of Product',
};

const page = () => {
  return (
    <div>
      <section className='sm:px-16 px-6 lg:py-10 py-4'>
        <CoursesDetailsHero
          title='School of Product'
          subtitle='Start off your career today as a Product Manager. Learn how to design user friendly products to enhance and improve usability and accessibility during interaction between user and the product.Product managers act as the visionary leaders, responsible for defining the product strategy, identifying market opportunities, and ensuring the products success from conception to launch and beyond.'
          image='/PMad.jpeg' /**'/productImage.png'**/
          status='Applications CLOSED!'
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