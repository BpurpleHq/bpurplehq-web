import React from 'react'
import CustomButton from './CustomButton'
import Link from 'next/link'

 

const CourseDetailBody = () => {
  return (
    <div className='max-w-[1440px] mx-auto flex flex-col sm:px-16 px-6 lg:py-10 py-4'>

        <div className='mt-4'>
            <h3 className='text-center text-primary text-headline-2'> Learning paths</h3>
            <p className='text center mt-2 text-headline-3 text-primary'> Product Design:</p> <p>
- User-Centered Design Principles  <br/>
  - Understand the importance of user-centered design in product development  <br/>
  - Learn about user research techniques and personas <br/>
  - Wireframing and Prototyping  <br/>
  - Gain proficiency in creating wireframes and prototypes using tools like Sketch or Adobe XD  <br/>
  - Learn about interface design principles and usability testing  <br/>
  - Visual Design Fundamentals  <br/>
  - Explore typography, color theory, and visual hierarchy  <br/>
  - Learn how to create visually appealing designs that align with user expectations
  Interaction Design  <br/>
  - Understand interaction design principles and patterns  <br/>
  - Learn how to create intuitive and engaging user interfaces  <br/>

</p>

 <p className='text center mt-2 text-headline-3 text-primary'> Product Management</p> 
 <p>

 
- Product Strategy and Roadmapping  <br/>
  - Learn how to define product vision, goals, and objectives  <br/>
  - Understand the importance of product roadmaps in aligning strategy with execution  <br/>
  
- Market Research and Validation: <br/>
  - Gain proficiency in conducting market research and competitive analysis <br/>
  - Learn how to validate product ideas and hypotheses <br/>
  
- Agile Development Methodologies <br/>
  - Understand Agile principles and practices <br/>
  - Learn how to implement Agile methodologies such as Scrum or Kanban in product development <br/>
  
- Feature Prioritization and Backlog Management  <br/>
  - Learn techniques for prioritizing features based on value, effort, and risk <br/>
  - Gain hands-on experience in managing product backlogs <br/>
  
- Product Launch and Lifecycle Management <br/>
  - Understand the stages of the product lifecycle <br/>
  - Learn how to plan and execute successful product launches <br/>
  
- Stakeholder Management and Communication  <br/>
  - Gain proficiency in stakeholder analysis and communication  <br/>
  - Learn how to effectively communicate product vision, progress, and priorities <br/>

</p>
          </div>
          <div className='flex justify-center gap-6 mt-6'>
          <Link href='https://forms.gle/ubN1UipLdP3oUcCj8' target="_blank" rel="noopener noreferrer">
                    <CustomButton
                        title="I'm Interested"
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
                    </Link> **/}
                </div>
    </div>
  )
}


export default CourseDetailBody