"use client"

import { learningPath } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CustomButton from './CustomButton'


const CoursesOffered = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20">
      <div className="max-w-[1440px] mx-auto sm:px-16 px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-4">
            Explore Our Programs
          </span>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            The Learning Paths
          </h3>
          <p className="text-lg text-gray-600">
            Choose from our carefully curated learning paths designed to transform your career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {learningPath.map(({ id, image, title, description, duration, url }) => (
            <Link key={id} href={url} className="group">
              <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 
                            hover:shadow-2xl hover:border-purple-300 transition-all duration-300 
                            transform hover:-translate-y-1">
                
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image 
                    src={image} 
                    alt={title} 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/*<div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full shadow-md">
                    <Clock className="w-4 h-4 text-purple-600" />
                    <span className="text-sm font-semibold text-gray-800">{duration}</span>
                  </div>*/}
                </div>

                <div className="p-6 space-y-4">
                 {/* <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-purple-600" />
                    <span className="text-xs font-semibold text-purple-600 uppercase tracking-wide">
                      Learning Path
                    </span>
                  </div>*/}

                  <h4 className="text-xl font-bold text-gray-900 line-clamp-1 group-hover:text-purple-600 transition-colors">
                    {title}
                  </h4>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {description}
                  </p>

                  {/*<div className="pt-2">
                    <CustomButton
                      title='Explore Course'
                      btnType='button'
                      containerStyles='w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 rounded-lg py-3 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-purple-500/25'
                      textStyles='text-white font-semibold text-center flex items-center gap-2'
                    />
                  </div>*/}
                </div>

                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-violet-500/10" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>        
  )
}

export default CoursesOffered