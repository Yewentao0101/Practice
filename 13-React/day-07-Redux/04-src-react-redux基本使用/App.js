import React,{Component} from 'react'
import {Provider} from 'react-redux'

import Count from './Count'
import Demo from './Demo'

import store from './redux/store'

export default class App extends Component{
    render(){
        return(
            <Provider store={store}>
                <Count></Count>
                <Demo></Demo>
            </Provider>
        ) 

    }
}