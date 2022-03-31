import * as React from 'react';

import {CSSProperties, FC, useEffect, useState} from 'react';

export interface CircleProps {
  progress: number;
  animate?: boolean;
  animationDuration?: string;
  showPercentage?: boolean;
  showPercentageSymbol?: boolean;
  progressColor?: string;
  bgColor?: string;
  textColor?: string;
  size?: string;
  lineWidth?: string;
  percentSpacing?: number;
  textStyle?: CSSProperties;
  roundedStroke?: boolean;
  responsive?: boolean;
  className?: string;
  onAnimationEnd?(): void;
}

const radius = 175;
const diameter = Math.round(Math.PI * radius * 2);

export const Circle2: FC<CircleProps> = ({
    progress = 0,
    size = '100',
    bgColor = '#ecedf0',
    progressColor = 'rgb(76, 154, 255)',
    lineWidth = '25',
    animate = true,
    animationDuration = '1s',
    roundedStroke,
    responsive,
    onAnimationEnd,
    showPercentage = true,
    textColor = '#6b778c',
    textStyle= { font: 'bold 4rem Helvetica, Arial, sans-serif' },
    percentSpacing = 10,
    showPercentageSymbol = true,
    className = "",
  }) => {

  const [strokeDashoffset, setStrokeDashoffset] = useState(0) 
  
  useEffect(() => {
    const getOffset = (val = 0) => Math.round((100 - Math.min(val, 100)) / 100 * diameter);
    setStrokeDashoffset(getOffset(progress));
  },[progress])
  
  
  const transition = animate ? `stroke-dashoffset ${animationDuration} ease-out` : undefined;
  const strokeLinecap = roundedStroke ? 'round' : 'butt';
  const svgSize: string | undefined = responsive ? '100%' : size;
    
  const text = () => { 
    if (!showPercentage) return;
  
    return ( 
      <text style={textStyle} fill={textColor} x={radius} y={radius} textAnchor="middle" dominantBaseline="central"> 
        {progress}{showPercentageSymbol && <tspan dx={percentSpacing}>%</tspan>} 
      </text> 
    );
  }
  
  return (
    <svg className={className} width={svgSize} height={svgSize} viewBox="-25 -25 400 400">
      <circle stroke={bgColor} cx="175" cy="175" r="175" strokeWidth={lineWidth} fill="none"/> 
      <circle stroke={progressColor} transform="rotate(-90 175 175)" cx="175" cy="175" r="175" 
      strokeDasharray="1100" strokeWidth={lineWidth} strokeDashoffset="1100" strokeLinecap={strokeLinecap} 
      fill="none" style={{ strokeDashoffset, transition }} onTransitionEnd={onAnimationEnd} 
      /> 
      {text()} 
    </svg> 
  )
}

export default Circle2



