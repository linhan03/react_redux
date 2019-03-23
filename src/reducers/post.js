const post= (state={list:[{id:'1',title:'time'}]}, action={})=>{
    switch (action.type) {
        case  'LOAD_POST':
            return {...state,list:action.payload}
        default:
            return state;
    }
}

export default post;