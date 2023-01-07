require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remain snake hope area olympic gasp'; 
let testAccounts = [
"0xdc928d4912136e140f8b029c02a219a7e4f8fd79880d19186bc6b43e7d958ca8",
"0xc298cc2e8491e5b347e56c40982ce73a3aff44d8987bed896b89141d0199ca8b",
"0x4fcaacaf135687f42a8e8b426ac604c46bce2e4c3f26aee097dda965f251b5f3",
"0x77697167fbee57bf9559583d6ea39e364a4a2bdc8a5dce391590595b4f4f5799",
"0x7b7f1f23e570ce9612aa14bb9d74cb4c0f25a7c04cecef188670ff07aa19101a",
"0x534e4ac6567e1e4fdae592ee6e22106cf71d7be981a567b833846c737c84e60b",
"0x8e26606b0c753679582beea4dc4b71bde163fb8a13b40d9abfa495d4a69bb632",
"0x9ffc5526abd7a44a2eba4b2e06f70b78496e504ac3e0eeb472f2e084a796e97e",
"0x7942578faa72c30e4c3e9694686b3a828a67f465cb15e80363d39af025ae7ca8",
"0xe3e2e938c8959d113980b09375ba6b64675970f262195a3cc8fe155e567dae83"
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


