import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import "./components.style.client.css"

const EditableItem = (
    {
        to,
        deleteItem,
        updateItem,
        item = {
            title: "Some Title",
            _id: "ABC"
        },
        active
    }) => {
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState(item)
    return (
        <>
            {
                !editing &&
                <>
                    <Link className={`nav-link ${active ? 'active' : ''}`} to={to}>
                        {item.title}
                        <i onClick={() =>
                            setEditing(true)
                        } className="p-1 fas fa-edit float-right"/>
                    </Link>
                </>
            }
            {
                editing &&
                <>
                    <input
                        onChange={(e) =>
                            setCachedItem({
                                ...cachedItem,
                                title: e.target.value
                            })}
                        value={cachedItem.title}/>
                    <i onClick={() => {
                        setEditing(false)
                        updateItem(cachedItem)
                    }} className="p-1 fas fa-check"/>
                    <i onClick={() => deleteItem(item)} className="p-1 fas fa-times"/>
                </>
            }
        </>
    )
}


export default EditableItem