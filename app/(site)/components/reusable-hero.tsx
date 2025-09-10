import React from "react";
import Image from "next/image";

interface ReusableHeroProps {
  title?: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
}

const ReusableHero: React.FC<ReusableHeroProps> = ({ title, breadcrumbs }) => {
  return (
    <section className="font-jakarta relative h-[200px] md:h-[400px] lg:h-[500px] text-white overflow-hidden rounded-b-[50px]">
      <div className="absolute inset-0 w-full h-full rounded-b-[50px] overflow-hidden z-0">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#023123] to-[#01271C]" />
        <Image
          src={"/Subtract.png"}
          alt="Background pattern"
          fill
          className="object-cover object-right"
          priority
        />
      </div>

      <div className="relative z-20 max-w-[1200px] mx-auto px-6 h-full flex items-end md:items-center pb-8 md:pb-0">
        <div className="space-y-1 lg:space-y-6">
          <h1 className="text-2xl lg:text-7xl font-bold text-white">{title}</h1>
          <nav className="flex items-center space-x-2 text-base md:text-lg font-semibold">
            {breadcrumbs?.map((crumb, index) => (
              <React.Fragment key={index}>
                {crumb.href ? (
                  <a
                    href={crumb.href}
                    className="hover:text-white/80 text-white transition-colors"
                  >
                    {crumb.label}
                  </a>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
                {index < breadcrumbs.length - 1 && (
                  <span className="text-white/60 mx-2">›</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
};

export default ReusableHero;
