import cardback from '../assets/cardback.png'
import {useState,useEffect} from 'react'

const MemoryCard = (props) => {

    //Komponentin tila, joka määrää kummin päin kortti on 

    const [state,setState] = useState({
        isOpen:false
    })

    //Funktio, joka on kiinnitetty korttien (div) click eventtiin. Kääntää kortin oikein päin (punainen puoli ylös)

    const turnCard = (event) => {
        if(!state.isOpen) {
            setState({
                isOpen:true
            })
        }
    } 

    //UseEffect joka laukeaa, kun kortin tilaa muutetaan. Starttaa kahden sekunnin timeoutin, jos kortti on oikeinpäin. Timeout 
    //kutsuu funktiota turnBack, joka kääntää kortin takaisin väärinpäin (kuvapuoli ylös)

    useEffect(() => {
        if(state.isOpen) {
            setTimeout(turnBack,2000)
        }
    },[state.isOpen])

    //Kääntää kortin takaisin kuvapuoli ylös eli väärinpäin

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

    //Konditionaalinen renderöinti, jossa riippuen kortin tilasta kortti joko piirretään punainen puoli tai
    //kuvapuoli ylöspäin

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