const { gql } = require('apollo-server-express');
const path = require('path');
const fs  = require('fs');

const schemaText = fs.readFileSync(path.resolve(__dirname, 'schema.graphql')); 

const typeDefs = gql`${schemaText}`;

module.exports = { typeDefs };

