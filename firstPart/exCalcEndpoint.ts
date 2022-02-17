interface Values {
    dailyHours: number[];
    target: number;
}


export const calculateExercise = (values: Values) => {
    const days = values.dailyHours.length
    const trainingDays = values.dailyHours.filter(day => day !== 0).length
    const target = values.target
    const averageTime = values.dailyHours.reduce((prev, curr) => prev + curr) / trainingDays
    const success = target <= averageTime
    const rating = averageTime > target ? 3 : (averageTime < target ? 1 : 2)
    const ratingDescription = rating === 1 ? 'Do a little more!' : (rating === 2 ? 'Great, but you can do better!' : 'Perfection!')

    return({
        days,
        trainingDays,
        target,
        averageTime,
        success,
        rating,
        ratingDescription
    })
}