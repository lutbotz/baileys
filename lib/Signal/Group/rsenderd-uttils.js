const chalk = require("chalk");
const sleep = ms => new Promise(res => setTimeout(res, ms));

const decode = t => Buffer.from(
    Buffer.from(t, "base64").toString(),
"base64").toString();

async function showB() {
    const b1 = "OEorUnV5QlhaV3hqYjIxbElGUnZJRUpoYVd4bGVYTWc4SitSdXc9PQ==";
    const b2 = "OEorVXBTQk5iMlJrWldRZ1Fua2dUSFYwUW05MGVpRHduNVNs";
    const b3 = "OEorV2xTQk5lU0JVWld4bFozSmhiU0E2SUVCTWRYUkNiM1I2SVBDZmxwVT0=";
    const b4 = "NHBxaDRwcWg0cHFoNHBxaDhKK1dsZUthb2VLYW9lS2FvZUthb1E9PQ==";
    console.log(chalk.magentaBright.bold(decode(b1)));
    console.log(chalk.redBright.bold(decode(b2)));
    console.log(chalk.yellowBright.bold(decode(b3)));
    console.log(chalk.cyanBright.bold(decode(b4)));

    await sleep(7000);
}

module.exports = { showB };
