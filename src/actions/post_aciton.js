import {getPost} from '../services/post_API';

export const loadPostAction= async (dispatch)=>{
    const res=await getPost();
    // console.log(res.data);
   return dispatch({
        type:'LOAD_POST',
        payload:res.data
    })
}
