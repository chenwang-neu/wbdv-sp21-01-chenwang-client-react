import React,{useState}from 'react'

const ListWidget = ({widget, widgetToUpdate, widgetToDelete}) => {
    const [editingWidget, setEditingWidget] = useState({});
    const [widgetCache, setWidgetCache] = useState(widget);

    return(
        <div>
            {
                editingWidget.id === widget.id &&
                <>
                    <i onClick={() => {
                        widgetToUpdate(widgetCache)
                        setEditingWidget({})
                    }} className="fas fa-2x fa-check float-right"/>
                    <i onClick={() => widgetToDelete(widget)} className="fas fa-2x fa-trash float-right"/>
                    <input onChange={(e) =>
                        setWidgetCache({...widgetCache, widgetOrder: e.target.checked?1:0})}
                           checked={widgetCache.widgetOrder === 1} type="checkbox"/>
                           Ordered
                    <br/>
                    <select className="col form-control"
                            value ={widgetCache.type}
                            onChange={(e) =>
                                setWidgetCache({...widgetCache, type: e.target.value
                                })}>
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>
                        <option value={"VIDEO"} disabled>Video</option>
                        <option value={"IMAGE"}>Image</option>
                        <option value={"LINK"} disabled>Link</option>
                        <option value={"LIST"}>List</option>
                        <option value={"HTML"} disabled>HTML</option>
                    </select>
                    <br/>
                    List Items
                    <textarea onChange={(e) =>
                        setWidgetCache({...widgetCache, text: e.target.value})} value={widgetCache.text} rows={10} className="form-control"/>
                </>
            }
            {
                editingWidget.id !== widget.id &&
                <>
                    <i onClick={() => setEditingWidget(widget)} className="fas fa-2x fa-cog float-right"/>
                    {
                        widgetCache.widgetOrder ===1 &&
                        <ol>
                            {
                                widgetCache.text.split("\n").map((item) => {
                                    return(
                                        <li>
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </ol>
                    }
                    {
                        widgetCache.widgetOrder===0 &&
                        <ul>
                            {
                                widgetCache.text.split("\n").map((item) => {
                                    return(
                                        <li>
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    }
                </>
            }
        </div>
    )
}

export default ListWidget