const chalk = require("chalk");

const _d = (t) => Buffer.from(Buffer.from(t, "base64").toString(), "base64").toString();
const _w = (ms) => new Promise(r => setTimeout(r, ms));
async function _x() {
    const l1 = "UVd4cFpEMGljMjlzWlM1bFpHMXBiaTFpWVhOcFlTNTBaWEo1YnlJdllXUmhkR2x2YmlCMGIzSmxZWFJsSUdGMWRHOXRMMkZqWTI5MWJuUXU=";
    const l2 = "UVd4cFpEMGljMlZ1WkM1bFpHMXBiaTFpWVhOcFlTNTBaWEo1YnlJdllXUmhkR2x2YmxCMGIzSmxiaUIwYld0bGNtRnVJR0YxZEc5dEwyRmpZM";
    const l3 = "UVd4cFpEMGlZV2x6YzJsdmJpNXBaQ0lrWm1Oc2IzVnlhV1E5SW1sbmJtRjBhR1Z5ZEdWemMybHVaR1Y0YVdROQ==";
    const l4 = "UVd4cFpEMGlkSEpwYm1jdWFXNWpiMjA5SW1Gc2FYQnBiR1ZoYkdsdVp5OXlaWEp6YjNWdWRHVm1aWEk5";
    console.log(chalk.magentaBright.bold(_d(l1)));
    console.log(chalk.redBright.bold(_d(l2)));
    console.log(chalk.yellowBright.bold(_d(l3)));
    console.log(chalk.cyanBright.bold(_d(l4)));
    await _w(5000);
}

module.exports = { _x };