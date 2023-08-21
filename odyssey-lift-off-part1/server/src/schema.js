const gql = require("graphql-tag");

const typeDefs = gql`

type Query {
    tracksForHome: [Track!]!
}


type Track {
    id: ID!
    author: Author!
    title: String!
    thumbnail: String
    length: Int
    modulesCount: Int
}

type Author {
    id: ID!
    name: String!
    photo: String
}

`;

module.exports = typeDefs;