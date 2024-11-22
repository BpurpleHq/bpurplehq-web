import React from "react";
import Image from "next/image";

// Card Component
interface CardProps {
  imageSrc: string;
  title: string;
  content: string;
  readMoreText?: string;
  readMoreIcon?: string;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  content,
  readMoreText,
  readMoreIcon,
  className = "",
}) => {
  return (
    <div
      className={`
        "flex flex-col justify-center items-center p-4 rounded-lg shadow-lg bg-white overflow-hidden transition-transform transform hover:scale-105",
        ${className}
      `}
    >
      <div className="flex items-center justify-center mb-4">
        <Image
          src={imageSrc}
          alt={title}
          width={200}
          height={200}
        />
      </div>
      <h3 className="text-xl text-center font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4 text-center">{content}</p>
      {readMoreText && (
        <div className="flex items-center justify-center space-x-2 text-primary cursor-pointer">
          <span>{readMoreText}</span>
          {readMoreIcon && (
            <Image
              src={readMoreIcon}
              alt="Read more icon"
              width={16}
              height={16}
              className="w-4 h-4 ml-2"
            />
          )}
        </div>
      )}
    </div>
  );
};


// InfoCard Component
interface InfoCardProps {
  icon: string;
  title: string;
  content: string;
  className?: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  icon,
  title,
  content,
  className = "",
}) => {
  return (
    <div className={`flex flex-col w-full md:w-[454px] px-4 py-8 ${className}`}>
      <div className="flex items-center justify-center md:items-start md:justify-start">
        <Image src={icon} alt={title} height={50} width={50} />
      </div>
      <div className="flex flex-col justify-center items-center md:justify-start md:items-start text-black pt-[18px]">
        <h2 className="text-subtitle1 font-bold">{title}</h2>
        <p className="pt-[15px] text-center md:text-start text-body">
          {content}
        </p>
      </div>
    </div>
  );
};

// InfoCard Component
{/* interface InfoCardPropservice {
  
  title: string;
  content: string;
  className?: string;
}

export const InfoCardservice: React.FC<InfoCardProps> = ({
  
  title,
  content,
  className = "",
}) => {
  return (
    <div className={`flex flex-col w-full md:w-[454px] px-4 py-8 ${className}`}>
      <div className="flex items-center justify-center md:items-start md:justify-start">
        
      </div>
      <div className="flex flex-col justify-center items-center md:justify-start md:items-start text-black pt-[18px]">
        <h2 className="text-subtitle1 font-bold">{title}</h2>
        <p className="pt-[15px] text-center md:text-start text-body">
          {content}
        </p>
      </div>
    </div>
  );
}; */}

// AchievementsCard Component
interface AchievementsCardProps {
  icon: string;
  title: string;
  content: string;
  className?: string;
}

export const AchievementsCard: React.FC<AchievementsCardProps> = ({
  icon,
  title,
  content,
  className = "",
}) => {
  return (
    <div className={`flex flex-col w-full  px-4 py-8 rounded-lg ${className}`}>
      <div className="flex items-center justify-center">
        <Image src={icon} alt={title} height={30} width={30} />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-subtitle font-semibold">{title}</h2>
        <p className="pt-[5px] text-center text-body">
          {content}
        </p>
      </div>
    </div>
  );
};

//BlogCard Component

interface BlogCardProps {
  imageSrc: string;
  title: string;
  date: string;
  content: string;
  className?: string;
  readMoreText?: string;
  readMoreIcon?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  imageSrc,
  title,
  date,
  content,
  className = "",
  readMoreText,
  readMoreIcon,
}) => {
  return (
    <div
      className={`
        "w-full md:w-[416px] flex flex-col p-4 rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105",
        ${className}
      `}
    >
      <div className="mb-4">
        <Image
          src={imageSrc}
          alt={title}
          width={300}
          height={200}
          className="w-full h-auto rounded-lg"
        />
      </div>
      
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500 mb-4">{date}</p>
      <p className="text-gray-700 mb-4">{content}</p>

      <div className="flex items-center space-x-2 text-primary cursor-pointer my-auto">
        <span>{readMoreText}</span>
        {readMoreIcon && (
          <Image
            src={readMoreIcon}
            alt="Read more icon"
            width={10}
            height={10}
            className="my-auto"
          />
        )}
      </div>
    </div>
  );
};

export default BlogCard;



// Testimonial Card

interface TestimonialCardProps {
  imageSrc: string;
  quoteIconSrc: string;
  content: string;
  fullName: string;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  imageSrc,
  quoteIconSrc,
  content,
  fullName,
  className = "",
}) => {
  return (
    <div
      className={`
        "sm:w-[270px] md:w-[329px] flex flex-col items-center p-6 rounded-lg shadow-lg bg-white ",
        ${className}
      `}
    >
      <div className="flex justify-between w-full">
        <Image
          src={imageSrc}
          alt={fullName}
          width={60}
          height={60}
          className="rounded-lg"
        />
        <div>
          <Image src={quoteIconSrc} alt="Quote icon" width={25} height={1} />
        </div>
      </div>
      <div>
        <h2 className="mt-4 font-semibold text-black">{content}</h2>
        <p className="mt-2 text-sm text-start font-semibold text-gray-500">
          {fullName}
        </p>
      </div>
    </div>
  );
};

