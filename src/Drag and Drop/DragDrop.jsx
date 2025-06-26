import React, { useCallback, useState } from 'react'
import "./style.css"

const initialAvailable = [
    {id: "1", name: "Apple"},
    {id: "2", name: "Banana"},
    {id: "3", name: "Grape"},
    {id: "4", name: "Pineapple"},
    {id: "5", name: "Mango"},
]

const DragDrop = () => {
    const [available, setAvailable] = useState(initialAvailable);
    const [dropped, setDropped] = useState([]);

    
    const [draggedItem, setDraggedItem] = useState(null);
    const [draggedFrom, setDraggedFrom] = useState(null);

    const resetLists = () => {
        setAvailable(initialAvailable);
        setDropped([]);
        setDraggedItem(null);
        setDraggedFrom(null);
    }

    const reorder = (list, startIndex, endIndex) => {
        const result = [...list];
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    }
    const renderItem = (item, from) => {
        return (
            <div key={item.id} 
            data-id={item.id}
            draggable
            onDragStart={() => handleDragStart(item, from)} 
            className='item'>
            {item.name}
        </div>
        )
    };

    const handleDragStart = useCallback((item , from) => {
        setDraggedItem(item);
        setDraggedFrom(from);
    }, [])

    const allowDrop = (e) => {
        e.preventDefault();
    }

    const handleDrop = useCallback((to, e) => {
        e.preventDefault();
        if(!draggedItem) return;

        if(draggedFrom === to){
            const list = to === "available" ? available : dropped;
            const draggedIndex = list.findIndex((i) => i.id === draggedItem.id);

            const dropTargetId = e.target.getAttribute("data-id");
            const dropIndex = list.findIndex((i) => i.id === dropTargetId);

            if(dropIndex === -1) return;

            if(draggedIndex !== dropIndex){
                const reordered = reorder(list, draggedIndex, dropIndex);
                if(to === "available") setAvailable(reordered);
                else setDropped(reordered);
            }
        } else {
            if(draggedFrom === "available"){
                setAvailable((prev) => prev.filter((i) => i.id !== draggedItem.id));
                setDropped((prev) => [...prev, draggedItem]);
            }
            else {
                setDropped((prev) => prev.filter((i) => i.id !== draggedItem.id));
                setAvailable((prev) => [...prev, draggedItem]);
            }
        }
        setDraggedItem(null);
        setDraggedFrom(null);
    }, [draggedItem, draggedFrom, available, dropped])

    return (
        <div className='app-wrapper'>
           <header>
                <h1>Drag and Drop Fruits</h1>
                <button onClick={resetLists} className='reset-btn' data-testid = "reset-button">Reset List</button>
           </header>

            <div className='container'>

                <div className='column' onDrop={(e) => handleDrop("available", e)} onDragOver={allowDrop}>
                    <h2>Available Fruits</h2>
                    {available.length === 0 && (
                        <p className='empty'>No Friuts here</p>
                    )}
                    {available.map((item) => renderItem(item, "available"))}
                </div>
           

                <div className='column drop-zone' onDrop={(e) => handleDrop("dropped", e)} onDragOver={allowDrop}>
                    <h2>Dropped Fruits</h2>
                    {dropped.length === 0 && (
                        <p className='empty'>Drop Friuts here</p>
                    )}
                    {dropped.map((item) => renderItem(item, "dropped"))}
                 </div>
            </div>
        </div>
    )
}

export default DragDrop