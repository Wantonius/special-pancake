import cardback from '../assets/cardback.png'

const MemoryCard = (props) => {

    const cardStyle = {
        height:200,
        width:144,
        margin:5
    }
    return (
        <div style={cardStyle}>
            <img src={cardback} height="200" width="144" />
        </div>
    )
}

export default MemoryCard