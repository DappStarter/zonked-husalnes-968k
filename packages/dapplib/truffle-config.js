require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney kiwi onion skull drift reflect still history hockey industry fresh gift'; 
let testAccounts = [
"0x77912c506b31d195c4bc52944ec5a164accddf4503ed4f926f407c57e9873912",
"0xa6441541e19901eb01eeab76693935bc16151596dd5ab133454ab5a7d6708b60",
"0x73c7a942146be70ebb2739adf62e4610c426b37cead69c4db039188a83558dbf",
"0x974fe193b433067894f4afeadbf391f0ab1f27ff7112d1b8e9f4599f5dbd615e",
"0x2bd6b6f6e204b9d586b3951ea2d01079e92ad8645e9cd5b44123141029fb763e",
"0x54d4397b4ea695de160a6d1058313ba293aad115867a7a619b8b817030cd1950",
"0xb7e08bf41b1cb9c3b42df3d0e465ced3937811be9368fc4d075f957508b16d6e",
"0x7fa87174faba5837530dc1f727b87efbb7598a112625f829f6f5d6f0e54608c9",
"0xdf3fb123204f8d2342b4e75f30bdb0c6fc05a7e416dfd2cae2e2063586768d56",
"0x4a8d094fec4dee388b071dcae0b8cda982530d5f14df220f7a6b1201fcafb392"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


