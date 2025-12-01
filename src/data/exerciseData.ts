import type {ExerciseList, MascotType} from "../types";

export const MascotExercises: Record<MascotType, ExerciseList> = {
    cat: {
        withEquipment: ['Stretch', 'Cat-Cow Pose', 'Balance', 'Toe Touches', 'Neck Rolls', 'Yoga Mat Stretches'],
        noEquipment: ['Stretch', 'Cat-Cow Pose', 'Balance', 'Toe Touches', 'Neck Rolls', 'Wall Stretches']
    },
    rabbit: {
        withEquipment: ['Jump Rope', 'Trampoline Jumps', 'Box Jumps', 'Hop in place', 'Star Jumps'],
        noEquipment: ['Hop in place', 'Star Jumps', 'Bunny Hops', 'High Knees', 'Jumping Jacks']
    },
    bear: {
        withEquipment: ['Push-ups with weights', 'Weighted Squats', 'Dumbbell Lunges', 'Plank with weights', 'Resistance Band Rows'],
        noEquipment: ['Push-ups', 'Squats', 'Lunges', 'Plank', 'Mountain Climbers', 'Wall Sit']
    }
};