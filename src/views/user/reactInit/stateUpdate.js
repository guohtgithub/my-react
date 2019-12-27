import React from 'react'

class BoilingVerdict extends React.Component{
    render(){
        let props = this.props
        if(props.celsius >= 100)
            return <p>The water would boil.</p>
        return <p>The water would not boil.</p>
    }
}

function toCelsius(fahrenheit){
    return (fahrenheit - 32) * 5 /9
}

function toFahrenheit(celsius){
    return (celsius * 9/5) + 32
}

function tryConvert(temperature,convert){
    const input = parseFloat(temperature)
    if(Number.isNaN(input)) return ''
    const output = convert(input)
    const rounded = Math.round(output * 1000) / 1000
    return rounded.toString()
}

const scaleNames = {
    c:'Celsius',
    f:'Fahrenheit'
}

class TemperatureInput extends React.Component{
    constructor(props){
        super(props)
        this.state = {temperature:''}
    }

    handleChange(e){
        console.log(e.target.value,'value')
        // this.setState({temperature:e.target.value})
        this.props.onTemperatureChange(e.target.value)
    }

    render(){
        // const temperature = this.state.temperature
        const temperatureProp = this.props.temperatureProp
        const scale = this.props.scale
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input type='number' value={temperatureProp} onChange={this.handleChange.bind(this)} />
                {/* <BoilingVerdict celsius={parseFloat(temperature)} /> */}
            </fieldset>
        )
    }
}

class StateUpdate extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            temperature:'',
            scale:'c'
        }
    }

    handleCelsiusChange(temperature){
        this.setState({scale:'c',temperature})
    }

    handleFahrenheitChange(temperature){
        this.setState({scale:'f',temperature})
    }

    render(){
        const scale = this.state.scale
        const temperature = this.state.temperature
        const celsius = scale === 'f'?tryConvert(temperature,toCelsius):temperature
        const fahrenheit = scale === 'c'?tryConvert(temperature,toFahrenheit):temperature
        return(
            <div>
                state update
                <TemperatureInput scale='c' temperatureProp={celsius} onTemperatureChange={this.handleCelsiusChange.bind(this)} />
                <TemperatureInput scale='f' temperatureProp={fahrenheit} onTemperatureChange={this.handleFahrenheitChange.bind(this)} />
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        )
    }
}

export default StateUpdate