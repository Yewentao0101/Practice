import React from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import Test from './components/Test'

class App extends React.Component{
    render(){
    return (
        <div id='app'>
            <Header></Header>
            <Footer></Footer>
            <Test />
        </div>
        )
    }
}