import type {BenefitInfoItem, BenefitTabType, BenefitType} from "../types";

export const benefitInfo: Record<BenefitType, BenefitInfoItem> = {
    strength: {
        title: 'Strength',
        description: 'Regular physical activity strengthens your muscles and bones, improves flexibility and balance, and helps prevent injuries by keeping your body mobile and conditioned.'
    },
    longevity: {
        title: 'Longevity',
        description: 'Staying active increases your life expectancy and significantly reduces the risk of early death, helping you stay healthier as you age.'
    },
    health: {
        title: 'General Health',
        description: 'Exercise lowers the risk of chronic diseases, boosts your immune system, and protects you from health conditions like diabetes, hypertension, and certain cancers.'
    },
    weight: {
        title: 'Weight Management',
        description: 'Physical activity helps manage your weight by burning calories, improving metabolism, and preventing unhealthy weight gain.'
    },
    heart: {
        title: 'Heart Health',
        description: 'Regular movement supports heart health by improving circulation, lowering cholesterol, and reducing the risk of cardiovascular diseases.'
    },
    mood: {
        title: 'Mood Boost',
        description: 'Exercise releases endorphins, the "feel-good" hormones. These natural mood boosters help reduce feelings of stress, depression, and anxiety, leaving you feeling happier. It helps build self-confidence through a sense of achievement.'
    },
    sleep: {
        title: 'Better Sleep',
        description: 'Being physically active helps you fall asleep faster and improves the quality of your sleep, supporting recovery and mental clarity.'
    },
    focus: {
        title: 'Thinking & Concentration',
        description: 'Exercise increases blood flow to the brain, improving memory, concentration, and cognitive function. It can help you think more clearly and stay focused.'
    },
    communication: {
        title: 'Communication Skills',
        description: 'Sports and physical activities improve communication skills by encouraging cooperation, active listening, and social interaction.'
    },
    teamwork: {
        title: 'Teamwork Skills',
        description: 'Participating in group activities builds teamwork, strengthens self-esteem, and creates a sense of community and belonging.'
    },
    time: {
        title: 'Time Management',
        description: 'Being active teaches time management and decision-making skills, helping you balance responsibilities and make more effective choices.'
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