Execute the following Commands to run DEVA on your system.

1. npm -v
2. node -v
3. npm install ganache-cli web3@1.2.6
4. .\node_modules\.bin\ganache-cli
   Now, one Terminal will be busy running Ganache-CLI. Open new Terminal Window and Run
   Following Commands.
5. Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
6. npm install -g http-server
7. npm install solc@0.6.4
8. .\node_modules\.bin\solcjs --bin --abi Voting.sol
9. start node
   Node
10. Web3 = require('web3')
11. web3 = new Web3("http://localhost:8545")
12. web3.eth.getAccounts(console.log)
13. bytecode = fs.readFileSync('Voting_sol_Voting.bin').toString()
14. abi = JSON.parse(fs.readFileSync('Voting_sol_Voting.abi').toString())
15. deployedContract = new web3.eth.Contract(abi)
16. listOfCandidates = ['Pavitra','Gyaneshwari','Shashwat']
17. deployedContract.deploy({
    data: bytecode,
    arguments: [listOfCandidates.map(name => web3.utils.asciiToHex(name))]
    }).send({
    from: '0x57c4a5b6D3339Bd96a6CF5a83a9Ce7Cd8d37b5c9',
    gas: 1500000,
    gasPrice: web3.utils.toWei('0.00003', 'ether')
    }).then((newContractInstance) => {
    deployedContract.options.address = newContractInstance.options.address
    console.log(newContractInstance.options.address)});
