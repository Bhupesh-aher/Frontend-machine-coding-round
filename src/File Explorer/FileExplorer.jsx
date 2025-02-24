import React, { useState } from 'react'
import "./file.css"
import json from "./data.json"

const FileExplorer = () => {

    const [data, setData] = useState(json)

    const List = ({list, addNodeToList, deleteNodeFromList}) => {
        const [isExpand, setIsExpand] = useState({})

        return (
            <div className='container'>
                {list.map((node) => (
                 <div key={node.id}>
                    {node.isFolder && <span onClick={() => setIsExpand(prev =>( {...prev, [node.name]: !prev[node.name] }))}>{isExpand?.[node.name] ? "-" : "+"  } </span> }
                    <span>{node.name}</span>
                    {node?.isFolder && <span onClick={() => addNodeToList(node.id)}><img src="https://cdn-icons-png.flaticon.com/512/58/58298.png" alt="" className='icon'/></span>}
                    <span onClick={() => deleteNodeFromList(node.id)}><img src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" alt="icon" className='icon'/></span>
                    {isExpand?.[node.name] && node?.children && <List list={node.children}  addNodeToList={addNodeToList} deleteNodeFromList={deleteNodeFromList}/>}
                 </div>
                    
                ))}
            </div> 
        )
    }


    // adding node to a tree using recursion
    const addNodeToList = (parentId) => {
            
    const name = prompt("Enter Folder Name")

        const updateTree = (list) => {
            return list.map((node) => {
                if(node.id === parentId){
                    return {
                        ...node,
                        children: [
                            ...node.children, 
                            {id: Date.now().toString(), name: name, isFolder: true, children: []}
                        ],  
                    }
                }
                if(node.children){
                    return {...node, children: updateTree(node.children)}
                }
                return node
            })
        }
        setData((prev) => updateTree(prev))  
    }


    // removing node to a tree using recursion

    const deleteNodeFromList = (itemId) => {
        const updateTree = (list) => {
            return list
                .filter((node) => node.id !== itemId)
                .map((node) => {
                    if(node.children){
                        return {...node, children: updateTree(node.children)}
                }
                return node
            })
        }
        setData((prev) => updateTree(prev))
    }

    return (


        <div>
            <h1>File-Folder Explorer</h1>
            <List list={data} addNodeToList={addNodeToList} deleteNodeFromList={deleteNodeFromList}/>
        </div>
    )
}

export default FileExplorer