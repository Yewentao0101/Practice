import React from 'react'
export default function withFrom(WrappedComponent){

    return class extends React.Component{
        static displayName = 'with' + WrappedComponent.name
        state = {
            username:'',
            password:'',
            repassword:'',
        }

        handle = (name)=>(e) =>{
            this.setState({
                [name] :e.target.value
            })
        }
        render(){
            return < WrappedComponent {...this.state} handle = {this.handle}{...this.props}/>
        }
    }
}
