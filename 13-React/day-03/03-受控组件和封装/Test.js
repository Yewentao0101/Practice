import React ,{Component} from 'react'

export default class Text extends Component{

    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <form>
                文本框：<input type='text' ref={this.textRef}></input>
                下拉框：<select ref={this.selRef}>
                            <option value="dcf">蛋炒饭</option>
                            <option value="nrm">牛肉面</option>
                            <option value="scy">酸菜鱼</option>
                        </select>
                </form>
            </div>
        )
    }
}
