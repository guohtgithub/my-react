import React from 'react'

const ThemeContext = React.createContext('light')

class ThemedButton extends React.Component{
    // 指定 contextType 读取当前的 theme context。
    // React 会往上找到最近的 theme Provider，然后使用它的值。
    // 在这个例子中，当前的 theme 值为 “darkNight”。
    static contextType = ThemeContext;
    render(){
        return <button>{this.context}</button>
    }
}

class Toolbar extends React.Component{
    render(){
        return (
            <ThemedButton />
        )
    }
}


class HasContext extends React.Component{
    render(){
        return (
            <ThemeContext.Provider value='darkNight'>
                <Toolbar />
            </ThemeContext.Provider>
        )
    }
}

export default HasContext