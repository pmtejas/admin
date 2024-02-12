import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { connect } from 'mongoose'
import Home from '../models/Home.js'
const MongoDB = "mongodb+srv://thejaschintu:DmTsqfeowoNtTrEJ@cluster0.zma83ly.mongodb.net/?retryWrites=true&w=majority"
const typeDefs = `#graphql
type Home {
  logo: String
  tagline: String
  video: String
  BestActivitiesToTry: [Activity!]
  Destination: [Destination!]
  Ferries: [Ferry!]
  SightSeeings: [SightSeeing!]
  SocialMediaLinks: SocialMediaLinks
  TopBeaches: [TopBeach!]
  TopsellingPackages: [TopsellingPackage!]
}

# Define the nested types
type Activity {
  name: String
  description: String
  image: String
}
type Destination {
  name: String
  description: String
  image: String
}
type Ferry {
  name: String
  description: String
  image: String
  place: String
}
type SightSeeing {
  name: String
  description: String
  image: String
}
type SocialMediaLinks {
  Facebook: String
  Instagram: String
  Twitter: String
  Youtube: String
}
type TopBeach {
  name: String
  description: String
  image: String
  place: String
}
type TopsellingPackage {
  name: String
  description: String
  image: String
  price: String
}



# Define the HomeInput input type
input HomeInput {
  logo: String
  tagline: String
  video: String
  BestActivitiesToTry: [ActivityInput]
  Destination: [DestinationInput]
  Ferries: [FerryInput]
  SightSeeings: [SightSeeingInput]
  SocialMediaLinks: SocialMediaLinksInput
  TopBeaches: [TopBeachInput]
  TopsellingPackages: [TopsellingPackageInput]
}

# Define the nested input types
input ActivityInput {
  name: String
  description: String
  image: String
}
input DestinationInput {
  name: String
  description: String
  image: String
}
input FerryInput {
  name: String
  description: String
  image: String
  place: String
}
input SightSeeingInput {
  name: String
  description: String
  image: String
}
input SocialMediaLinksInput {
  Facebook: String
  Instagram: String
  Twitter: String
  Youtube: String
}
input TopBeachInput {
  name: String
  description: String
  image: String
  place: String
}
input TopsellingPackageInput {
  name: String
  description: String
  image: String
  price: String
}


  type Query {
  # Get a list of all homes
  homes: [Home!]!

# Get a single home by ID
home(id: ID!): Home 

  }

  type Mutation {
      # Create a new home with the given input
  createHome(homeInput: HomeInput!): Home!

# Update an existing home by ID with the given input
updateHome(id: ID!, homeInput: HomeInput!): Home!

# Delete an existing home by ID
deleteHome(id: ID!): Home!
  }


`
const resolvers = {
  Query: {
    homes: async () => {
      const homes = await Home.find()
      return homes
    },
    home: async (_, { id }) => {
      const home = await Home.findById(id)
      return home
    },
  },
  Mutation: {
    createHome: async (_, { homeInput }) => {
      const home = new Home(homeInput)
      await home.save()
      return home
    },
    updateHome: async (_, { id, homeInput }) => {
      const home = await Home.findByIdAndUpdate(id, homeInput, { new: true })
      return home
    },
    deleteHome: async (_, { id }) => {
      const home = await Home.findByIdAndDelete(id)
      return home
    },
  },
}
await connect(MongoDB)
const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const port = Number(process.env.PORT || 4000)

const { url } = await startStandaloneServer(server, {
  listen: { port: port },
})

console.log(`🚀  Server ready at: ${url}`)