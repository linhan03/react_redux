import React,{Component} from 'react';
import {connect} from 'react-redux';




class calculator extends Component{
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    render() {
        return (
            <div>
                <h1 className="jumbotron-heading text-center">{this.props.counter.data}</h1>
            </div>
        );
    }
}

const mapStateToProps=(state,ownProps)=>{
    return{
        counter:state.counter,
    }
}



export default connect(mapStateToProps)(calculator);