import { CourseDetailsHeroProps } from '@/types'
import Image from 'next/image';
import React from 'react'
import CustomButton from './CustomButton'
import Link from 'next/link';

const CourseDetailsHeroQA = ({ title, subtitle, status}: CourseDetailsHeroProps) => {
    return (
        <div className='max-w-[1440px] mx-auto flex flex-col-reverse lg:flex-row lg:justify-between'>
            <div className='flex lg:justify-center lg:items-center'>
                <div>
                <h2 className='text-primary text-center lg:text-start text-headline-3 lg:text-headline-2 mt-4 lg:mt-0'>{title}</h2>
                <p className='lg:w-[698px] text-primary mt-3'>{subtitle}</p>
                <div className='flex justify-center lg:justify-start gap-3 mt-4'>
                    <Link href='https://forms.zohopublic.com/adminbpur1/form/EventRegistration/formperma/ESSiUnpCMVKFJxdZGBPpARTvLi1ku3G9TcRdVn8K7MI' target="_blank" rel="noopener noreferrer">
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
                    </Link> **/}
                </div>
                <p className='text-primary font-semibold mt-4'>{status}</p>
                </div>
            </div>
            {/*<div>
                <Image src={image} alt={title} width={450} height={300} className='rounded-lg' />
            </div>*/}
        </div>
    )
};

export default CourseDetailsHeroQA