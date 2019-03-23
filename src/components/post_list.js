import React,{Component} from 'react';
import {connect} from 'react-redux'

class post_list extends Component{
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        const {list}=this.props.post;
        const posts=list.map(post=>{
            return(
                <li key={post.id}>{post.title}</li>
            )
        })
        return (
            <div>
                <ul>
                    {posts}
                </ul>
            </div>
        );
    }
}

const mapStateToProps=(state,ownProps)=>{
    return{
        post:state.post
    }
}

const mapDispatchToProps=(state,ownProps)=>{

}
//通过connect连接组件和redux数据,传递state数据和dispatch方法
export default connect(mapStateToProps)(post_list);
