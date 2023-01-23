import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'
import colors from './json/colors.json'

function App() {

  const randomElementFromArray = arr => {
    arr.length
    const indexRandom = Math.floor(Math.random() * arr.length) // esta funcion returna un elemento aleatorio de un arreglo establecido
    return arr[indexRandom]
  }

  const [quotesRandom, setQuotesRandom] = useState(randomElementFromArray(quotes))
  const [colorRandom, setcolorRandom] = useState(randomElementFromArray(colors))

  const handleCLick = () => {
    setQuotesRandom(randomElementFromArray(quotes))
    setcolorRandom(randomElementFromArray(colors))
  }

  return (
    <div style={{backgroundColor: colorRandom}} className="App">
      <QuoteBox 
        quoteRandom={quotesRandom} 
        handleCLick={handleCLick}
        colorRandom={colorRandom}
      />
    </div>
  )
}

export default App
