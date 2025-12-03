// src/types/index.ts

export type MascotType = 'cat' | 'rabbit' | 'bear';
export type SectionType = 'home' | 'exercise' | 'facts' | 'resources';
export type BenefitTabType = 'physical' | 'mental' | 'social';
export type BenefitType =
    | 'strength' | 'longevity' | 'health' | 'weight' | 'heart'
    | 'mood' | 'sleep' | 'focus'
    | 'communication' | 'teamwork' | 'time';

export interface ExerciseList {
    withEquipment: string[];
    noEquipment: string[];
}

export interface BenefitInfoItem {
    title: string;
    description: string;
}

export interface ResourceItem {
    icon: string;
    title: string;
    description: string;
}
