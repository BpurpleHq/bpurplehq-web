import React from 'react'
import CustomButton from './CustomButton'
import Link from 'next/link'

const CourseDetailBody = () => {
  return (
    <div className='max-w-[1440px] mx-auto flex flex-col sm:px-16 px-6 lg:py-10 py-4'>
        <div>
            <h3 className='text-center text-primary text-headline-3'>About this course</h3>
            <p className='text center mt-2'>Virtual assistants are revolutionizing the way we manage our personal and professional lives. From automating mundane tasks to providing personalized support, these AI-powered assistants empower individuals and businesses to maximize productivity, improve time management, and enhance overall efficiency. </p>
        </div>
        <div className='mt-4'>
            <h3 className='text-center text-primary text-headline-3'>What you will learn</h3>
            <p className='text center mt-2'> - Increased Productivity: Learn to offload repetitive tasks and administrative duties to virtual assistants, individuals and businesses can focus on high-value activities, leading to increased productivity and efficiency. <br/>
- Time Management: Learn to help users manage their time effectively by handling scheduling, reminders, and prioritizing tasks, ensuring important deadlines are met.<br/>
- Simplified Communication: Learn to be good in communication by managing emails, transcribing voice messages, and even drafting responses, making it easier to stay connected and organized.<br/>
- 24/7 Availability: Virtual assistants are available round the clock, providing support and assistance whenever needed, allowing users to access information and complete tasks at any time..</p>
          </div>
          <div className='flex justify-center gap-6 mt-6'>
                <Link href='#' target="_blank" rel="noopener noreferrer">
                    <CustomButton
                        title='Apply Now'
                        btnType='button'
                        containerStyles='bg-secondary p-3 rounded-lg'
                        textStyles='text-dark'
                    />
                    </Link>

            <Link href='#' target="_blank" rel="noopener noreferrer">
                    <CustomButton
                        title='Download Syllabus'
                        btnType='button'
                        containerStyles='bg-secondary p-3 rounded-lg'
                        textStyles='text-dark'
                    />
                    </Link>
                </div>
    </div>
  )
}

export default CourseDetailBody