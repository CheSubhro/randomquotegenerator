import React,{useState,useEffect} from 'react';
import './App.css';

function App() {

	const [quote,setQuote] = useState('')
	const [author,setAuthor] = useState('')

	useEffect(() => {
		fetch(`https://type.fit/api/quotes`)
		.then(res =>res.json())
		.then(
			(quotes) =>{
				const randomIndex = Math.floor(Math.random() * quotes.length);
                const quote = quotes[randomIndex];
				setQuote(quote.text)
				setAuthor(quote.author)
			}
		)
	}, [])
	

	const fetchNewQuote = ()=>{
		fetch(`https://type.fit/api/quotes`)
		.then(res =>res.json())
		.then(
			(quotes) =>{
				const randomIndex = Math.floor(Math.random() * quotes.length);
                const quote = quotes[randomIndex];
				setQuote(quote.text)
				setAuthor(quote.author)
			}
		)
	} 
	return (
		<>
			<div className='App'>
				<div className='quote'>
					<h2>{quote}</h2>
					<small>-{author}-</small>
				</div><br/>
				<button className='btn' onClick={fetchNewQuote}>Generate New Quote</button>
			</div>
		</>
	);
}

export default App;
