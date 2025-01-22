import { buildSchema } from "graphql";

const schema = buildSchema(`
type user{
_id:ID!
userName:String!
email:String!
password:String!
}

input inputUser{
userName:String!
email:String!
password:String!
}

input changeUser{
_id:ID!
userName:String!
email:String!
password:String!
}


type authData{
token:String!
userId:String!

}

type Query{
login(email:String!, password:String!):authData
}

type Mutation{
addUser(add:inputUser!):user
changeUsers(change:changeUser!):user
}


`);
export default schema;
