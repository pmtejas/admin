import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import {connect} from 'mongoose'


import Home from '../models/Home.js'
const MongoDB="mongodb+srv://thejaschintu:DmTsqfeowoNtTrEJ@cluster0.zma83ly.mongodb.net/?retryWrites=true&w=majority"

const typeDefs = `#graphql

  type TopsellingPackages{
    _id:String
    name:String
    price:Int
    description:String
    image:String
  }
  input TopsellingPackagesInput{
    name:String
    price:Int
    description:String
    image:String
  }
  type BestActivitiesToTry{
    _id:String
    name:String
    description:String
    image:String
  }
  input BestActivitiesToTryInput{
    name:String
    description:String
    image:String
  }
  type Destinations{
    _id:String
    name:String
    description:String
    image:String
  }
  input DestinationsInput{
    name:String
    description:String
    image:String
  }
  type SightSeeings{
    _id:String
    name:String
    description:String
    image:String
  }
  input SightSeeingsInput{
    name:String
    description:String
    image:String
  }
  type Ferries{
    _id:String
    name:String
    place:String
    image:String
    description:String
  }
  input FerriesInput{
    name:String
    place:String
    image:String
    description:String
  }
  type TopBeaches{
    _id:String
    name:String
    place:String
    image:String
    description:String
  }
  input TopBeachesInput{
    name:String
    place:String
    image:String
    description:String
  }
  type SocialMediaLinks{
    _id:String
    Twitter:String
    Facebook:String
    Instagram:String
    Youtube:String
  }
  input SocialMediaLinksInput{
    Twitter:String
    Facebook:String
    Instagram:String
    Youtube:String
  }

  type Home{
    _id:String
    video:String
    tagline:String
    logo:String
    TopsellingPackages:[TopsellingPackages]
    BestActivitiesToTry:[BestActivitiesToTry]
    Destinations:[Destinations]
    SightSeeings:[SightSeeings]
    Ferries:[Ferries]
    TopBeaches:[TopBeaches]
    SocialMediaLinks:SocialMediaLinks
  }

  input HomeInput{
    video:String
    tagline:String
    logo:String
    TopsellingPackages:[TopsellingPackagesInput]
    BestActivitiesToTry:[BestActivitiesToTryInput]
    Destinations:[DestinationsInput]
    SightSeeings:[SightSeeingsInput]
    Ferries:[FerriesInput]
    TopBeaches:[TopBeachesInput]
    SocialMediaLinks:SocialMediaLinksInput

  }

  
    type Query {
        getTopsellingPackage(ID:String): TopsellingPackages
        getTopsellingPackages(limit:Int): [TopsellingPackages]
        getBestActivityToTry(ID:String): BestActivitiesToTry
        getBestActivitiesToTry(limit:Int): [BestActivitiesToTry]
        getDestination(ID:String): Destinations
        getDestinations(limit:Int): [Destinations]
        getSightSeeing(ID:String): SightSeeings
        getSightSeeings(limit:Int): [SightSeeings]
        getFerry(ID:String): Ferries
        getFerries(limit:Int): [Ferries]
        getTopBeach(ID:String): TopBeaches
        getTopBeaches(limit:Int): [TopBeaches]
        getSocialMediaLinks(ID:String): SocialMediaLinks

        getHome(ID:String): Home

    }
    type Mutation {
        createTopsellingPackages(TopsellingPackagesInput:TopsellingPackagesInput): String
        updateTopsellingPackages(ID:String,TopsellingPackagesInput:TopsellingPackagesInput): String
        deleteTopsellingPackages(ID:String): String
        createBestActivitiesToTry(BestActivitiesToTryInput:BestActivitiesToTryInput): String
        updateBestActivitiesToTry(ID:String,BestActivitiesToTryInput:BestActivitiesToTryInput): String
        deleteBestActivitiesToTry(ID:String): String
        createDestination(DestinationsInput:DestinationsInput): String
        updateDestination(ID:String,DestinationsInput:DestinationsInput): String
        deleteDestination(ID:String): String
        createSightSeeing(SightSeeingsInput:SightSeeingsInput): String
        updateSightSeeing(ID:String,SightSeeingsInput:SightSeeingsInput): String
        deleteSightSeeing(ID:String): String
        createFerry(FerriesInput:FerriesInput): String
        updateFerry(ID:String,FerriesInput:FerriesInput): String
        deleteFerry(ID:String): String
        createTopBeach(TopBeachesInput:TopBeachesInput): String
        updateTopBeach(ID:String,TopBeachesInput:TopBeachesInput): String
        deleteTopBeach(ID:String): String
        createSocialMediaLinks(SocialMediaLinksInput:SocialMediaLinksInput): String
        updateSocialMediaLinks(ID:String,SocialMediaLinksInput:SocialMediaLinksInput): String
        deleteSocialMediaLinks(ID:String): String
        createHome(homeInput:HomeInput): String
        updateHome(ID:String,homeInput:HomeInput): String
        deleteHome(ID:String): String

    }
`
const resolvers = {
  Query: {
      async getTopsellingPackage(_,{ID}){
        return await Home.findById(ID)
      },
      async getTopsellingPackages(_,{limit}){
        return await Home.find().limit(limit)
      },
      async getBestActivityToTry(_,{ID}){
        return await Home.findById(ID)
      },
      async getBestActivitiesToTry(_,{limit}){
        return await Home.find().limit(limit)
      },
      async getDestination(_,{ID}){
        return await Home.findById(ID)
      },
      async getDestinations(_,{limit}){
        return await Home.find().limit(limit)
      },
      async getSightSeeing(_,{ID}){
        return await Home.findById(ID)
      },
      async getSightSeeings(_,{limit}){
        return await Home.find().limit(limit)
      },
      async getFerry(_,{ID}){
        return await Home.findById(ID)
      }
      ,
      async getFerries(_,{limit}){
        return await Home.find().limit(limit)
      },
      async getTopBeach(_,{ID}){
        return await Home.findById(ID)
      },
      async getTopBeaches(_,{limit}){
        return await Home.find().limit(limit)
      },
      async getSocialMediaLinks(_,{ID}){
        return await Home.findById(ID)
      },
      async getHome(_,{ID}){
        return await Home.findById(ID)
      },
  },
  Mutation: {
      async createTopsellingPackages(_,{TopsellingPackagesInput:{name,price,description,image}}){
        const res=await new Home({TopsellingPackages:[{name,price,description,image}]}).save()
        return res._id
      },
      async updateTopsellingPackages(_,{ID,TopsellingPackagesInput:{name,price,description,image}}){
        await Home.updateOne({_id:ID},{$set:{TopsellingPackages:[{name,price,description,image}]}})
        return ID
      },
      async deleteTopsellingPackages(_,{ID}){
        await Home.findByIdAndRemove
        return ID
      },
      async createBestActivitiesToTry(_,{BestActivitiesToTryInput:{name,description,image}}){
        const res=await new Home({BestActivitiesToTry:[{name,description,image}]}).save()
        return res._id
      },
      async updateBestActivitiesToTry(_,{ID,BestActivitiesToTryInput:{name,description,image}}){
        await Home.updateOne({_id:ID},{$set:{BestActivitiesToTry:[{name,description,image}]}})
        return ID
      },
      async deleteBestActivitiesToTry(_,{ID}){
        await Home.findByIdAndRemove
        return ID
      },
      async createDestination(_,{DestinationsInput:{name,description,image}}){
        const res=await new Home({Destinations:[{name,description,image}]}).save()
        return res._id
      },
      async updateDestination(_,{ID,DestinationsInput:{name,description,image}}){
        await Home.updateOne({_id:ID},{$set:{Destinations:[{name,description,image}]}})
        return ID
      },
      async deleteDestination(_,{ID}){
        await Home.findByIdAndRemove
        return ID
      },
      async createSightSeeing(_,{SightSeeingsInput:{name,description,image}}){
        const res=await new Home({SightSeeings:[{name,description,image}]}).save()
        return res._id
      },
      async updateSightSeeing(_,{ID,SightSeeingsInput:{name,description,image}}){
        await Home.updateOne({_id:ID},{$set:{SightSeeings:[{name,description,image}]}})
        return ID
      },
      async deleteSightSeeing(_,{ID}){
        await Home.findByIdAndRemove
        return ID
      },
      async createFerry(_,{FerriesInput:{name,place,image,description}}){
        const res=await new Home({Ferries:[{name,place,image,description}]}).save()
        return res._id
      },
      async updateFerry(_,{ID,FerriesInput:{name,place,image,description}}){
        await Home.updateOne({_id:ID},{$set:{Ferries:[{name,place,image,description}]}})
        return ID
      },
      async deleteFerry(_,{ID}){
        await Home.findByIdAndRemove
        return ID
      },
      async createTopBeach(_,{TopBeachesInput:{name,place,image,description}}){
        const res=await new Home({TopBeaches:[{name,place,image,description}]}).save()
        return res._id
      },
      async updateTopBeach(_,{ID,TopBeachesInput:{name,place,image,description}}){
        await Home.updateOne({_id:ID},{$set:{TopBeaches:[{name,place,image,description}]}})
        return ID
      },
      async deleteTopBeach(_,{ID}){
        await Home.findByIdAndRemove
        return ID
      },
      async createSocialMediaLinks(_,{SocialMediaLinksInput:{Twitter,Facebook,Instagram,LinkedIn}}){
        const res=await new Home({SocialMediaLinks:{Twitter,Facebook,Instagram,LinkedIn}}).save()
        return res._id
      },
      async updateSocialMediaLinks(_,{ID,SocialMediaLinksInput:{Twitter,Facebook,Instagram,LinkedIn}}){
        await Home.updateOne({_id:ID},{$set:{SocialMediaLinks:{Twitter,Facebook,Instagram,LinkedIn}}})
        return ID
      },
      async deleteSocialMediaLinks(_,{ID}){
        await Home.findByIdAndRemove
        return ID
      },
      async createHome(_,{homeInput:{video,tagline,logo,TopsellingPackages,BestActivitiesToTry,Destinations,SightSeeings,Ferries,TopBeaches,SocialMediaLinks}}){
        const res=await new Home({video,tagline,logo,TopsellingPackages,BestActivitiesToTry,Destinations,SightSeeings,Ferries,TopBeaches,SocialMediaLinks}).save()
        return res._id
      },
      async updateHome(_,{ID,homeInput:{video,tagline,logo,TopsellingPackages,BestActivitiesToTry,Destinations,SightSeeings,Ferries,TopBeaches,SocialMediaLinks}}){
        await Home.updateOne({_id:ID},{$set:{video,tagline,logo,TopsellingPackages,BestActivitiesToTry,Destinations,SightSeeings,Ferries,TopBeaches,SocialMediaLinks}})
        return ID
      },
      async deleteHome(_,{ID}){
        await Home.findByIdAndRemove
        return ID
      },
  },
}
await connect(MongoDB)
const server = new ApolloServer({
    typeDefs,
    resolvers,
  })

  const port=Number(process.env.PORT || 4000)
  const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
  
  console.log(`🚀  Server ready at: ${url}`)