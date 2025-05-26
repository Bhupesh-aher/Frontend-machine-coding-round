import React, { useState } from 'react'

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
        <div style={{textAlign: "center", padding: "50px", height: "100vh"}}>
            <h3>Modal Popup</h3>
            <button onClick={handleOpen}>Open Modal</button>

            {isOpen && (
                <div onMouseDown={handleClose} style={{position: "fixed",  top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.6)", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div onMouseDown={(e) => e.stopPropagation()} style={{background: "white", padding: "20px", borderRadius: "10px", textAlign: "center", minWidth: "300px"}}>
                        <h2>Modal Header</h2>
                        <p>This is the Modal Body</p>
                        <button onClick={handleClose}>Close</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Modal