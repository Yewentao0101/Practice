import React ,{Component} from 'react'

export default class Text extends Component{
    state={
        text:'',
        textArea:'',
        lunch:'',
        checked:true,
    }
    
    handle = (e)=>{
        this.setState({
            text:e.target.value
        })
    }
    textAreaHandle = (e) =>{
        this.setState({
            textarea:e.target.value
        })
    }
    selectHandle = (e) =>{
        this.setState({
            lunch:e.target.value
        })
    }
    checkHandle = (e) =>{
        this.setState({
            lunch:e.target.checked
        })
    }

    render(){
        return(
            <div>
                <form>
                文本框：<input type='text' value={this.state.text} onChange={this.handle}></input>
                文本域：<textarea  value={this.state.textArea} onChange={this.textAreaHandle}></textarea>
                下拉框：<select value={this.state.lunch} onChange={this.selectHandle}>
                            <option value="dcf">蛋炒饭</option>
                            <option value="nrm">牛肉面</option>
                            <option value="scy">酸菜鱼</option>
                        </select>
                复选框：<input type="checkbox" checked={this.state.checkBOx} onChange={this.checkHandle}></input>
                </form>
            </div>
        )
    }
}