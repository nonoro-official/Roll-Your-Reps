import type {BenefitInfoItem, BenefitTabType, BenefitType} from "../types";

export const benefitInfo: Record<BenefitType, BenefitInfoItem> = {
    bone: {
        title: 'Bone Health',
        description: 'Regular exercise helps build and maintain strong bones! Weight-bearing exercises like jumping, running, and dancing increase bone density and reduce the risk of osteoporosis as you age.'
    },
    muscle: {
        title: 'Muscle Strength',
        description: 'Exercise builds and tones your muscles, making everyday activities easier. Stronger muscles also support your joints and help prevent injuries!'
    },
    weight: {
        title: 'Weight Management',
        description: 'Physical activity helps you maintain a healthy weight by burning calories and building muscle. Combined with good nutrition, exercise is key to a healthy body composition.'
    },
    heart: {
        title: 'Heart Health',
        description: 'Cardiovascular exercise strengthens your heart and improves circulation. A strong heart pumps blood more efficiently, reducing your risk of heart disease.'
    },
    energy: {
        title: 'Energy Levels',
        description: 'Regular exercise actually increases your energy levels! It improves your cardiovascular system and helps oxygen and nutrients reach your tissues more efficiently.'
    },
    mood: {
        title: 'Mood Boost',
        description: 'Exercise releases endorphins, the "feel-good" hormones! These natural mood boosters help reduce feelings of depression and anxiety, leaving you feeling happier.'
    },
    stress: {
        title: 'Stress Relief',
        description: 'Physical activity reduces stress hormones like cortisol and adrenaline. Exercise also helps clear your mind and provides a healthy outlet for tension.'
    },
    sleep: {
        title: 'Better Sleep',
        description: 'Regular exercise helps you fall asleep faster and enjoy deeper sleep. Just avoid intense workouts close to bedtime!'
    },
    focus: {
        title: 'Improved Focus',
        description: 'Exercise increases blood flow to the brain, improving memory, concentration, and cognitive function. It can help you think more clearly and stay focused.'
    },
    confidence: {
        title: 'Self-Confidence',
        description: 'Achieving fitness goals, big or small, builds self-esteem and confidence. Exercise helps you feel strong, capable, and proud of what your body can do!'
    },
    teamwork: {
        title: 'Teamwork Skills',
        description: 'Group exercises and team sports teach cooperation and collaboration. You learn to work together toward common goals and support each other!'
    },
    communication: {
        title: 'Communication',
        description: 'Exercising with others improves your ability to communicate effectively. Whether giving encouragement or coordinating moves, you practice important social skills.'
    },
    friendship: {
        title: 'Building Friendships',
        description: 'Shared physical activities create bonds and friendships! Workout buddies provide support, accountability, and make exercise more fun.'
    },
    motivation: {
        title: 'Mutual Motivation',
        description: 'Exercising with others keeps you motivated and accountable. You inspire each other to show up, push harder, and celebrate successes together!'
    }
};

export const benefitMascots: Record<BenefitType, string[]> = {
    bone: ['🐰', '🐱'],
    muscle: ['🐶', '🐻'],
    weight: ['🐼', '🦊'],
    heart: ['🐦', '🐕'],
    energy: ['🐥', '🐹'],
    mood: ['🐱', '🐨'],
    stress: ['🐵', '🐷'],
    sleep: ['🦉', '🐑'],
    focus: ['🐯', '🐰'],
    confidence: ['🦁', '🐺'],
    teamwork: ['🦦', '🦌'],
    communication: ['🐮', '🐐'],
    friendship: ['🐭', '🦆'],
    motivation: ['🐿️', '🦢']
};

export const benefitsByTab: Record<BenefitTabType, BenefitType[]> = {
    physical: ['bone', 'muscle', 'weight', 'heart', 'energy'],
    mental: ['mood', 'stress', 'sleep', 'focus', 'confidence'],
    social: ['teamwork', 'communication', 'friendship', 'motivation']
};