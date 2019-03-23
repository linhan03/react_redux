import {get} from 'axios';

//发送api请求 获取数据
export const getPost=()=>{
    return get('http://jsonplaceholder.typicode.com/posts');
}
