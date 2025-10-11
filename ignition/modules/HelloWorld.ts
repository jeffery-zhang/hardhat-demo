import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("HelloWorldModule", (m) => {
  // 第一个参数初始化合约, 第二个参数向构造函数传递参数
  const helloWorld = m.contract("HelloWorld", ["Hello, world!"]);

  return { helloWorld };
});
