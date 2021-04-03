import React,{useState} from 'react'

const ParagraphWidget = ({widget, widgetToUpdate, widgetToDelete}) => {
    const [editingWidget, setEditingWidget] = useState({});
    const [widgetCache, setWidgetCache] = useState(widget);
    return(
        <>
            {
                editingWidget.id === widget.id &&
                <>
                    <i onClick={() => {
                        widgetToUpdate(widgetCache)
                        setEditingWidget({})
                    }} className="fas fa-2x fa-check float-right"/>
                    <i onClick={() => widgetToDelete(widget)} className="fas fa-2x fa-trash float-right"/>
                </>
            }
            {
                (editingWidget.id === widget.id) &&
                <>
                    <select onChange={(e) =>
                        setWidgetCache({...widgetCache, type: e.target.value})} value={widgetCache.type} className="form-control">
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>
                        <option value={"VIDEO"} disabled>Video</option>
                        <option value={"IMAGE"}>Image</option>
                        <option value={"LINK"} disabled>Link</option>
                        <option value={"LIST"}>List</option>
                        <option value={"HTML"} disabled>HTML</option>
                    </select>
                    <textarea onChange={(e) =>
                        setWidgetCache({...widgetCache, text: e.target.value})} value={widgetCache.text} className="form-control"/>
                </>
            }
            {
                editingWidget.id !== widget.id &&
                <i onClick={() => setEditingWidget(widget)} className="fas fa-2x fa-cog float-right"/>
            }
            {
                (editingWidget.id !== widget.id) &&
                <p>
                    {widget.text}
                </p>
            }
        </>
    )
}

export default ParagraphWidget