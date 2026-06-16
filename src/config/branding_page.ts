import { 
  Rocket, 
  Target, 
  Lightbulb, 
  FlaskConical,
  Microscope,
  Boxes,
  Zap,
  CheckCircle2,
  Users
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface BrandingStep {
  id: number;
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
  colorClass: string;
}

export interface BrandingDifference {
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
}

export const brandingSteps: BrandingStep[] = [
  {
    id: 1,
    icon: Lightbulb,
    titleKey: 'brandingPage.step1',
    descKey: 'brandingPage.step1Desc',
    colorClass: 'bg-cyan-50 text-cyan-500'
  },
  {
    id: 2,
    icon: FlaskConical,
    titleKey: 'brandingPage.step2',
    descKey: 'brandingPage.step2Desc',
    colorClass: 'bg-fuchsia-50 text-fuchsia-500'
  },
  {
    id: 3,
    icon: Zap,
    titleKey: 'brandingPage.step3',
    descKey: 'brandingPage.step3Desc',
    colorClass: 'bg-blue-50 text-blue-500'
  },
  {
    id: 4,
    icon: Rocket,
    titleKey: 'brandingPage.step4',
    descKey: 'brandingPage.step4Desc',
    colorClass: 'bg-emerald-50 text-emerald-500'
  },
  {
    id: 5,
    icon: Target,
    titleKey: 'brandingPage.step5',
    descKey: 'brandingPage.step5Desc',
    colorClass: 'bg-orange-50 text-orange-500'
  },
  {
    id: 6,
    icon: CheckCircle2,
    titleKey: 'brandingPage.step6',
    descKey: 'brandingPage.step6Desc',
    colorClass: 'bg-cyan-50 text-cyan-500'
  }
];

export const brandingDifferences: BrandingDifference[] = [
  {
    icon: Users,
    titleKey: 'brandingPage.diff1',
    descKey: 'brandingPage.diff1Desc'
  },
  {
    icon: Microscope,
    titleKey: 'brandingPage.diff2',
    descKey: 'brandingPage.diff2Desc'
  },
  {
    icon: CheckCircle2,
    titleKey: 'brandingPage.diff3',
    descKey: 'brandingPage.diff3Desc'
  }
];

export const smeFeatures = [
  {
    icon: Boxes,
    titleKey: 'journey.point1Title',
    descKey: 'journey.point1Desc'
  },
  {
    icon: Zap,
    titleKey: 'journey.point2Title',
    descKey: 'journey.point2Desc'
  },
  {
    icon: Users,
    titleKey: 'journey.point3Title',
    descKey: 'journey.point3Desc'
  }
];
