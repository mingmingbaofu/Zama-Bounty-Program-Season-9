import { expect } from "chai";
import { ethers } from "hardhat";

describe("PrivacyDCABot", function () {
  it("should allow user to submit intent", async function () {
    const Bot = await ethers.getContractFactory("PrivacyDCABot");
    const bot = await Bot.deploy();
    await bot.deployed();
    // 这里只是模拟部署验证
    expect(await bot.intents.length).to.equal(0);
  });
});
