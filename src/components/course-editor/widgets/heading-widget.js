import React,{useState} from 'react'

const HeadingWidget = ({widget, updateWidget, deleteWidget}) => {
    const [editing, setEditing] = useState(false);
    const [widgetCache, setWidgetCache] = useState(widget);

    return(
        <>
            {
                editing &&
                <div>
                    <i onClick={() => {
                        updateWidget(widget.id, widgetCache)
                        setEditing(false)
                    }} className="fas fa-2x fa-check float-right"/>
                    <i onClick={() => deleteWidget(widget)} className="fas fa-2x fa-trash float-right"/>
                    <select className="col form-control"
                            value ={widgetCache.type}
                            onChange={(e) =>
                                setWidgetCache({...widgetCache, type: e.target.value
                                })}>
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>
                        <option value={"VIDEO"} disabled>Video</option>
                        <option value={"IMAGE"} disabled>Image</option>
                        <option value={"LINK"} disabled>Link</option>
                        <option value={"LIST"} disabled>List</option>
                        <option value={"HTML"} disabled>HTML</option>
                    </select>
                    <br/>
                    <input className="col form-control"
                           value={widgetCache.text}
                           onChange={(e) =>
                               setWidgetCache({...widgetCache, text: e.target.value})
                           }/>
                    <br/>
                    <select className="col form-control"
                            value={widgetCache.size}
                            onChange={(e) => setWidgetCache({
                                ...widgetCache, size: e.target.value
                            })
                            }>
                        <option value={1}>Heading 1</option>
                        <option value={2}>Heading 2</option>
                        <option value={3}>Heading 3</option>
                        <option value={4}>Heading 4</option>
                        <option value={5}>Heading 5</option>
                        <option value={6}>Heading 6</option>
                    </select>
                </div>
            }
            {
                !editing &&
                <>
                    <i onClick={() => setWidgetCache(widget)} className="fas fa-cog float-right"/>
                    {widget.size === 1 && <h1>{widget.text}</h1>}
                    {widget.size === 2 && <h2>{widget.text}</h2>}
                    {widget.size === 3 && <h3>{widget.text}</h3>}
                    {widget.size === 4 && <h4>{widget.text}</h4>}
                    {widget.size === 5 && <h5>{widget.text}</h5>}
                    {widget.size === 6 && <h6>{widget.text}</h6>}
                </>
            }
        </>
    )
}

export default HeadingWidget