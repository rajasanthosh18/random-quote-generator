import React, { useEffect, useState } from 'react'
import axios  from 'axios'
import './App.css'

function QuoteGenerator() {
    const [quote, setQuote] = useState("")

    useEffect(() => {
        fetchQuote();
    },[] );

    const fetchQuote = async () => {
        try{
            const response = await axios.get('https://api.quotable.io/random');
            const {content, author} =  response.data;
            setQuote(content+ " - " + author);

        }catch(error){
            console.log(error);
        }
    };

    return (

        <div className='quote-container'>
            <p >{quote}</p>
            <button onClick={fetchQuote}>click</button>
        </div>
  )
}

export default QuoteGenerator