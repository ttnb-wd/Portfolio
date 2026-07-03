import type { IconType } from "react-icons";
import type { ReactNode } from "react";

// ============================================================================
// Navigation Types
// ============================================================================

export interface NavigationItem {
  label: string;
  href: string;
}

// ============================================================================
// Project Types
// ============================================================================

export type ProjectStatus = "completed" | "in-progress" | "coming-soon";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  live: string;
  status?: ProjectStatus;
  featured?: boolean;
}

// ============================================================================
// Skills Types
// ============================================================================

export type SkillCategory = "Frontend" | "Backend" | "Database" | "Tools" | "AI";

export interface Skill {
  name: string;
  icon: IconType | React.ElementType;
  color: string;
  description: string;
  category: SkillCategory;
}

// ============================================================================
// Experience Types
// ============================================================================

export interface Experience {
  year: string;
  title: string;
  description: string;
  stack: string[];
}

// ============================================================================
// Workflow Types
// ============================================================================

export interface WorkflowStep {
  title: string;
  description: string;
  icon: React.ElementType;
}

// ============================================================================
// Timeline Types
// ============================================================================

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

// ============================================================================
// Stats Types
// ============================================================================

export interface Stat {
  label: string;
  value: string;
}

// ============================================================================
// Social Link Types
// ============================================================================

export interface SocialLink {
  name: string;
  username: string;
  href: string;
  icon: IconType | React.ElementType;
}

// ============================================================================
// Common Component Props
// ============================================================================

export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

export interface AnimatedComponentProps extends BaseComponentProps {
  delay?: number;
}

// ============================================================================
// Type Guards
// ============================================================================

export const isProjectStatus = (status: string): status is ProjectStatus => {
  return ["completed", "in-progress", "coming-soon"].includes(status);
};

export const isSkillCategory = (category: string): category is SkillCategory => {
  return ["Frontend", "Backend", "Database", "Tools", "AI"].includes(category);
};
