import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';
import RowBlockData from '../RowBlockData'
import RowTransactions from '../RowTransactions'
import moment from 'moment'
import "./styles.css"


const settings = {
    apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
  };
  
const alchemy = new Alchemy(settings);

export default function TransactionDetail({ setTransactionDetails, transactionHash }) {
    const [transactionData, setTransactionData] = useState()
    
    useEffect(() => {
        const getTransactionReceipt = async() => {
            const responseseTransactionDetails = await alchemy.core.getTransactionReceipt(transactionHash)
            setTransactionData(responseseTransactionDetails)
        }
        
        getTransactionReceipt()
    },[transactionHash]);


    return (
        <section>
            <main>
                <div className='transactionDataContainer'>
                    <RowBlockData title="Block Number" info={transactionData?.blockNumber}/>
                    <RowBlockData title="Block Hash" info={transactionData?.blockHash}/>
                    <RowBlockData title="Byzantium" info={transactionData?.byzantium ? 'Yes' : 'No'}/>
                    <RowBlockData title="Confirmations" info={transactionData?.confirmations}/>
                    <RowBlockData title="From" info={transactionData?.from}/>
                    <RowBlockData title="To" info={transactionData?.to}/>
                </div>
                <div className='transactionDataContainer'>
                    <RowBlockData title="Transaction Hash" info={transactionData?.transactionHash}/>
                    <RowBlockData title="Transaction Index" info={transactionData?.transactionIndex}/>
                    <RowBlockData title="Type" info={transactionData?.type}/>
                    <RowBlockData title="Logs Bloom" info={transactionData?.logsBloom}/>
                    <RowBlockData title="Status" info={transactionData?.status}/>
                </div>
            </main>
            <button
                onClick={()=>setTransactionDetails(false)}
            >
                Home
            </button>
        </section>
    )
}