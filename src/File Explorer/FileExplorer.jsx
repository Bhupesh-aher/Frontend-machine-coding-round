import React, { useState } from 'react'
import "./file.css"
import json from "./data.json"

const FileExplorer = () => {

    const [data, setData] = useState(json)

    // List component will just render the list of objects/nodes
    // it is recursing over list/array of objects(nodes)
    const List = ({list}) => {


        const [isExpand, setIsExpand] = useState({})

        return (
            <div className='container'>
                {list.map((node) => (
                 <div key={node.id}>
                    {node.isFolder && <span onClick={() => setIsExpand(prev =>( {...prev, [node.name]: !prev[node.name] }))}>{isExpand?.[node.name] ? "-" : "+"  } </span> }
                    <span>{node.name}</span>
                    {isExpand?.[node.name] && node?.children && <List list={node.children} />}
                 </div>
                    
                ))}
            </div> 
        )
    }

    return (
        <div>
            <h1>File-Folder Explorer</h1>
            <List list={data}/>
        </div>
    )
}

export default FileExplorer