import React from "react";
import Image from "next/image";

interface SubheaderProps {
  iconSrc: string;
  title: string;
  className?: string;
}

const Subheader: React.FC<SubheaderProps> = ({ iconSrc, title, className }) => {
    return (
      <div className="flex items-center justify-center">
        <div
          className={`w-[200px] flex items-center justify-center px-[30px] py-[6px] gap-x-3 border rounded-full border-dashed border-secondary whitespace-nowrap ${className}`}
        >
          <h2 className="text-secondary">{title}</h2>
          <Image src={iconSrc} height={5} width={10} alt="icon" />
        </div>
      </div>
    );
};

export default Subheader;