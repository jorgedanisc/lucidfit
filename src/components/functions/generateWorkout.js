import exercisesData from "../data/exercises";
import {Rand, RandInt} from "./random";


const workoutData = {
    duration: {min: 30, max: 70},
    numExercises: exercisesData.size,
}

export function GenerateWorkout(option) //1-Equipment, 2-No-Equipment, 3-Random-Equipment
{
    const workout = {};

    const duration = RandInt(workoutData.duration.min, workoutData.duration.max) * 60;

    const repetitions = Rand() <= 0.85 ? true : false;

    let calculatedDuration = 0;
    
    while(duration*=0.35>=calculatedDuration) //35% of the time is rest
    {
        let randomExercise = RandInt(0, workoutData.numExercises-1);

        if(option==1)
        {
            while(!exercisesData.get(randomExercise).equipment)
            {randomExercise = RandInt(0, workoutData.numExercises-1);}
        }
        else if(option==2)
        {
            while(exercisesData.get(randomExercise).equipment)
            {randomExercise = RandInt(0, workoutData.numExercises-1);}
        }

        const exer = exercisesData.get(randomExercise);

        let rep, clock;

        if(repetitions)
        {    
            if(exer.clock)
            { clock = RandInt(exer.clockset.min, exer.clockset.max); rep = 1; }
            else
            { 
                rep = RandInt(exer.repset.min, exer.repset.max); 
                clock = rep * exer.avgRepDuration;
            }
        }
        else
        {
            if(exer.clock)
            { clock = RandInt(exer.clockset.min, exer.clockset.max); rep = 1; }
            else
            { clock = RandInt(exer.clockset.min, exer.clockset.max); rep = 1; }
        }

        calculatedDuration += clock;

        const exercise = {
            name: exer.name,
            muscle: exer.muscle,
            reps: rep,
            clock: clock,
            imgPath: exer.imgPath,
            gifPath: exer.gifPath
        }
        
        workout+=exercise;
    } 

    return workout;
}