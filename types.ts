import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface StepProps {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}