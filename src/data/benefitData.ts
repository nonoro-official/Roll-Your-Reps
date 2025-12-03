import type {BenefitInfoItem, BenefitTabType, BenefitType} from "../types";

export const benefitInfo: Record<BenefitType, BenefitInfoItem> = {
    strength: {
        title: 'Bone Health',
        description: 'Regular exercise helps build and maintain strong bones! Weight-bearing exercises like jumping, running, and dancing increase bone density and reduce the risk of osteoporosis as you age.'
    },
    longevity: {
        title: 'Muscle Strength',
        description: 'Exercise builds and tones your muscles, making everyday activities easier. Stronger muscles also support your joints and help prevent injuries!'
    },
    health: {
        title: 'Weight Management',
        description: 'Physical activity helps you maintain a healthy weight by burning calories and building muscle. Combined with good nutrition, exercise is key to a healthy body composition.'
    },
    weight: {
        title: 'Heart Health',
        description: 'Cardiovascular exercise strengthens your heart and improves circulation. A strong heart pumps blood more efficiently, reducing your risk of heart disease.'
    },
    heart: {
        title: 'Energy Levels',
        description: 'Regular exercise actually increases your energy levels! It improves your cardiovascular system and helps oxygen and nutrients reach your tissues more efficiently.'
    },
    mood: {
        title: 'Mood Boost',
        description: 'Exercise releases endorphins, the "feel-good" hormones! These natural mood boosters help reduce feelings of depression and anxiety, leaving you feeling happier.'
    },
    sleep: {
        title: 'Better Sleep',
        description: 'Regular exercise helps you fall asleep faster and enjoy deeper sleep. Just avoid intense workouts close to bedtime!'
    },
    focus: {
        title: 'Improved Focus',
        description: 'Exercise increases blood flow to the brain, improving memory, concentration, and cognitive function. It can help you think more clearly and stay focused.'
    },
    communication: {
        title: 'Self-Confidence',
        description: 'Achieving fitness goals, big or small, builds self-esteem and confidence. Exercise helps you feel strong, capable, and proud of what your body can do!'
    },
    teamwork: {
        title: 'Teamwork Skills',
        description: 'Group exercises and team sports teach cooperation and collaboration. You learn to work together toward common goals and support each other!'
    },
    time: {
        title: 'Mutual Motivation',
        description: 'Exercising with others keeps you motivated and accountable. You inspire each other to show up, push harder, and celebrate successes together!'
    }
};

export const benefitMascots: Record<BenefitType, string[]> = {
    strength: ['/src/assets/bear.png'],
    longevity: ['/src/assets/bear-gravestone.png'],
    health: ['/src/assets/bunny-mask.png'],
    weight: ['/src/assets/bear-scale.png'],
    heart: ['/src/assets/bear-heart.png'],
    mood: ['/src/assets/happy-kitty.png'],
    sleep: ['/src/assets/kitty-sleep.png'],
    focus: ['/src/assets/bunny-concentrated.png'],
    communication: ['/src/assets/animals-talking.png'],
    teamwork: ['/src/assets/animals-talking.png'],
    time: ['/src/assets/bunny-clock.png']
};

export const benefitsByTab: Record<BenefitTabType, BenefitType[]> = {
    physical: ['strength', 'longevity', 'health', 'weight', 'heart'],
    mental: ['mood', 'sleep', 'focus'],
    social: ['communication', 'teamwork', 'time']
};