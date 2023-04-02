import { Alchemy, Network } from 'alchemy-sdk';
import { PaperPlaneTilt } from "@phosphor-icons/react"
import "./style.css"

const settings = {
    apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
  };
  
const alchemy = new Alchemy(settings);

export default function RowTransactions({ transactionHash, setTransactionDetails, setTransactionHash }) {
    const handleTransactioDetail = async() => {
        // let response = await alchemy.core.getTransactionReceipt(transactionHash)
        setTransactionHash(transactionHash)
        setTransactionDetails(true)
    }
    return (
        <div 
            className="rowTransaction"
            onClick={handleTransactioDetail}
        >
            <PaperPlaneTilt size={20} />
            <span
                style={{
                    overflowX: "hidden"
                }}
            >{transactionHash}</span>
        </div>
    )
}