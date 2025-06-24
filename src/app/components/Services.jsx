'use client';

import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/bento-grid';
import { cn } from '@/lib/utils';
import { motion } from "motion/react";
import {
  IconApps,
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconChartBar,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from '@tabler/icons-react';
import { HoverEffect } from './ui/card-hover-effect';
import { LampContainer } from './ui/lamp';

export function Services() {
  return (
    <div className="relative bg-black ">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "",
          "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-black"></div>
    <div id="next-section" className="py-10 font-roboto relative z-20">
      
      <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0,
          duration: 0.6,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center   tracking-tight  text-3xl md:mt-10 mt-2 md:text-5xl font-roboto font-bold px-10 text-slate-300  leading-8"
      >    
       
    
        Our capabilities
  
     
      {/* <BentoGrid className="mx-auto px-10">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
          />
        ))}
      </BentoGrid> */}
</motion.h1>
       <HoverEffect items={items} />
       
       </LampContainer>
    </div>
    </div>
  );
}

const Skeleton = ({img}) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br  from-neutral-900 to-neutral-800 ">
    <img className='w-full h-full' src={img}/>
  </div>
);

const items = [
  {
    title: 'Electronic Product Design',
    description: 'Rapid prototyping and testing of electrnic circuits and',
    header: <Skeleton img='/WebsiteContent/images (3).jpg'  />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Embedded Hardware Design',
    description: 'Custom embedded systems and hardware development solutions.',
    header: <Skeleton img='/WebsiteContent/Embedded hardware desgn service.webp' />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Firmware Development',
    description: 'Low-level software programming for microcontrollers and embedded systems.',
    header: <Skeleton img='/WebsiteContent/Firmware-Development Service.jpg' />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'PCB Design Services',
    description: 'Professional printed circuit board design and manufacturing support.',
    header: <Skeleton img='/WebsiteContent/pcb design service.jpg' />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Mechanical Design',
    description: 'Precision mechanical engineering and CAD design services.',
    header: <Skeleton img='/WebsiteContent/mechanical designing.jpg' />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'HMI Development',
    description: 'Human Machine Interface design for industrial control systems.',
    header: <Skeleton img='/WebsiteContent/hmi development.webp' />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  
  {
    title: 'AI/ML',
    description: 'Advanced AI and machine learning solutions for predictive analytics and intelligent automation.',
    header: <Skeleton img='/WebsiteContent/ai-ml.jpg' />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Dashboards & Data Analytics',
    description: 'Interactive dashboards and data analytics platforms for real-time insights and decision-making.',
    header: <Skeleton img='/WebsiteContent/dashboards-analytics.jpg' />,
    icon: <IconChartBar className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'Application Development',
    description: 'Custom web, mobile, Windows, and cross-platform applications for seamless user experiences and business efficiency.',
    header: <Skeleton img='/WebsiteContent/app-development.jpg' />,
    icon: <IconApps className="h-4 w-4 text-neutral-500" />,
  },
];