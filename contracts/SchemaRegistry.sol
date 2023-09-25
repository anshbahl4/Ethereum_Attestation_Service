// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SchemaRegistry {
    struct Schema {
        string schema;
        address resolverAddress;
        bool revocable;
    }

    mapping(bytes32 => Schema) public schemas;

    event SchemaRegistered(bytes32 indexed uid);

    function register(string memory _schema, address _resolverAddress, bool _revocable) external {
        bytes32 uid = keccak256(abi.encodePacked(_schema, _resolverAddress, _revocable));
        require(schemas[uid].resolverAddress == address(0), "Schema already registered");

        schemas[uid] = Schema(_schema, _resolverAddress, _revocable);
        emit SchemaRegistered(uid);
    }
}
