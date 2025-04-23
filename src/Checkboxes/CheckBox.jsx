import React, { useState } from 'react'
import './style.css'

const checkBoxesData = [
    {
        id: 1,
        name: "fruits",
        children: [
            {
                id: 2,
                name: "Citrus",
                children: [
                    {
                        id: 3,
                        name: "orange",
                    },
                    {
                        id: 4,
                        name: "lemon",
                    }
                ]
            },
            {
                id: 5,
                name: "Berries", 
                children: [
                    {
                        id: 6,
                        name: "Strawberry",
                    },
                    {
                        id: 7,
                        name: "Blueberry",
                    }
                ]
            }

        ]
    }, 
    {
        id: 8,
        name: "Tropical",
        children: [
            {
                id: 9,
                name: "Mango",
            },
            {
                id: 10,
                name: "Banana",
            }
        ]
    },
    {
        id: 11,
        name: "Apple"
    }
]

const CheckBoxes = ({data, checked, setchecked}) => {

    const handleChange = (e, node) => { 
       setchecked((prev) => {
        const newState = {...prev, [node.id] : e.target.checked};
        
        const updateChildren = (node) => {
            node.children?.forEach((child) => {
                newState[child.id] = e.target.checked;
                child.children && updateChildren(child);
            })
        }
        updateChildren(node);


        const verifyChecked = (node) => {
            if(!node.children) return newState[node.id] || false;

            const allChildrenChecked = node.children.every((child) => 
                verifyChecked(child)
            )
            newState[node.id] = allChildrenChecked;
            return allChildrenChecked;
        }

        checkBoxesData.forEach((node) => verifyChecked(node));

        return newState;
       })
    }

    

    return (
        <div className='boxes'>
            {
                data.map((node) => (
                   <div key={node.id}>
                        <input type="checkbox" checked={checked[node.id] || false} onChange={(e) => handleChange(e, node)}/> 
                        <label>{node.name}</label>
                        {node.children && <CheckBoxes data={node.children} checked={checked} setchecked={setchecked}/>}
                   </div>
                ))
            }
        </div>
    )
}



const CheckBox = () => {

    const[checked, setchecked] = useState({})
    return (
        <div>
            <div className='checkbox-container'>
                <CheckBoxes data={checkBoxesData} checked={checked} setchecked={setchecked}/>
            </div>
        </div>
    )
}

export default CheckBox



// Before hand version of checking children autoaitcalay when aprent is chencked
// setchecked((prev) => ({
//     ...prev,
//     [node.id]: e.target.checked
// }))
// if(node.children){
//     node.children.forEach((child) => (
//         handleChange(e, child)
//     ))
// }