import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';
import RowBlockData from '../RowBlockData'
import RowTransactions from '../RowTransactions'
import HeaderTitle from '../HeaderTitle'
import moment from 'moment'
import "./styles.css"

const settings = {
    apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
  };
  
const alchemy = new Alchemy(settings);

export default function BlockContainerData({ setTransactionDetails, setTransactionHash }) {
    const [blockData, setBlockData] = useState()
    const [blockTimeStamp, setBlockTimeStamp] = useState("") 
    
    useEffect(() => {
      if (blockData === undefined) {
        async function getBlockNumber() {
          setBlockData(await alchemy.core.getBlock());
        }
    
        getBlockNumber();
      }
  
      setBlockTimeStamp(moment.unix(blockData?.timestamp).format("MM/DD/YYYY"))
    },[blockData]);


    return (
        <main>
            <div className='blockDataContainer' style={{height: "270px"}}>
                <HeaderTitle text="Last Block" />
                <RowBlockData title="Block Number" info={blockData?.number}/>
                <RowBlockData title="Difficulty" info={blockData?.difficulty}/>
                <RowBlockData title="Block Hash" info={blockData?.hash}/>
                <RowBlockData title="Miner Address" info={blockData?.miner}/>
                <RowBlockData title="Nonce" info={isNaN(blockData?.nonce) ? 0 : parseInt(blockData?.nonce, 16)}/>
                <RowBlockData title="Parent Hash" info={blockData?.parentHash}/>
                <RowBlockData title="Timestamp" info={blockTimeStamp}/>
            </div>
            <div className='blockDataContainer'>
                <HeaderTitle text="Transanctions" />
                {
                blockData && blockData.transactions && blockData.transactions.length > 0 &&
                blockData.transactions.map(transactionHash => {
                    return (
                        <RowTransactions 
                            key={transactionHash}
                            transactionHash={transactionHash} 
                            setTransactionDetails={setTransactionDetails}
                            setTransactionHash={setTransactionHash}
                        />
                    )
                })
                }
            </div>
        </main>
    )
}