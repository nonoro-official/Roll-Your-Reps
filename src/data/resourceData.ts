import type {ResourceItem} from "../types";

export const generalResources: ResourceItem[] = [
    {
        icon: '🏃‍♂️',
        title: 'Getting Started',
        description: 'New to exercise? Start with just 10 minutes a day and gradually increase. Any movement is better than none!'
    },
    {
        icon: '🧘‍♀️',
        title: 'Stretching Guide',
        description: 'Warm up before exercising and cool down after. Stretching improves flexibility and prevents injury.'
    },
    {
        icon: '💧',
        title: 'Stay Hydrated',
        description: 'Drink water before, during, and after your workout. Hydration boosts your energy and performance.'
    },
    {
        icon: '🍎',
        title: 'Nutrition Tips',
        description: 'Fuel your body with healthy meals. A balanced diet supports your workouts and recovery.'
    },
    {
        icon: '😴',
        title: 'Rest & Recovery',
        description: 'Your body needs rest. Get enough sleep and include recovery days in your routine.'
    },
    {
        icon: '👥',
        title: 'Find a Buddy',
        description: 'Exercising with a friend makes workouts more fun and helps you stay consistent.'
    }
];

// --- EXERCISE GUIDES ---
export const exerciseGuides = [
    {
        title: "Warm-Ups (1 minute)",
        ideas: [
            "Arm circles",
            "Marching in place",
            "Light jogging in place",
            "Hip rotations"
        ],
        goal: "Raise your heart rate and loosen your joints."
    },
    {
        title: "Squats",
        howTo: [
            "Stand with feet shoulder-width apart.",
            "Push your hips back like you're sitting on a chair.",
            "Lower until your thighs are parallel to the ground.",
            "Push through your heels to stand back up."
        ],
        tips: "Keep your chest up and knees pointed forward."
    },
    {
        title: "Knee Push-Ups",
        howTo: [
            "Start in a plank position but with knees on the floor.",
            "Lower your chest toward the ground by bending your elbows.",
            "Push back up to starting position."
        ],
        tips: "Keep your hips aligned — don’t sag your back."
    },
    {
        title: "Plank (20–30 sec)",
        howTo: [
            "Place forearms on the ground, elbows under shoulders.",
            "Lift your body into a straight line from shoulders to heels.",
            "Hold the position without letting your hips drop."
        ],
        tips: "Squeeze your core and glutes."
    },
    {
        title: "Lunges (each leg)",
        howTo: [
            "Step forward with one leg.",
            "Lower your body until both knees reach a 90° angle.",
            "Push back up to the starting position.",
            "Switch legs."
        ],
        tips: "Keep your upper body straight; front knee shouldn’t go past toes."
    },
    {
        title: "Jumping Jacks",
        howTo: [
            "Stand straight with feet together and hands by your sides.",
            "Jump your feet out while raising your arms above your head.",
            "Jump back to the starting position."
        ],
        tips: "Land softly, keep your core tight, and breathe steadily."
    },
    {
        title: "Push-Ups (regular)",
        howTo: [
            "Start in a plank with hands under shoulders.",
            "Lower your chest to the floor.",
            "Push back up."
        ],
        tips: "Keep your body straight; don’t let your hips sag."
    },
    {
        title: "Mountain Climbers (20 reps)",
        howTo: [
            "Start in a plank position.",
            "Bring one knee toward your chest.",
            "Switch legs quickly as if running in place."
        ],
        tips: "Move fast but stay controlled."
    },
    {
        title: "Stretch (Cool Down)",
        ideas: [
            "Hamstring stretch",
            "Arm/shoulder stretch",
            "Quad stretch",
            "Deep breathing"
        ],
        goal: "Reduce soreness and improve mobility."
    },
    {
        title: "Crunches (15 reps)",
        howTo: [
            "Lie on your back, knees bent, hands behind your head.",
            "Lift your shoulders off the floor using your core.",
            "Lower back down slowly."
        ],
        tips: "Don't pull on your neck — lead with your chest."
    },
    {
        title: "Bicycle Kicks (20 reps)",
        howTo: [
            "Lie on your back with your hands behind your head.",
            "Raise legs and alternate touching elbow to opposite knee."
        ],
        tips: "Keep your core engaged — don’t rush."
    },
    {
        title: "Leg Raises (20 reps)",
        howTo: [
            "Lie flat on your back, hands under your hips.",
            "Lift your legs straight up to 90°.",
            "Slowly lower them back down without touching the ground."
        ],
        tips: "Keep your lower back pressed into the floor."
    },
    {
        title: "Arm Circles (20 reps)",
        howTo: [
            "Stand tall, arms stretched out to the sides.",
            "Make small circles forward, then backward."
        ],
        tips: "Keep arms straight and shoulder-level."
    },
    {
        title: "Tricep Dips (Chair) — 20 reps",
        howTo: [
            "Sit on the edge of a stable chair and place hands beside your hips.",
            "Slide your body off the chair.",
            "Bend elbows to lower your body.",
            "Push back up."
        ],
        tips: "Keep your back close to the chair."
    },
    {
        title: "Plank Up-Downs (10 reps)",
        howTo: [
            "Start in a high plank (hands on the floor).",
            "Lower one arm down into a forearm plank.",
            "Push back up to high plank one arm at a time."
        ],
        tips: "Keep your hips steady; alternate which arm goes first."
    }
];

// --- WORKOUT ROUTINES ---
export const workoutRoutines = [
    {
        name: "Beginner Routine (5 minutes)",
        items: [
            "20 Jumping Jacks",
            "10 Squats",
            "10 Knee Push-Ups",
            "20-second Plank",
            "10 Lunges (each leg)"
        ]
    },
    {
        name: "Full Body Routine (10 minutes)",
        items: [
            "1 minute warm-up",
            "15 Squats",
            "10 Push-Ups",
            "20 Mountain Climbers",
            "30 sec Rest",
            "20 Lunges",
            "30 sec Plank",
            "Stretch"
        ]
    },
    {
        name: "Core Routine",
        items: [
            "15 Crunches",
            "20 Bicycle Kicks",
            "20 Leg Raises",
            "30 sec Plank"
        ]
    },
    {
        name: "Arms Routine (No Equipment)",
        items: [
            "20 Arm Circles",
            "15 Push-Ups",
            "20 Tricep Dips (Chair)",
            "10 Plank Up-Downs"
        ]
    }
];

// --- WORKOUT VIDEOS ---
export const workoutVideos = [
    { title: "7-Minute Workout", url: "https://www.youtube.com/watch?v=ECxYJcnvyMw" },
    { title: "25 Min Full Body Workout (No Equipment)", url: "https://www.youtube.com/watch?v=3EKcdVsYdk4" },
    { title: "Scientific 7 Minute Workout", url: "https://www.youtube.com/watch?v=Jru5B044HOs" },
    { title: "Daily Stretch Routine (12 minutes)", url: "https://www.youtube.com/watch?v=RKYhcPV2dbA" },
    { title: "Beginner Full Body Workout", url: "https://www.youtube.com/watch?v=xCSaHRtgw1w" }
];