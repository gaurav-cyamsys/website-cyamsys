"use client";

import {Carousel} from "./ui/carousel";
import { FocusCards } from "./ui/focus-cards";
export function Products(){
 const cards = [
    {
      title:'Water Treatment System',
      description: "Implemented an IoT-based system for real-time water quality and treatment monitoring like ph measuring, tds temprature, turbodity and chlorine dosing to ensure access to clean and safe drinking water in rural and remote areas. ",
      src: "/1.png",
    },
    {
      title:'Waste Segregation',
      description: "Implemented waste segregation utilizing a master-slave system, where the master unit controlled segregation  rocesses across multiple manufacturing sites, ensuring efficient resource utilization and environmental sustainability for both dry and wet streams",
      src: "/2.png",
    },
    {
      title:'Transformer Oil Dryout System',
      description: "The Transformer Oil Dryout System removes moisture from transformer oil to ensure efficient performance and longevity. It uses water activity sensors to measure moisture content (ppm) at the inlet and outlet. Solenoid valves, a motor, and an HMI control the oil flow and monitor critical parameters like pressure, temperature, and moisture. If moisture exceeds set thresholds, the system triggers alarms and adjusts operations to maintain optimal conditions. In case of low moisture, the system enters idle mode, while continuous operation occurs if moisture  evels are within acceptable limits.",
      src: "/3.png",
    },
    {
      title:'Automatic Door Control System',
      description: "Automatic Door Control System is an advanced solution for automating door operations with precise direction control, adjustable speed settings, and integrated safety mechanisms. It supports multiple sensor inputs (hand  witch, foot switch, photo cell) and features intuitive LED indicators for monitoring. Designed for residential, commercial, and industrial applications, it ensures seamless functionality and enhanced safety.",
      src: "/4.png",
    },
    {
      title:'Heat Sensor',
      description: "Heat Sensor monitor the oil temperature as it flows through the system. Maintaining an optimal temperature is important for effective noisture removal and the overall efficiency of the system",
      src: "/5.png",
    },
    {
      title:'Strain Gauge Sensor',
      description: "Strain Gauge Sensor measures strain of a body which is always caused by external influence or an internal effect. Strain might be caused by forces , pressure , moments, heat, structural changes of the material. If certain conditions are fulfilled , the amount of value of the influencing quantity can be derived from the measured strain value",
      src: "/6.png",
    },
  ];
 
  return <FocusCards  cards={cards} heading='What we Build' /> ;
}
