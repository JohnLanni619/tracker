export const resolvers = {
    Query: {
        sayHello: () => {
            return "Hello Level Up"
        },
        getPerson: () => [
            {
                name: "John",
                age: 28,
                job: "Web Developer"
            },
            {
                name: "Jace",
                age: 3,
                job: "Paleantologist"
            }
        ]
    }
}
