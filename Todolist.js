import React, {Component,Fragment} from 'react';

class Todolist extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue :'hello',
            list:[]
        }
    }
        /* input里的方法 */
        handleInputChange(e){
            /* 改变数据，文本框里能输入 */
            this.setState({
                inputValue:e.target.value
            })
        }

    render(){
        return(
            <Fragment>{
                /* bind指this指向当前 */}
                <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
                
            </Fragment>
        );
    }
}

export default Todolist;

