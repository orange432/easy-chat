import { buildSchema } from 'graphql';
import {graphqlHTTP} from 'express-graphql';

const schema = buildSchema(`
  type Query{
    test: Boolean!
  }
  type Mutation{
    GenerateChatId: String!
  }
`)

const root = {
  Query: {
    test: ()=>(true),
  },
  Mutation: {
    GenerateChatId: ()=>{
      
    }
  }
  
}

const APIRouter = graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
})

export { root }
export default APIRouter