# DrugMonitoringSystem 🏥💊

Smart Contract based Drug-Health Monitoring System for finding counterfeit drugs.

## Tech Stack 💻

- **Blockchain**: Ethereum and Solidity
- **Frontend**: React.js and Ethers.js

## How to Run ▶️

1. Compile and Run `supplychain.sol` in Remix IDE and deploy it in a MetaMask environment.
2. Once it is deployed, get the contract address from the deployed instance.
3. To save Drug Status or set products, workers, or other data, you can use the UI provided in the IDE to execute any transactions.

### Client/Frontend 🖥️

1. Navigate to the `client` folder and run `npm install`.
2. Go to the `components` folder and change the contract address in four files.
   It should look like this:
   ```javascript
   const ContractAddress = '<your_contract_address>';
3. Now you can run the command npm start.
4. Your app is running on port 3000.

## Contributing 🤝

Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to follow the contribution guidelines.

## License 📝

This project is licensed under the MIT License - see the (LICENSE) file for details.
