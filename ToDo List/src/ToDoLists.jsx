import React from "react";

const ToDoLists = (props) => {

  
    return (
        <>
            <div className="todo_style">
                <i className='fa fa-times' aria-hidden='true'
                    onClick={()=>{
                        props.onSelect(props.id)
                    }}
                />
                <il> {props.text} </il>
            </div>
        </>
    )
};

export default ToDoLists;