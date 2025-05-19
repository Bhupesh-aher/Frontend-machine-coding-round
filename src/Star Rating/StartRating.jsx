import React, { useState } from 'react'

const StartRating = () => {

    const [rating, setRating] = useState(0);

    return (
        <div style={{textAlign: 'center', padding: "20px"}}>
            <h3>Star Rating</h3>

            <div>
                {[1, 2, 3, 4, 5].map((star) => (
                    <span style={{fontsize: "30px", cursor: "pointer", color: star <= rating ? "gold" : "gray"}} key={star} onClick={(() => setRating(star))}>☆</span>
                ))}
            </div>

            <p>Current Rating: {rating}</p>

            <button style={{marginTop: "10px", padding: "8px 15px", fontSize: "16px", cursor:"pointer"}} onClick={() => setRating(0)}>Reset Rating</button>
        </div>
    ) 
}

export default StartRating