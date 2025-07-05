
import React from 'react';

export interface LessonStep {
  title: string;
  content: React.ReactNode;
  keyPoint: string;
}

export interface LessonModule {
  title: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  steps?: LessonStep[];
  component?: React.FC;
}