import React from 'react'
import CustomButton from './CustomButton'
import Link from 'next/link'

const CourseDetailBody = () => {
  return (
    <div className='max-w-[1440px] mx-auto flex flex-col sm:px-16 px-6 lg:py-10 py-4'>

        <div className='mt-4'>
            <h3 className='text-center text-primary text-headline-2'> Learning paths</h3>
            <p className='text center mt-2 text-headline-3 text-primary'> Frontend Development</p> <p>
- HTML, CSS, and JavaScript Fundamentals <br/>
  - Understand the basics of HTML for structuring web pages <br/>
  - Learn CSS for styling and layout design <br/>
  - Gain proficiency in JavaScript for adding interactivity and dynamic behavior <br/>
  
- Responsive Web Design <br/>
  - Learn techniques for creating responsive and mobile-friendly web interfaces <br/>
  - Understand media queries and viewport meta tags <br/>
  
- Frontend Frameworks and Libraries <br/>
  - Explore popular frontend frameworks and libraries such as React, Angular, or Vue.js <br/>
  - Gain hands-on experience in building interactive user interfaces <br/>

</p>

 <p className='text center mt-2 text-headline-3 text-primary'> Backend Development</p> 
 <p>

- Server-side Programming Languages <br/>
  - Learn a backend programming language such as Python, Node.js, or Java <br/>
  - Understand concepts like variables, control structures, and functions <br/>
  
- Database Management <br/>
  - Gain proficiency in SQL for relational database management <br/>
  - Explore NoSQL databases such as MongoDB for flexible data storage <br/>
  
- API Development and Integration <br/>
  - Learn how to design and develop RESTful APIs <br/>
  - Gain hands-on experience in integrating frontend and backend systems <br/>
  
- Authentication and Authorization <br/>
  - Understand authentication mechanisms such as JWT (JSON Web Tokens) or OAuth <br/>
  - Learn about role-based access control (RBAC) and permissions management <br/>

</p>


<p className='text center mt-2 text-headline-3 text-primary'> Fullstack Development</p> 
 <p>

 
- Integration of Frontend and Backend <br/>
  - Learn how to connect frontend and backend components to create fullstack applications <br/>
  - Understand the flow of data between client and server <br/>
  
- Deployment and DevOps <br/>
  - Explore deployment strategies for web applications <br/>
  - Learn about continuous integration and continuous deployment (CI/CD) pipelines <br/>
  
- Testing and Debugging <br/>
  - Gain proficiency in writing unit tests and integration tests for both frontend and backend code <br/>
  - Learn debugging techniques for identifying and resolving issues in fullstack applications <br/>
  
- Project Management and Collaboration <br/>
  - Understand project management methodologies such as Agile or Scrum<br/>
  - Learn how to collaborate with team members using version control systems like Git <br/>

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