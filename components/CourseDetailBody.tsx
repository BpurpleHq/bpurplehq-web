import React from 'react'
import CustomButton from './CustomButton'

const CourseDetailBody = () => {
  return (
    <div className='max-w-[1440px] mx-auto flex flex-col sm:px-16 px-6 lg:py-10 py-4'>
        <div>
            <h3 className='text-center text-primary text-headline-3'>About this course</h3>
            <p className='text center mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt debitis deleniti quibusdam corrupti odit quaerat provident id, accusamus odio cupiditate delectus, ad libero consequatur beatae culpa deserunt! Ut beatae perspiciatis maxime, quae officia exercitationem aliquam omnis quo voluptatem corporis, autem quis repellat amet, necessitatibus ad aspernatur. Laboriosam adipisci at ipsum maiores nemo incidunt expedita ullam quae quisquam impedit! Vel sunt voluptate quisquam eligendi exercitationem modi quo suscipit fugit labore accusamus? Doloremque amet, quas sequi deleniti eum deserunt incidunt ad aliquid libero corrupti quasi possimus voluptatum adipisci rem tenetur ducimus at vel animi enim minima impedit obcaecati excepturi maiores facilis? Neque alias consectetur cumque consequatur voluptate quidem nemo, voluptates pariatur exercitationem nihil ipsa, sapiente dignissimos animi enim, architecto fugiat odio quisquam? Deleniti id consectetur reiciendis tempora dolores labore quasi veritatis voluptatum hic nesciunt reprehenderit minima ratione modi dignissimos facere, ullam sint.</p>
        </div>
        <div className='mt-4'>
            <h3 className='text-center text-primary text-headline-3'>What you will learn</h3>
            <p className='text center mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt debitis deleniti quibusdam corrupti odit quaerat provident id, accusamus odio cupiditate delectus, ad libero consequatur beatae culpa deserunt! Ut beatae perspiciatis maxime, quae officia exercitationem aliquam omnis quo voluptatem corporis, autem quis repellat amet, necessitatibus ad aspernatur. Laboriosam adipisci at ipsum maiores nemo incidunt expedita ullam quae quisquam impedit! Vel sunt voluptate quisquam eligendi exercitationem modi quo suscipit fugit labore accusamus? Doloremque amet, quas sequi deleniti eum deserunt incidunt ad aliquid libero corrupti quasi possimus voluptatum adipisci rem tenetur ducimus at vel animi enim minima impedit obcaecati excepturi maiores facilis? Neque alias consectetur cumque consequatur voluptate quidem nemo, voluptates pariatur exercitationem nihil ipsa, sapiente dignissimos animi enim, architecto fugiat odio quisquam? Deleniti id consectetur reiciendis tempora dolores labore quasi veritatis voluptatum hic nesciunt reprehenderit minima ratione modi dignissimos facere, ullam sint.</p>
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