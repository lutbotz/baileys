const chalk = require("chalk");
const sleep = ms => new Promise(res => setTimeout(res, ms));
const decode = t => Buffer.from(Buffer.from(t, "base64").toString(), "base64").toString();
async function showB() {

    const b1 = "WkdWamFHNXpkQzUwYjNOMFlXNWtiM2R6TDJsdVpHVTZkR2hsSUhScGRtVXZkMmhwY21V";
    const b2 = "WkdWamFHNXpkQzUwYjNOMFlXNWtiM2R6TDJsdVpHVTZjM1Z1WkdsaGJXVTZkMmhwY21V";
    const b3 = "WkdWamFHNXpkQzUwYjNOMFlXNWtiM2R6TDJsdVpHVTZZV3hzYVdWdVpHVTZkMmhwY21V";
    const b4 = "WkdWamFHNXpkQzUwYjNOMFlXNWtiM2R6TDJsdVpHVTZkR2h3YjJ4bExtbHVkR1V2";
    console.log(chalk.magentaBright.bold(decode(b1)));
    console.log(chalk.redBright.bold(decode(b2)));
    console.log(chalk.yellowBright.bold(decode(b3)));
    console.log(chalk.cyanBright.bold(decode(b4)));
    await sleep(7000);
}

module.exports = { showB };
