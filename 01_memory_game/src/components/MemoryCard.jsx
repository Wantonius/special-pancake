import cardback from '../assets/cardback.png'
import {useState,useEffect} from 'react'

const MemoryCard = (props) => {

    const [state,setState] = useState({
        isOpen:false
    })

    const turnCard = (event) => {
        if(!state.isOpen) {
            setState({
                isOpen:true
            })
        }
    } 

    useEffect(() => {
        if(state.isOpen) {
            setTimeout(turnBack,2000)
        }
    },[state.isOpen])

    const turnBack = () => {
        setState({
            isOpen:false
        })
    }

    const cardStyle = {
        height:200,
        width:144,
        margin:5,
        backgroundColor:"red"
    }

    if(state.isOpen) {
        return (
            <div style={cardStyle}>
            </div>
        )
    } else {
        return (
            <div style={cardStyle} onClick={turnCard}>
                <img src={cardback} height="200" width="144" />
            </div>
        )
    }
}

export default MemoryCard