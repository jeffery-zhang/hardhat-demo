// import { network } from "hardhat";

// const { viem } = await network.connect({
//   network: "hardhatOp",
//   chainType: "l1",
// });

// console.log("Sending transaction using the OP chain type");

// const publicClient = await viem.getPublicClient();
// const [senderClient] = await viem.getWalletClients();

// console.log("Sending 1 wei from", senderClient.account.address, "to itself");

// const l1Gas = await publicClient.estimateL1Gas({
//   account: senderClient.account.address,
//   to: senderClient.account.address,
//   value: 1n,
// });

// console.log("Estimated L1 gas:", l1Gas);

// console.log("Sending L2 transaction");
// const tx = await senderClient.sendTransaction({
//   to: senderClient.account.address,
//   value: 1n,
// });

// await publicClient.waitForTransactionReceipt({ hash: tx });

// console.log("Transaction sent successfully");

import { network } from "hardhat";

// 连接到Sepolia
const { viem } = await network.connect({
  network: "sepolia",
  chainType: "l1",
});

// 获取公共客户端
const publicClient = await viem.getPublicClient();

// 根据地址获取合约
const contract = await viem.getContractAt(
  "HelloWorld",
  "0x17e0581484fe2d3e21a6f751c87ec0d7b07cc615",
  {
    client: {
      public: publicClient,
    },
  }
);

console.log(contract);

const message1 = await contract.read.message();

console.log(message1);

await contract.read.update(["Hello, sepolia!"]);

const message2 = await contract.read.message();

console.log(message2);
