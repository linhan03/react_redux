const counter =(state={data:0},action={})=>{
    switch (action.type) {
        case 'INCREMENT':
            if(state.data===5) return state;
            return {...state,data:state.data+1};
        case 'DECREMENT':
            if(state.data===0) return state;
            return {...state,data:state.data-1};
        default:return state;
    }
}

export default counter;