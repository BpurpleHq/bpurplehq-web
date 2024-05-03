import CourseDetailBodyCyber from '@/components/CourseDetailsBodyCyber';
import CourseInfo from '@/components/CourseInfo';
import CoursesDetailsHeroCyber from '@/components/CoursesDetailsHeroCyber';
import React from 'react'

export const metadata = {
  title: 'bpurpleHQ | Courses - Cybersecurity',
};

const page = () => {
  return (
    <div>
      <section className='sm:px-16 px-6 lg:py-10 py-4'>
        <CoursesDetailsHeroCyber
          title='Cybersecurity'
          subtitle='Dive into the world of cybersecurity and learn how to protect systems, networks, and data from digital threats. From understanding fundamental security principles to implementing advanced techniques, this learning path equips you with the skills needed to safeguard information assets and mitigate cyber risks.'
          image='/cyberimage.png'
          status='We are currently NOT taking applications!'
        />        
      </section>
      <section className='bg-extra'>
        <CourseInfo />
      </section>
      <section>
        <CourseDetailBodyCyber />
      </section>
    </div>
  )
}

export default page