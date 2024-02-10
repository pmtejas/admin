import { Schema,model } from "mongoose";
interface ITopsellingPackages{
    id?:String,
    name:String,
    price:Number,
    description:String,
    image:String
}
const TopsellingPackagesSchema=new Schema<ITopsellingPackages>({
    id:String,
    name:{type:String,required:true},
    price:{type:Number,required:true},
    description:{type:String,required:true},
    image:{type:String,required:true}
})
interface IBestActivitiesTotry{
    id?:String,
    name:String,
    image:String
    description:String
}
const BestActivitiesTotrySchema=new Schema<IBestActivitiesTotry>({
    id:String,
    name:{type:String,required:true},
    image:{type:String,required:true},
    description:{type:String,required:true}
})
interface IDestinations{
    id?:String,
    name:String,
    image:String
    description:String
}
const DestinationsSchema=new Schema<IDestinations>({
    id:String,
    name:{type:String,required:true},
    image:{type:String,required:true},
    description:{type:String,required:true}
})
interface ISightSeeings{
    id?:String,
    name:String,
    image:String,
    description:String
}
const SightSeeingsSchema=new Schema<ISightSeeings>({
    id:String,
    name:{type:String,required:true},
    image:{type:String,required:true},
    description:{type:String,required:true}
})
interface IFerries{
    id?:String,
    name:String,
    place:String,
    image:String,
    description:String
}
const FerriesSchema=new Schema<IFerries>({
    id:String,
    name:{type:String,required:true},
    place:{type:String,required:true},
    image:{type:String,required:true},
    description:{type:String,required:true}
})
interface ITopBeaches{
    id?:String,
    name:String,
    image:String,
    description:String
}
const TopBeachesSchema=new Schema<ITopBeaches>({
    id:String,
    name:{type:String,required:true},
    image:{type:String,required:true},
    description:{type:String,required:true}
})
interface SocialMediaLinks{
    id?:String,
    Twitter:String,
    Facebook:String,
    Instagram:String,
    Youtube:String
}
const SocialMediaLinksSchema=new Schema<SocialMediaLinks>({
    id:String,
    Twitter:{type:String,required:true},
    Facebook:{type:String,required:true},
    Instagram:{type:String,required:true},
    Youtube:{type:String,required:true}
})

interface IHome{
    id?:String,
    video:String,
    tagline:String,
    logo:String,
    TopsellingPackages:[ITopsellingPackages]
    BestActivitiesTotry:[IBestActivitiesTotry]
    Destinations:[IDestinations]
    SightSeeings:[ISightSeeings]
    Ferries:[IFerries]
    TopBeaches:[ITopBeaches]
    SocialMediaLinks:[SocialMediaLinks] 
}
const homeSchema=new Schema<IHome>({
    id:String,
    video:{type:String,required:true},
    tagline:{type:String,required:true},
    logo:{type:String,required:true},
    TopsellingPackages:[TopsellingPackagesSchema],
    BestActivitiesTotry:[BestActivitiesTotrySchema],
    Destinations:[DestinationsSchema],
    SightSeeings:[SightSeeingsSchema],
    Ferries:[FerriesSchema],
    TopBeaches:[TopBeachesSchema],
    SocialMediaLinks:[SocialMediaLinksSchema]
})

const Home=model <IHome>('Home',homeSchema);
export default Home;