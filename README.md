## Description

PM2 module to monitor a Bitcoin node with Keymetrics

## Install

`pm2 install pm2-bitcoin`

## Requirements

This module requires a Bitcoin Daemon install (tested against v0.13.1.0).

### Bitnodes stats
To be able to monitor status via bitnodes.21.co, the node must first be activated manually at https://bitnodes.21.co/nodes/<ADDRESS>-<PORT>/.

## Configure

- `host` (Defaults to `localhost`) : Set the hostname/ip of your bitcoin node
- `network` (Defaults to `mainnet`): Set the network of your bitcoin node (mainnet, testnet, regtest)
- `username` (Defaults to `foo`): Set the username of your bitcoin node
- `password` (Defaults to `bar`): Set the password of your bitcoin node
- `nodeAddress` (Defaults to ``): Set the public bitcoin node ip address (to check stats with bitnodes.21.co)
- `nodePort` (Defaults to ``): Set the public bitcoin node port (to check stats with bitnodes.21.co)

#### How to set these values ?

 After having installed the module you have to type :
`pm2 set pm2-bitcoin:<key> <value>`

e.g: 
- `pm2 set pm2-bitcoin:host localhost` (set the bitcoin port to localhost)
- `pm2 set pm2-bitcoin:password keppo` (use `keppo` as password for your bitcoin node)

## Uninstall

`pm2 uninstall pm2-bitcoin`