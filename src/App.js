import logo from './logo.svg';
import './App.css';
import './fonts/Nabla-Regular/Nabla-Regular.ttf'
import './index.css';
import React, {useState} from 'react';


const quotes = [
    "Old is Gold.", 
    "Nature relives through oneself!", 
    "They shall not give up",
    "Hello there",
    "Wow"
    ]

function App() {

    const [quote, setQuote] = useState(quotes[0])

    function generate () {
        const randomQuote = quotes[Math.floor(Math.random()*quotes.length)]
        setQuote(randomQuote)

    }

    return(
        <div>
        <div className='quotes'>
            <span className="fade-in">
                 {quote}
            </span>
        </div>
        <div className="text">
            <button className='button' onClick={generate} >Generate Random Quote</button>
        </div>
        </div>
    )
}

export default App;
