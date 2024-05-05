import React from 'react'
import CustomButton from './CustomButton'
import Link from 'next/link'

const CourseDetailBody = () => {
  return (
    <div className='max-w-[1440px] mx-auto flex flex-col sm:px-16 px-6 lg:py-10 py-4'>
        <div>
            <h3 className='text-center text-primary text-headline-3 lg:text-headline-2 lg:text-start'>About this course</h3>
            <p className='text center mt-2'>The Software Development In Test (SDET) training program is designed to empower individuals with a deep understanding of both software development and quality assurance principles. Participants will gain the expertise needed to enhance software testing processes through the creation of automated test suites and tools, 
            contributing to the delivery of high-quality software products. As a participant will be equipped with the knowledge and skills to
             effectively bridge the gap between software development and quality assurance, enabling them to create robust and efficient
              automated testing solutions for software applications.
 </p>
        </div>
        <div className='mt-4'>
            <h3 className='text-center text-primary text-headline-3 lg:text-headline-2 lg:text-start'>What you will learn</h3>
            <p className='text center mt-2'> - Quality Assurance Foundations <br/>
            - Test Automation Frameworks. <br/>
            - Test Reporting and Analysis: <br/>
            - Debugging and Troubleshooting<br/>
            - API, Web and Mobile Testing<br/>
            <br/>
             Throughout the training, participants will engage in hands-on exercises and real-world projects that simulate software testing scenarios by applying their knowledge in practical settings, they will gain the confidence and competence to address testing challenges in their 
            professional roles. Assessment methods, including quizzes, assignments, and a final project, will be used to evaluate participants' 
understanding and application of SDET concepts.<br/>

</p>
          </div>
          <div className='flex justify-center gap-6 mt-6'>
                <Link href='https://forms.gle/ubN1UipLdP3oUcCj8' target="_blank" rel="noopener noreferrer">
                    <CustomButton
                        title='Apply Now'
                        btnType='button'
                        containerStyles='bg-secondary p-3 rounded-lg'
                        textStyles='text-dark'
                    />
                    </Link> 

           {/** <Link href='#' target="_blank" rel="noopener noreferrer">
                    <CustomButton
                        title='Download Syllabus'
                        btnType='button'
                        containerStyles='bg-secondary p-3 rounded-lg'
                        textStyles='text-dark'
                    />
                    </Link>  **/}
                </div>
    </div>
  )
}

export default CourseDetailBody