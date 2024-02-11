export const typeDefs = `#graphql

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
`;
