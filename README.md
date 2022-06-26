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
17. 17. deployedContract.deploy({
        data: bytecode,
        arguments: [listOfCandidates.map(name => web3.utils.asciiToHex(name))]
        }).send({
        from: '0xB7Ab5D890A061b61133EC75314490C2cc271118b',
        gas: 1500000,
        gasPrice: web3.utils.toWei('0.00003', 'ether')
        }).then((newContractInstance) => {
        deployedContract.options.address = newContractInstance.options.address
        console.log(newContractInstance.options.address)});

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
