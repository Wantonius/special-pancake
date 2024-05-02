import { useState,useEffect } from 'react'
import Data from './data/data'
import MemoryCard from './components/MemoryCard'
import "./App.css"

function App() {
 
    //Cardlist: pelin alussa arvotaan muistikortit satunnaiseen järjestykseen
    //Firstcard: Ensimmäisenä klikattu kortti per kierros
    //Secondcard: Toisena klikattu kortti per kierros.
    //stopClick: Klikkaamisen esto, kun väärää arvausta näytetään 
    //moves: montako kierrosta on pelattu
    //corrent: Kun tämä on kuusi, pelaaja voittaa pelin

    const [state,setState] = useState({
      cardsList:[],
      firstCard:null,
      secondCard:null,
      stopClick:false,
      moves:0,
      correct:0
    })

    useEffect(() => {
      startNewGame()
    },[])


    //Arvotaan muistikorttien järjestys piirtämistä varten. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

    const startNewGame = () => {
      let tempList = Data.sort(() => 0.5 - Math.random())
      setState({
        cardsList:tempList,
        firstCard:null,
        secondCard:null,
        stopClick:false,
        moves:0,
        correct:0
    })
    }

    //Tämä funktio menee kaikille MemoryCard komponenteille. Tässä tarkastetaan, ettei paineta samaa korttia kahta kertaa ja että ensimmänen ja toinen klikattu kortti täyttyy

    const handleCards = (card) => {
      if(state.firstCard && state.firstCard.id !== card.id) {
        setState((state) => {
          return {
            ...state,
            secondCard:card
          }
        })
      } else {
        setState((state) => {
          return {
            ...state,
            firstCard:card
          }
        })      
      }
    }

    //Tämä useEffect triggeröityy, kun joku kortti valitaan klikkaamalla sitä. Kun sekä ensimmäinen, että toinen kortti on valittu verrataan niiden nimiä. Jos ne ovat samat, niin laitetaan molemmat matched:true eli ne eivät enää ole pelissä. 
    //Jos nimet ovat erit, käynnistetään timeout, joka kääntää kortit takasin näkymättömiin.

    useEffect(() => {
      if(state.firstCard && state.secondCard) {
        setState((state) => {
          return {
            ...state,
            stopClick:true
          }
        })
        if(state.firstCard.name === state.secondCard.name) {
          setState((state) => {
            let tempList = state.cardsList.map((card) => {
              if(card.name === state.firstCard.name) {
                return {
                  ...card,
                  matched:true
                }
              } else {
                return card;
              }
            })
            return {
              firstCard:null,
              secondCard:null,
              stopClick:false,
              cardsList:tempList,
              moves:state.moves+1,
              correct:state.correct+1
            }
          })
        } else {
          setTimeout(() => {
            setState((state) => {
              return {
                ...state,
                firstCard:null,
                secondCard:null,
                stopClick:false,
                moves:state.moves+1
              }
            })
          },1000)
        }
      }
    },[state.firstCard,state.secondCard])

    const cards = state.cardsList.map((card) => {
      return (
        <MemoryCard card={card} key={card.id} handleCards={handleCards} turned={card === state.firstCard || card === state.secondCard || card.matched === true} stopClick={state.stopClick}/>
      )
    })

    return (
      <div className="container">
        {cards}
      </div>
  )
}

export default App
