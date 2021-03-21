const initialState ={
    widgets:[
    ]
}

const widgetReducer =(state=initialState,action)=>{
    switch (action.type){
        case 'FIND_WIDGET':
            return {
                ...state,
                widgets:action.widgets
            }

        case 'CREATE_WIDGET':
            return {
                ...state,
                widgets:[
                    ...state.widgets,
                    action.widget
                ]
            }
        case 'DELETE_WIDGET':
            const newState1={
                widgets:state.widgets.filter(widget=>{
                    if(widget.id===action.widgetToDelete.id){
                        return false
                    }else{
                        return true
                    }
                })
            }
            return newState1

        case 'UPDATE_WIDGET':
            return{
                widgets:state.widgets.map(t=>{
                    if(t.id===action.widget.id){
                        return action.widget
                    }else{
                        return t
                    }
                })
            }

        default:
            return state

    }
}

export default widgetReducer