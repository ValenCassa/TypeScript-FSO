interface BMIValues  {
    weight: number;
    height: number;
}

const checkArguments = (args: Array<string>): BMIValues => {
    if (args.length < 4) throw new Error('Not enough args')
    if (args.length > 4) throw new Error('Too many args')

    const checkIfNaN = (!isNaN(Number(args[2])) && !isNaN(Number(args[3])))

    if (checkIfNaN) {
        return {
            weight: Number(args[2]),
            height: Number(args[3]) > 100 ? Number(args[3])/100 : Number(args[3]) 
        }
    } else {
        throw new Error('Provided values were not numbers')
    }
}

const bmiCalculator = (weight: number, height: number, printText: string): void => {
    const bmi = weight/(Math.pow(height, 2))
    if (bmi < 18.5) {
        console.log(printText, `Thin(${bmi})`)
    } else if (bmi > 18.5 && bmi < 30) {
        console.log(printText, `Normal(${bmi})`)
    } else {
        console.log(printText, `Obese(${bmi})`)
    }
}

try {
    const { weight, height } = checkArguments(process.argv)
    bmiCalculator(weight, height, 'Your BMI is: ')
} catch (error: unknown) {
    let errorMessage = 'Something went wrong'
    if (error instanceof Error) {
        errorMessage += ' Error: ' + error.message
    }
    console.log(errorMessage)
}
