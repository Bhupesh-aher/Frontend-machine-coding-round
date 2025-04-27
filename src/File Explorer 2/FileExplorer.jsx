import React, { useState } from 'react'
import './style.css'
import json from "./data.json"

const List = ({list, setData, addNodeToList, deleteNodeFromList}) => {
  const [isExpanded, setIsExpanded] = useState({})

  return (
    <div className='conatiner'>
      {
        list.map((node) => (
          <div key={node.id}>
            {node.isFolder && <span onClick={() => setIsExpanded((prev) => ({...prev, [node.name]: !prev[node.name]}))}>{isExpanded?.[node.name] ? "- " : "+ "}</span>}
            <span>{node.name}</span>
            {node.isFolder && <span onClick={() => addNodeToList(node.id)}><img src="https://cdn-icons-png.flaticon.com/512/58/58298.png" alt=""  className='icon'/></span>}
            {<span onClick={() => deleteNodeFromList(node.id)}> <img src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" alt="icon" className='icon'/></span>}
            {isExpanded?.[node.name] && node.children && <List list={node.children} setData={setData} addNodeToList={addNodeToList} deleteNodeFromList={deleteNodeFromList}/>}
          </div>
        ))
      }
    </div>
  )
}

const FileExplorer = () => {
  const[data, setData] = useState(json);
  
 
  const addNodeToList= (parentId) => {
 
    const folderName = prompt("Enter Name");

     const updateTree = (list) => {
        const newList = list.map((node) => {
          if(node.id == parentId){
            return {
              ...node,
              children: [...node.children, {id: Date.now(), name: folderName, isFolder: true, children: []}]
            }
          }
          if(node.children){
            return {...node, children: updateTree(node?.children)}
          }
          return node;
        })
        return newList;
     }
     
     setData((prev) => updateTree(prev))
  } 

  // itemId is id of node which i want to delete
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
    setData((prev) => updateTree(prev));
  }


  return (
    <div className='con'>
        <List list={data} setData={setData} addNodeToList={addNodeToList} deleteNodeFromList={deleteNodeFromList}/>
    </div>
  )
}

export default FileExplorer









