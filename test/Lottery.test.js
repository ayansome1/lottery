const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compile = require('../compile');
const interface = compile.contracts['Lottery.sol'].Lottery.abi;
const bytecode = compile.contracts['Lottery.sol'].Lottery.evm.bytecode.object;

let lottery, accounts;
// let accounts;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  lottery = await new web3.eth.Contract(interface).deploy({ data: bytecode }).send({ from: accounts[0], gas: '1000000'})
});


describe('Lottery contract', () => {
  it('deploys a conntract', () => {
    assert.ok(lottery.options.address);
  })
})















// let accounts, inbox;
// const INITIAL_STRING = 'hi there';

// beforeEach(async () => {
//   // async function
//   accounts = await web3.eth.getAccounts();
//   inbox = await new web3.eth.Contract(interface)
//     .deploy({
//       data: bytecode,
//       arguments: [INITIAL_STRING],
//     })
//     .send({ from: accounts[0], gas: '1000000' });
// });

// describe('Inbox', () => {
//   it('deploys a contract', () => {
//     // console.log(inbox.options.address);
//     assert.ok(inbox.options.address);
//   });

//   it('has a default message', async () => {
//     const message = await inbox.methods.message().call();
//     assert.strictEqual(message, INITIAL_STRING);
//   });

//   it('can change the message', async () => {
//     await inbox.methods.setMessage('bye').send({ from: accounts[0] });
//     const message = await inbox.methods.message().call();
//     assert.strictEqual(message, 'bye');
//   });
// });
