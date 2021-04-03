import React,{useState} from 'react'

const ImageWidget = ({widget, updateItem, deleteItem}) =>
{
    const [editingWidget, setEditingWidget] = useState({});
    const [widgetCache, setWidgetCache] = useState(widget);
    return(
        <div>
            {
                editingWidget.id === widget.id &&
                <>
                    <i onClick={() => {
                        updateItem(widgetCache)
                        setEditingWidget({})
                    }} className="fas fa-2x fa-check float-right"/>
                    <i onClick={() => deleteItem(widget)} className="fas fa-2x fa-trash float-right"/>
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
                    Image URL
                    <input onChange={(e) =>
                        setWidgetCache({...widgetCache, src: e.target.value})} value={widgetCache.src} className="form-control"/>
                    Image Width
                    <input onChange={(e) =>
                        setWidgetCache({...widgetCache, width: e.target.value})} value={widgetCache.width} className="form-control"/>
                    Image Height
                    <input onChange={(e) =>
                        setWidgetCache({...widgetCache, height: e.target.value})} value={widgetCache.height} className="form-control"/>
                </>
            }
            {
                editingWidget.id !== widget.id &&
                <>
                    <i onClick={() => setEditingWidget(widget)} className="fas fa-2x fa-cog float-right"/>
                    <img width={widget.width} height={widget.height} src={widget.src} alt="Image Missing"/>
                </>
            }
        </div>
    )
}

export default ImageWidget