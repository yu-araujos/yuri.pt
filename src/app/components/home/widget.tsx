import Link from 'next/link';
import React, { ReactNode } from 'react';

interface WidgetProps {
  width: number;
  height: number;
  className?: string;
  linkTitle?: string;
  textColor?: string;
  children?: ReactNode;
  href?: string;
}

export default function Widget({ width, height, linkTitle = '', textColor = '', className = '', children, href = '' }: WidgetProps) {
  const widgetStyle: React.CSSProperties = {
    width: `${width}px`,
    height: `${height}px`,
    borderRadius: '10px',
    boxSizing: 'border-box',
    color: textColor,
  };

  return (
    <Link href={href}>
      <div style={widgetStyle} className={`flex items-center justify-center ${className}`}>
        <span className={`text-4xl text-center uppercase font-medium ${textColor}`}>{linkTitle}</span>
        {children}
      </div>
    </Link>
  );
}
