import React, { useEffect, useState } from 'react'
import './index.css'

const AutoSearch = () => {

    const[inputText, setInputText] = useState('');
    const[suggestions, setSuggestions] = useState([]);
    const[showResults, setshowResults] = useState(false);
    const[cache, setCache] = useState({});
    
    const fetchData = async() => {
        
        if(cache[inputText]){
            setSuggestions(cache[inputText])
            return;
        }

        const data = await fetch( 'https://dummyjson.com/recipes/search?q=' + inputText);
        const json = await data.json();
        setSuggestions(json?.recipes);
        setCache((prev) => ({
            ...prev,
            [inputText]: json?.recipes
        }))
    }
   
    useEffect(() => {
        const timer = setTimeout(fetchData, 200);

        return () => {
            clearTimeout(timer);
        }
    }, [inputText])
    

    return (
        <div>
            <h1>Autocompelete Search Bar</h1>
            <div>
                <input className='input' onFocus={() => setshowResults(true)} onBlur={() => setshowResults(false)} type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder='Search here'/>
            </div>
           {showResults && <div className='search-results'>
                {
                    suggestions.map((res) => (
                        <p key={res.id} className='results'>{res.name}</p>
                    ))
                }
            </div>}
        </div>
    )
}

export default AutoSearch