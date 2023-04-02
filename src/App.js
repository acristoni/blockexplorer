import { useState } from "react"
import './App.css';
import BlockContainerData from './components/BlockContainerData';
import TransactionDetail from './components/TransactionDetail'
import Header from './components/Header'

function App() {
  const [transactionDetails, setTransactionDetails] = useState(false)
  const [transactionHash, setTransactionHash] = useState('')

  return (
    <div style={{
      display: "flex",
      flexDirection: "column"
    }}>
      <Header />
      <main className="App">
        {
          transactionDetails ?
          <TransactionDetail 
            setTransactionDetails={setTransactionDetails}
            transactionHash={transactionHash}
          /> :
          <BlockContainerData 
            setTransactionDetails={setTransactionDetails}
            setTransactionHash={setTransactionHash}
          />
        } 
      </main>
    </div>
  )
}

export default App;