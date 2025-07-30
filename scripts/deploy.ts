// scripts/deploy.ts
import { ethers } from "hardhat";

async function main() {
  const Bot = await ethers.getContractFactory("PrivacyDCABot");
  const bot = await Bot.deploy();
  await bot.deployed();
  console.log("Bot deployed to:", bot.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
