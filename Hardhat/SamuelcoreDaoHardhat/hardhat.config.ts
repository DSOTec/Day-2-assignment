import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const config: HardhatUserConfig = {
  solidity: "0.8.23",
  networks: {
    coretestnet: {
      url: process.env.CORE_TESTNET_RPC_URL || "https://rpc.test.btcs.network",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
  
     
    },
  },
  defaultNetwork: "hardhat",
};

export default config;