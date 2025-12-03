import type {ExerciseList, MascotType} from "../types";

export const MascotExercises: Record<MascotType, ExerciseList> = {
    cat: {
        withEquipment: ['Jump Rope', 'Speed Rope Skips', 'Side-to-Side Rope Hops', 'High-Knee Rope Skips', 'Criss-Cross Rope', 'Double-Under Attempts'],
        noEquipment: ['Jumping Jacks', 'High Knees', 'Fast Feet', 'Invisible Jump Rope', 'Star Jumps', 'Side-to-Side Hops']
    },
    rabbit: {
        withEquipment: ['Dribbling in place', 'Chest passes (against a wall)', 'Finger taps', 'Baseball passes', 'Overhead passes'],
        noEquipment: ['Squat & reach (simulate shooting form)', 'Fast shuffles (basketball footwork)', 'Jump shots without ball', 'Defensive slides', 'Toe taps']
    },
    bear: {
        withEquipment: ['Weighted Squats', 'Weighted Lunges', 'Bicep Curls', 'Shoulder Press', 'Deadlifts with dumbbells/heavy object'],
        noEquipment: ['Bodyweight Squats', 'Lunges', 'Push-ups', 'Plank', 'Mountain Climbers', 'Glute Bridges']
    }
};