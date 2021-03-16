/**
* @file MetaMask Custom RPC Adapter
* @version 0.1.0
* @summary FirstName LastName Year
* @license Apache-2.0
*/
import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Web3 from 'web3';

const MAX_SAFE_CHAIN_ID = 4503599627370476;
/**
function isSafeChainId(chainId) {
    return Number.isSafeInteger(chainId) && chainId > 0 && chainId <= MAX_SAFE_CHAIN_ID
  }
 */
// class EthereumConnector extends Component {
class BackboneConnector extends Component {

    constructor(props, context) {
        super()
}


/** 
* Connect using Custom RPC Endpoint
* @summary connectMainnetClickHandler
* @param {wallet_addEthereumChain} method eth_requestAccounts
*/
    connectMainnetClickHandler=() =>{
        if(window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            window.ethereum.request({method: 'eth_requestAccounts'})
            window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{chainId: '0x1',
                    chainName: "Ethereum Mainnet",
                    nativeCurrency: {
                        name: "ETH",
                        symbol: "ETH",
                        decimals: 18
                    },
                    rpcUrls: ['https://rpc.backbonecabal.net/eth/${projectId}'],
                    blockExplorerUrls: ['https://etherscan.io/']
                }]
            })
        }
    }

    connectTestnetClickHandler=() =>{
        if(window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            window.ethereum.request({method: 'eth_requestAccounts'})
            window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{chainId: '0x5',
                    chainName: "Goerli Testnet",
                    nativeCurrency: {
                        name: "ETH",
                        symbol: "ETH",
                        decimals: 18
                    },
                    rpcUrls: ['https://rpc.backbonecabal.net/goerli/${projectId}'],
                    blockExplorerUrls: ['https://goerli.etherscan.io/']
                }]
            })
        }
    }

    render() {
        return(
        <Container>
            <Row>
                <Col>
                    <h3>RPC Provider to connect to Ethereum Mainnet and Goerli Testnet</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="primary" onClick={()=>this.connectMainnetClickHandler()}>Connect to Ethereum Mainnet</Button> 
                </Col>
                <Col>
                    <Button variant="success" onClick={()=>this.connectTestnetClickHandler()}>Connect to Goerli Testnet</Button>
                </Col>
            </Row>
        </Container>
        )
    }

}

// export default EthereumConnector
export default BackboneConnector