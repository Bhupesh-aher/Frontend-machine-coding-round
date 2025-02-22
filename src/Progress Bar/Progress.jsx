import React from 'react'
import ProgressBar from './ProgressBar'
const Progress = () => {

  const bars = [0, 5, 10, 30, 50, 70, 90, 100]

  return (
    <div>
        <h1>Progress Bar</h1>
      {
        bars.map((value) => (
           <ProgressBar key={value} progress={value}/>
        ))
      }
    </div>
  )
}

export default Progress