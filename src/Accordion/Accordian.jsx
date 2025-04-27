import React, { useState } from 'react'

const data = [
    {
        id:1,
        name: "Accordian 1",
        item: "Accordian 1 works"
    },
    {
        id:2,
        name: "Accordian 2",
        item: "Accordian 2 works"
    },
    {
        id:3,
        name: "Accordian 3",
        item: "Accordian 3 works"
    },
    {
        id:4,
        name: "Accordian 4",
        item: "Accordian 4 works"
    },

]



const Accordian = () => {

    const[activeIndex, setActiveIndex] = useState(null);

    const handletoggle = (data) => {
        setActiveIndex(data.id);
    }

    return (
        <div>
            {
                data.map((data) => (
                    <div key={data.id}>
                        <button onClick={() => handletoggle(data)} >{data.name}</button>
                        {activeIndex === data.id && <div>{data.item}</div>}
                    </div>
                ))
            }
        </div>
    )
}

export default Accordian