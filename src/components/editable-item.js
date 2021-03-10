import React, {useState} from 'react'
import {Link} from 'react-router-dom'

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
                    <div className="row">
                        <Link className={`nav-link ${active ? 'active' : ''}`} to={to}>
                            {item.title} {JSON.stringify(active)}
                        </Link>
                        <i onClick={() =>
                            setEditing(true)
                        } className='p-2 fas fa-edit float-right'/>
                    </div>
                </>
            }
            {
                editing &&
                <>
                    <div className="row">
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
                        }} className='fas fa-check float-right'/>
                        <i onClick={() => deleteItem(item)} className='fas fa-times float-right'/>
                    </div>
                </>
            }
        </>
    )
}


export default EditableItem