import React from 'react'

class FormTest extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value:'',
            areaValue:'textarea input value',
            selectValue:'',
            checked:true,
            number:2
        }
    }

    handleChange(e){
        this.setState({value:e.target.value})
    }
    handleSelect(e){
        this.setState({selectValue:e.target.value})
    }
    handleChangeArea(e){
        this.setState({areaValue:e.target.value})
    }

    handleInputChange(e){
        const target = e.target
        const value = target.type === 'checkbox'?target.checked:target.value
        const name = target.name

        this.setState({
            [name]:value
        })

    }

    handleSubmit(e){
        console.log(this.state,'submit')
        e.preventDefault()
    }

    render(){
        return (
            <div>
                form div
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>
                        Name: 
                        <input 
                            type='text' 
                            vlaue={this.state.value} 
                            onChange={this.handleChange.bind(this)} />
                    </label>
                    <br/>
                    <label>
                        TextArea: <textarea value={this.state.areaValue} onChange={this.handleChangeArea.bind(this)} />
                    </label>
                    <br/>
                    <label>
                        select fruit:
                        <select value={this.state.selectValue} onChange={this.handleSelect.bind(this)}>
                            <option value='grapefruit'>葡萄</option>
                            <option value='lime'>柠檬</option>
                            <option value="cocount">椰子</option>
                            <option value="mango">芒果</option>
                        </select>
                    </label>
                    <br/>
                    <label>
                        join in:
                        <input name='checked' type='checkbox' 
                            checked={this.state.checked} 
                            onChange={this.handleInputChange.bind(this)}
                        />
                    </label>
                    <br/>
                    <label>
                        Guest numbers：
                        <input name='number' type='number' 
                            value={this.state.number} onChange={this.handleInputChange.bind(this)}/>
                    </label>
                    <input type='submit' value='submit' />
                </form>
            </div>
        )
    }
}

export default FormTest