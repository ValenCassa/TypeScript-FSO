import express from 'express';
import { bmiCalculator } from './bmiCalcEndpoint';
import { calculateExercise } from './exCalcEndpoint';
const app = express();

app.use(express.json())

app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack');
});

app.get('/bmi', (req, res) => {
    const {weight, height} = req.query;
    if (isNaN(Number(weight)) || isNaN(Number(height))) {
        res.status(400).json({ error: 'Invalid arguments' }).end()
    }

    res.json(bmiCalculator({weight: Number(weight), height: Number(height)}))
    
     
})

app.post('/excercise', (req, res) => {
    const data = req.body

    const checkifNaN = data.dailyHours.every((day: number) => isNaN(day)) || isNaN(data.target)

    if (checkifNaN) {
        res.status(400).json({ error: 'malformatted parameters' })
    } else if (!data.dailyHours || !data.target) {
        res.status(400).json({ error: 'parameters missing' })
    }

    res.json(calculateExercise(data))
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`App running on port: ${PORT}`)
})



