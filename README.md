# Simple Decentralized E Voting Application (D.E.V.A)

This is a decentralized e-voting application built on the Ethereum blockchain. It allows for secure and transparent voting using smart contracts.

## Overview

The Decentralized E Voting Application is designed to provide a reliable and tamper-proof platform for conducting elections. By leveraging the power of blockchain technology, it ensures transparency, immutability, and integrity throughout the voting process.

## Features

- **Secure Voting**: The application utilizes blockchain technology to ensure the security of votes. Each vote is recorded on the Ethereum blockchain, making it nearly impossible to alter or manipulate the results.
- **Transparent Process**: The voting process is transparent, as all transactions are visible on the blockchain. Anyone can verify the integrity of the election by examining the smart contract and the recorded votes.
- **Candidate Information**: The application provides information about the candidates participating in the election. Users can access candidate profiles and make informed decisions before casting their votes.
- **Real-Time Results**: The application displays real-time voting results, allowing participants and observers to track the progress of the election. Results are updated as votes are cast and recorded on the blockchain.
- **User-Friendly Interface**: The application offers a user-friendly interface, making it easy for voters to participate in the election. The intuitive design ensures a smooth and hassle-free voting experience.

## Technologies Used

- **Solidity**: Solidity is the programming language used to write the smart contract that governs the voting process on the Ethereum blockchain.
- **Ethereum**: The application leverages the Ethereum blockchain to store and validate votes, ensuring security and transparency.
- **React**: React is used to build the frontend user interface, providing an interactive and responsive experience for voters.
- **Web3.js**: Web3.js is a JavaScript library that interacts with the Ethereum blockchain. It is used to connect the frontend with the smart contract and handle transactions.

## Getting Started

Follow these steps to get the Decentralized E Voting Application up and running on your local machine:

1. Clone the repository: `git clone https://github.com/ssharmapavitra/deva.git`

2. Install dependencies: `npm install`

3. npm -v

4. node -v

5. npm install ganache-cli web3@1.2.6

6. .\node_modules\.bin\ganache-cli

   Now, one Terminal will be busy running Ganache-CLI. Open new Terminal Window and Run
   Following Commands.
   
7. Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
 
8. npm install -g http-server

9. npm install solc@0.6.4

10. .\node_modules\.bin\solcjs --bin --abi Voting.sol

11. start node

   Node
   
12. Web3 = require('web3')

13. web3 = new Web3("http://localhost:8545")

14. web3.eth.getAccounts(console.log)

15. bytecode = fs.readFileSync('Voting_sol_Voting.bin').toString()

16. abi = JSON.parse(fs.readFileSync('Voting_sol_Voting.abi').toString())

17. deployedContract = new web3.eth.Contract(abi)

18. listOfCandidates = ['cand1','cand2','cand3']

19. deployedContract.deploy({
    data: bytecode,
    arguments: [listOfCandidates.map(name => web3.utils.asciiToHex(name))]
    }).send({
    from: '0x57c4a5b6D3339Bd96a6CF5a83a9Ce7Cd8d37b5c9',  // address to be added in web3js
    gas: 1500000,
    gasPrice: web3.utils.toWei('0.00003', 'ether')
    }).then((newContractInstance) => {
    deployedContract.options.address = newContractInstance.options.address
    console.log(newContractInstance.options.address)});

## Usage

1. Open the application in your web browser.
2. Browse the candidate profiles and read their information.
3. Select your preferred candidate from the list.
4. Click the "Vote" button to cast your vote.
5. Monitor the real-time results to see the updated vote count for each candidate.
6. At the end of the election, view the final poll results.
7. Optionally, start a new poll by clicking the "New Poll" button.

## Contribution

Contributions to the Decentralized E Voting Application are welcome. If you encounter any issues or have suggestions for improvements, please submit a pull request or open an issue on the GitHub repository.
