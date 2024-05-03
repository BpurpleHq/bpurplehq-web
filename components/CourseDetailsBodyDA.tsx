import React from 'react'
import CustomButton from './CustomButton'
import Link from 'next/link'

const CourseDetailBody = () => {
  return (
    <div className='max-w-[1440px] mx-auto flex flex-col sm:px-16 px-6 lg:py-10 py-4'>

       {/** <div>
            <h3 className='text-center text-primary text-headline-3'>About this course</h3>
            <p className='text center mt-2'>Data analysis has become a critical capability for organizations seeking to thrive in a data-rich world. By leveraging advanced techniques and tools, businesses can unlock the hidden potential within their data, gaining valuable insights to inform decision-making, drive innovation, and gain a competitive advantage.</p>
        </div> **/}

        <div className='mt-4'>
            <h3 className='text-center text-primary text-headline-2'>The learning paths</h3>
            <p className='text center mt-2 text-headline-3 text-primary'> Data Science:</p> <p>
- Foundations of Data Science: Ensuring data quality by identifying and addressing errors, inconsistencies, missing values, and outliers, this first step involves understanding your data, cleaning data, standardization, and transformation.<br/>
 - Understand Exploratory Data Analysis concepts and hypothesis testing, perform initial data exploration to understand the characteristics, distributions, and relationships within the data. EDA involves generating summary statistics, creating visualizations, and identifying patterns or trends.<br/>
- Learn about probability distributions and statistical inference - Applying statistical techniques such as hypothesis testing, regression analysis, correlation analysis, and time series analysis to uncover relationships, associations, and trends in the data.<br/>
- Data Modeling and Predictive Analytics: Building models to predict future outcomes or trends based on historical data. This may involve machine learning algorithms, regression models, decision trees, or other predictive modeling techniques.<br/>
- Explore supervised, unsupervised, and reinforcement learning algorithms <br/>
- Gain hands-on experience in model training and evaluation <br/>
  - Learn about regression, classification, and clustering techniques <br/>
  - Understand model evaluation and validation <br/>
- Data Visualization: Presenting data visually through charts, graphs, and interactive dashboards to communicate findings effectively and facilitate better understanding. <br/>
- Feature Engineering and Selection <br/>
  - Explore techniques for feature extraction and transformation <br/>
  - Understand the importance of feature selection in model building <br/>

</p>

 <p className='text center mt-2 text-headline-3 text-primary'> Data Engineering:</p> 
 <p>

 - Introduction to Data Engineering <br/>
  - Understand the role of data engineering in the data lifecycle <br/>
  - Learn about data storage and retrieval systems <br/>
  
- Data Processing and Transformation <br/>
  - Explore data cleaning and preprocessing techniques <br/>
  - Gain proficiency in ETL (Extract, Transform, Load) processes <br/>
  
- Database Management <br/>
  - Learn about relational and non-relational databases <br/>
  - Gain hands-on experience in SQL and NoSQL database management <br/>
  
- Big Data Technologies <br/>
  - Explore distributed computing frameworks such as Hadoop and Spark <br/>
  - Understand data processing at scale <br/>
</p>


 <p className='text center mt-2 text-headline-3 text-primary'> Data Analysis:</p> 
 <p>
- Exploratory Data Analysis (EDA) <br/>
  - Learn techniques for data visualization and exploration <br/>
  - Understand descriptive statistics and data summarization <br/>
  
- Data Mining and Pattern Recognition <br/>
  - Explore association rule mining and pattern recognition techniques <br/>
  - Learn about anomaly detection and outlier analysis <br/>
  
- Statistical Analysis and Interpretation <br/>
  - Understand inferential statistics and hypothesis testing <br/>
  - Gain proficiency in statistical modeling and interpretation techniques <br/>
  
-Real-world Data Projects <br/>
  - Work on hands-on projects involving real-world datasets <br/>
  - Apply learned concepts in data analysis and interpretation to solve practical problems <br/>

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