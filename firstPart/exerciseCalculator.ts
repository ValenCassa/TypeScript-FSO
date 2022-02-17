interface Values {
    dailyHours: number[];
    target: number;
}


const parseArguments = (args: string[]): Values => {
    if (args.length > 10) throw new Error('There are only 7 days in a week')
    if (args.length < 10) throw new Error('You have to input the 7 days of the week')
    
    const checkIfNaN = args.slice(2, 10).every(day => !isNaN(Number(day)))

    if (checkIfNaN) {
        const dailyHours = args.slice(2, 9).map(day => Number(day))
        const target = Number(args.pop())

        return {
            dailyHours,
            target
        }
    } else {
        throw new Error('Invalid arguments')
    }
}

const calculateExercise = (values: Values) => {
    const days = values.dailyHours.length
    const trainingDays = values.dailyHours.filter(day => day !== 0).length
    const target = values.target
    const averageTime = values.dailyHours.reduce((prev, curr) => prev + curr) / trainingDays
    const success = target <= averageTime
    const rating = averageTime > target ? 3 : (averageTime < target ? 1 : 2)
    const ratingDescription = rating === 1 ? 'Do a little more!' : (rating === 2 ? 'Great, but you can do better!' : 'Perfection!')

    console.log({
        days,
        trainingDays,
        target,
        averageTime,
        success,
        rating,
        ratingDescription
    })
}

try {
    const { dailyHours, target } = parseArguments(process.argv)
    calculateExercise({dailyHours, target})
} catch (error: unknown) {
    let errorMessage = 'Something went wrong'
    if (error instanceof Error) {
        errorMessage += ' Error: ' + error.message
    }
    console.log(errorMessage)
}