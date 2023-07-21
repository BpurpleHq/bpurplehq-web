import React from 'react'
import CustomButton from './CustomButton'

const CourseDetailBody = () => {
  return (
    <div className='max-w-[1440px] mx-auto flex flex-col sm:px-16 px-6 lg:py-10 py-4'>
        <div>
            <h3 className='text-center text-primary text-headline-3'>About this course</h3>
            <p className='text center mt-2'>In today's fast-paced and customer-centric business landscape, effective product management is the driving force behind successful products and thriving organizations. Product managers are the orchestrators who bridge the gap between customer needs, business objectives, and technological capabilities. This article delves into the world of product management, exploring its core principles, responsibilities, and the strategic value it brings to the table.
What is Product Management?
Product management is a multifaceted discipline that encompasses the strategic planning, development, and lifecycle management of a product or service. Product managers act as the visionary leaders, responsible for defining the product strategy, identifying market opportunities, and ensuring the product's success from conception to launch and beyond.</p>
        </div>
        <div className='mt-4'>
            <h3 className='text-center text-primary text-headline-3'>What you will learn</h3>
            <p className='text center mt-2'> - Market Research and Customer Insights: Learn to conduct market research, analyze industry trends, and gather customer insights to identify market needs and opportunities, leverage data and feedback to shape the product's roadmap and prioritize features accordingly.<br/>
- Product Strategy and Vision: Define the product's strategic direction, aligning it with the overall business objectives, establish a clear vision, set goals, and develop a roadmap that guides the product's development and evolution over time.<br/>
- Requirements Gathering and Prioritization: Learn to work closely with stakeholders, engineering teams, and UX/UI designers to gather requirements, define product specifications, and prioritize features based on customer needs, market demand, and business priorities.<br/>
- Cross-Functional Collaboration: Learn how to act as the central point of communication and coordination among various teams, including engineering, design, marketing, sales, and customer support.<br/>
- Product Development and Agile Methodologies: Learn to oversee the product development process, employing agile methodologies to ensure iterative and incremental product releases. They work closely with development teams, providing guidance, resolving issues, and ensuring timely delivery.<br/>
- Product Launch and Go-to-Market Strategy: Learn to orchestrate the product launch, collaborating with marketing and sales teams to create effective go-to-market strategies, pricing models, and marketing campaigns.</p>
          </div>
          <div className='flex justify-center gap-6 mt-6'>
                    <CustomButton
                        title='Apply Now'
                        btnType='button'
                        containerStyles='bg-secondary p-3 rounded-lg'
                        textStyles='text-dark'
                    />
                    <CustomButton
                        title='Download Syllabus'
                        btnType='button'
                        containerStyles='bg-secondary p-3 rounded-lg'
                        textStyles='text-dark'
                    />
                </div>
    </div>
  )
}

export default CourseDetailBody