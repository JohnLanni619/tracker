import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
    type Person {
        name: String
        age: Int
        job: String
    }

    type Query {
        sayHello: String
        getPerson: [Person]!
    }
`;