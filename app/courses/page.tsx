import { CoursesOffered, Metrics } from '@/components'
import CustomButton from '@/components/CustomButton'
import Image from 'next/image'
import React from 'react'


export const metadata = {
  title: 'bpurpleHQ | Courses',
};

const page = () => {
  return (
    <main className='relative w-full'>
     
      <section>
        <CoursesOffered />
      </section>
    </main>
  )
}

export default page
