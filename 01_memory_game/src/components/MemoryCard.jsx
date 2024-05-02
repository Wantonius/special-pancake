import cardback from '../assets/cardback.png'

const MemoryCard = (props) => {

    const turnCard = (event) => {
        if(props.stopClick) {
            return;
        }
        props.handleCards(props.card);
    }

    return (
        <div className="card">
            <div className={props.turned ? "turned":""}>
                <img src={cardback} className="back" onClick={turnCard} alt="back" />
                <img src={props.card.img} className="face" alt="face"/>
            </div>
        </div>
    )

}

export default MemoryCard