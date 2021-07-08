import React from 'react'
import './HobbyList.css'
const HobbyList=(props)=>
{
    const {hobbyList,activeId,onHobbyClick} = props;
    const handleClick=(x)=>{
        if(onHobbyClick)
        {
            onHobbyClick(x);
        }

    }
    return(
        <ul className={"hobby-list"}>
        {
            hobbyList.map(x=>{
                return(<li className={x.id===activeId?'active':''} key={x.id} 
                onClick={()=>handleClick(x)}>{x.title}</li>) 
            })
        }
        </ul>
    )
}
export default HobbyList;