import React, { useEffect, useState } from 'react'
import './search.css'

const AutoSearch = () => {

    const [inputText, setInputText] = useState("")
    const [results, setresults] = useState([])
    const [showResults, setShowResults] = useState(false)
    const [cache, setCache] = useState({})
  
    const fetchData = async () => {
  
      if(cache[inputText]){
        setresults(cache[inputText])
        return;
      }
  
      const data = await fetch('https://dummyjson.com/recipes/search?q=' + inputText)
      const json = await data.json();
      setresults(json?.recipes)
      setCache((prev) => ({...prev, [inputText]: json?.recipes }))
    }
   
    useEffect(() => {
      const timer = setTimeout(fetchData, 300) 
  
      return () => {
        clearTimeout(timer)
      }
    }, [inputText])
   
    return (
      <div className="app">
        <h1>Autocomplete Search</h1>
        <div>
          <input type="text" 
          value={inputText} 
          onChange={(e) => setInputText(e.target.value)} 
          className="search-input" 
          onFocus={() => setShowResults(true)} 
          onBlur={() => setShowResults(false)} 
          />
  
          {showResults && (<div className="result-container">
            {
              results.map((r) => (
                <span className="result" key={r.id}>{r.name}</span>
              ))
            }
          </div>)}
  
        </div>
  
      </div>
    )
}

export default AutoSearch