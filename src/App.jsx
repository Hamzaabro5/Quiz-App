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
        index < quiz.length - 1 ? setIndex(index + 1) : alert('question khatum ho gain hain')
    }


    return (
        <>
            <h1>Quiz App</h1>
            <div>
                {quiz.length > 0 ? <h1>Q{index + 1}: {quiz[index].question.text}</h1> : <h1>Loading...</h1>}
            </div>
            <button onClick={nextQuestion}>Next</button>
        </>
    )
}

export default App