import React from 'react'
import CustomButton from './CustomButton'
import Link from 'next/link'

const CourseDetailBody = () => {
  return (
    <div className='max-w-[1440px] mx-auto flex flex-col sm:px-16 px-6 lg:py-10 py-4'>
       
       {/** <div>
            <h3 className='text-center text-primary text-headline-3'>About this course</h3>
            <p className='text center mt-2'>Cybersecurity has become a critical capability for organizations seeking to thrive in a data-rich world. By leveraging advanced techniques and tools, businesses can unlock the hidden potential within their data, gaining valuable insights to inform decision-making, drive innovation, and gain a competitive advantage.</p>
        </div> **/}

        <div className='mt-4'>
            <h3 className='text-center text-primary text-headline-3 lg:text-headline-2 lg:text-start'>What you will Learning</h3>
<p className='text center mt-2'> 
- Introduction to Cybersecurity <br/>
  - Understand the importance of cybersecurity in today's digital landscape <br/>
  - Learn about common cyber threats and attack vectors <br/>
  
- Cybersecurity Fundamentals <br/>
  - Explore foundational concepts such as confidentiality, integrity, and availability (CIA) <br/>
  - Understand the principles of risk management and risk assessment <br/>
  
- Network Security <br/>
  - Learn about network protocols, architectures, and security mechanisms <br/>
  - Gain proficiency in configuring firewalls, intrusion detection systems (IDS), and virtual private networks (VPNs) <br/>

- Emerging Threats and Trends <br/>
  - Stay updated with the latest cybersecurity threats, trends, and technologies <br/>
  - Explore emerging technologies such as artificial intelligence (AI) and blockchain in the context of cybersecurity <br/>
  
- Secure Coding Practices <br/>
  - Understand secure coding principles and best practices <br/>
  - Learn about common vulnerabilities such as injection attacks, cross-site scripting (XSS), and cross-site request forgery (CSRF) <br/>
  
- Incident Response and Forensics <br/>
  - Gain proficiency in incident response procedures and techniques <br/>
  - Learn how to detect, analyze, and mitigate security incidents <br/>
  

  
- Ethical Hacking and Penetration Testing <br/>
  - Explore ethical hacking methodologies and techniques <br/>
  - Gain hands-on experience in conducting penetration tests to identify and remediate vulnerabilities <br/>
  
- Cybersecurity Governance and Compliance <br/>
  - Learn about cybersecurity regulations, standards, and compliance frameworks <br/>
  - Understand the role of governance in ensuring effective cybersecurity posture <br/>
  

</p>
          </div>
          <div className='flex justify-center gap-6 mt-6'>
          <Link href='https://forms.zohopublic.com/adminbpur1/form/EventRegistration/formperma/ESSiUnpCMVKFJxdZGBPpARTvLi1ku3G9TcRdVn8K7MI' target="_blank" rel="noopener noreferrer">
                    <CustomButton
                        title='Apply Now'
                        btnType='button'
                        containerStyles='bg-secondary p-3 rounded-lg'
                        textStyles='text-dark'
                    />
                    </Link>
              {/**  <Link href='#' target="_blank" rel="noopener noreferrer">
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