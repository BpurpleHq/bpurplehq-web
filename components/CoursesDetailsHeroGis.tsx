import { CourseDetailsHeroProps } from '@/types'
import Image from 'next/image';
import React from 'react'
import CustomButton from './CustomButton'
import Link from 'next/link';

const CoursesDetailsHeroGis = ({ title, subtitle, status, image }: CourseDetailsHeroProps) => {
    return (
        <div className='max-w-[1440px] mx-auto flex flex-col-reverse lg:flex-row lg:justify-between'>
            <div className='flex lg:justify-center lg:items-center'>
                <div>
                <h2 className='text-primary text-center lg:text-start text-headline-3 lg:text-headline-2 mt-4 lg:mt-0'>{title}</h2>
                <p className='lg:w-[698px] text-primary mt-3'>{subtitle}</p>
                <div className='flex justify-center lg:justify-start gap-3 mt-4'>
                    <Link href='https://forms.gle/ubN1UipLdP3oUcCj8' target="_blank" rel="noopener noreferrer">
                        <CustomButton
                            title='Apply Now'
                            btnType='button'
                            containerStyles='bg-secondary p-3 rounded-lg'
                            textStyles='text-dark'
                        />
                    </Link>
                    <Link href='https://www.canva.com/design/DAFuOfNglAQ/Mck-adTOh_8acflrj4yLHQ/view?website#2:let-s-be-part-of-your-transition-into-the-world-of-tech-we-get-you-started-and-keep-you-purple' target="_blank" rel="noopener noreferrer">
                        <CustomButton
                            title='Download Syllabus'
                            btnType='button'
                            containerStyles='bg-secondary p-3 rounded-lg'
                            textStyles='text-dark'
                        />
                    </Link>
                </div>
                <p className='text-primary font-semibold mt-4'>{status}</p>
                </div>
            </div>
            <div>
                <Image src={image} alt={title} width={500} height={500} />
            </div>
        </div>
    )
};

export default CoursesDetailsHeroGis