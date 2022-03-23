import {connect} from "react-redux"
import { increment,decrement } from "../actions"
import CounterComponent from "../Components/CounterComponent"
const mapStateToProps=(state)=>{
    return{
        count:state
    }
}
const mapDispatchToProps=(dispatch)=>{
return{
    increment:()=>dispatch(increment()),
    decrement:()=>dispatch(decrement())
}
}
export default connect(mapStateToProps,mapDispatchToProps)(CounterComponent)