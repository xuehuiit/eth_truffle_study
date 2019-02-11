/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

//var HDWalletProvider = require("truffle-hdwallet-provider");
var HDWalletProvider = require("truffle-hdwallet-provider-privkey");

const privateKeys = ["d57f4fbffcc6fbeac1e51e3740a54a3acf35bb304507a1bc444ee62c29648789"]; //


module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*" // Match any network id
        },
        //测试通过私签名进行
        privatekey: {
            provider: function() {
                return new HDWalletProvider(privateKeys, "http://localhost:8545");
            },
            network_id: "*" // Match any network id

        }
    }

};