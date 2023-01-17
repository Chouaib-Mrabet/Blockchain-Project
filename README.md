# Blockchain Project : Lottery Dapp
## Project made by :

* Ali Achour
* Amal Missaoui
* Chouaib Mrabet
* Hamza Hmaidi
* Youssef Ajlani


This Lottery Dapp is built using Solidity with MetaMask authentication.


### Installation
- Create MetaMask Account
- Add Balance to your wallet :
    - We used the Mumbai test network (for this we used [Chainlist](https://chainlist.org/) you can use any other provider)
- Setup the [Thirdweb](https://thirdweb.com/) account using MetaMask 
    - thirdweb is a platform that provides a suite of tools for creators, artists and entrepreneurs to easily build, launch and manage a Web3 project. thirdweb enables users to add features such as NFTs, marketplaces and social tokens to their Web3 projects without writing a line of code.

- Deploy the smart contract found in `lottery-smart-contract` folder to [Thirdweb](https://thirdweb.com/) 

- Retrieve the "Address" from the App and paste it in `.env` file.

- Then Run the application :
```shell
# Add The public contract address that you get after deploying 
# the smart contract in the .env file :
cp .env.example .env
npm install && npm run dev
```

## You can find the Demo video here :

https://drive.google.com/drive/folders/1B5t2aOCnul9hU_Je6UsExZbCQYft18F5?fbclid=IwAR0inGMHdixEHvlQ3NAmbJr7ml1eNOSbI1d76BfNlCPU9h5-xXoAoZGd-Vw
