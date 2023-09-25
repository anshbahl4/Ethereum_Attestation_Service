// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Resolver {
    // Mapping to store schema data by schema UID
    mapping(bytes32 => string) public schemas;

    // Event to log schema registration
    event SchemaRegistered(bytes32 indexed uid);

    // Function to register a schema
    function registerSchema(bytes32 uid, string memory schema) external {
        require(bytes(schemas[uid]).length == 0, "Schema already registered");
        schemas[uid] = schema;
        emit SchemaRegistered(uid);
    }

    // Function to get schema by UID
    function getSchema(bytes32 uid) external view returns (string memory) {
        return schemas[uid];
    }
}
