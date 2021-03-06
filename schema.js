const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type User {
    _id: ID!
    name: String
    email: String
    phoneNumber: String
    password: String
    postcode: String
    streetAddress: String
    city: String
    distanceToTravel: Float
    profilePhoto: String
    shoppingListId: [ShoppingList]
    userType: String
    locationLatLng: [Float]
  }

  type ShoppingList {
    _id: ID
    orderStatus: String
    helpee: User
    volunteer: User
    listImage: String
    listText: [String]
    createdAt: String
    updatedAt: String
    volunteerComplete: Boolean
    helpeeComplete: Boolean
    distance: Float
  }

  input UserInput {
    name: String!
    email: String!
    phoneNumber: String!
    password: String!
    postcode: String!
    streetAddress: String
    city: String
    distanceToTravel: Float
    profilePhoto: String
    userType: String!
  }

  input ShoppingListInput {
      helpee: String!
      listImage: String
      listText: [String]
  }

  type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
  } 

  type RootQuery {
    users: [User!]
    userById(id: ID!): User!
    shoppingLists: [ShoppingList!]
    shoppingListById(id: ID!): ShoppingList!
    login(email: String!, password: String!): User!
    filterByDistance(target: ID!): [ShoppingList]
  }

  type RootMutation {
    createUser(userInput: UserInput!): User!
    createShoppingList(shoppingListInput: ShoppingListInput): ShoppingList!
    updateUser(id: ID!, userInput: UserInput!): User!
    updateShoppingList(listId: ID!, volunteerId: ID, volunteerComplete: Boolean, helpeeComplete: Boolean): ShoppingList!
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);

module.exports = schema;
