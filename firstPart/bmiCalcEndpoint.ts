interface Calc {
    weight: number;
    height: number;
}

export const bmiCalculator = (values: Calc): Record<string, unknown> => {
    const { weight, height } = values

    const heightInMeters = height > 100 ? height / 100 : height 
    const bmi = weight/(Math.pow(heightInMeters, 2))
    const bmiResult = bmi < 18.5 ? 'Thin' : (bmi > 18.5 && bmi < 30 ? 'Normal': 'Obese')
    
    return {
        weight,
        height: heightInMeters,
        bmiResult
    }
} 
