import React from 'react'
import CustomButton from './CustomButton'
import Link from 'next/link'

const CourseDetailBody = () => {
  return (
    <div className='max-w-[1440px] mx-auto flex flex-col sm:px-16 px-6 lg:py-10 py-4'>
        <div>
            <h3 className='text-center text-primary text-headline-3'>About this course</h3>
            <p className='text center mt-2'>Data analysis has become a critical capability for organizations seeking to thrive in a data-rich world. By leveraging advanced techniques and tools, businesses can unlock the hidden potential within their data, gaining valuable insights to inform decision-making, drive innovation, and gain a competitive advantage.</p>
        </div>
        <div className='mt-4'>
            <h3 className='text-center text-primary text-headline-3'>What you will learn</h3>
            <p className='text center mt-2'> - Data Collection: Gathering relevant data from various sources, including databases, spreadsheets, surveys, online platforms, and IoT devices. <br/>
- Data Cleaning and Preprocessing: Ensuring data quality by identifying and addressing errors, inconsistencies, missing values, and outliers. This step involves data cleansing, standardization, and transformation.<br/>
- Exploratory Data Analysis (EDA): Conducting initial data exploration to understand the characteristics, distributions, and relationships within the data. EDA involves generating summary statistics, creating visualizations, and identifying patterns or trends.<br/>
- Statistical Analysis: Applying statistical techniques such as hypothesis testing, regression analysis, correlation analysis, and time series analysis to uncover relationships, associations, and trends in the data.<br/>
- Data Modeling and Predictive Analytics: Building models to predict future outcomes or trends based on historical data. This may involve machine learning algorithms, regression models, decision trees, or other predictive modeling techniques.<br/>
- Data Visualization: Presenting data visually through charts, graphs, and interactive dashboards to communicate findings effectively and facilitate better understanding.</p>
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