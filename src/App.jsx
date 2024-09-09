import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
    let [quiz, setQuiz] = useState([])
    const [index, setIndex] = useState(0)

    useEffect(() => {
        async function getData() {
            let questions = await axios('https://the-trivia-api.com/v2/questions')
            console.log(questions.data);
            setQuiz(questions.data)
        }
        getData()
    }, [])

    
    function nextQuestion() {
        index < quiz.length - 1 ? setIndex(index + 1) : alert('Quiz Completed')
    }

    return (
        <>
            <h1 className='text-5xl font-bold text-center mt-5 mb-20'>Quiz App</h1>
            <div className='text-2xl m-2'>
                { 
                quiz.length > 0 
                ? 
                <h1>
                  Q{index + 1}: {quiz[index].question.text}
                  <ul className='mt-5'>
                  <li><input type="radio" name='select'/> {quiz[index].incorrectAnswers[0]}</li>
                  <li><input type="radio" name='select'/> {quiz[index].correctAnswer}</li>
                  <li><input type="radio" name='select'/> {quiz[index].incorrectAnswers[2]}</li>
                  </ul>
                </h1> 
                :
                <h1>Loading...</h1>}
                
            </div>
            <div className='mt-5'>
            <button className='btn btn-sm btn-success rounded-3xl px-6' onClick={nextQuestion}>Next</button>
            </div>
        </>
    )
}

export default App