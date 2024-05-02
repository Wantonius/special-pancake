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


    //Konditionaalinen renderöinti, jossa riippuen kortin tilasta kortti joko piirretään punainen puoli tai
    //kuvapuoli ylöspäin


    return (
        <div className="card">
            <div className={state.isOpen ? "turned":""}>
                <img src={cardback} className="back" onClick={turnCard} alt="back" />
                <div className="face">
                </div>
            </div>
        </div>
    )

}

export default MemoryCard