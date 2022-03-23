import React from "react"
class CounterComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props)
        const {count,increment,decrement}=this.props
        return(
            <div>
                <button onClick={increment}>+</button>
                <h1>{count}</h1>
                <button onClick={decrement}>-</button>
            </div>

        )
    }
}
export default CounterComponent