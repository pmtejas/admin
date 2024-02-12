import { Schema,model } from "mongoose";
interface IHome{
    logo: string;
    tagline: string;
    video: string;
    BestActivitiesToTry: IActivity[];
    Destination: IDestination[];
    Ferries: IFerry[];
    SightSeeings: ISightSeeing[];
    SocialMediaLinks: ISocialMediaLinks
    TopBeaches: ITopBeach[];
    TopsellingPackages: ITopsellingPackage[]

}
interface IActivity{
    name: string;
    description: string;
    image: string;
}
interface IDestination{
    name: string;
    description: string;
    image: string;
}
interface IFerry{
    name: string;
    description: string;
    image: string;
    place: string;
}
interface ISightSeeing{
    name: string;
    description: string;
    image: string;
}
interface ISocialMediaLinks{
    Facebook: string;
    Instagram: string;
    Twitter: string;
    Youtube: string;
}
interface ITopBeach{
    name: string;
    description: string;
    image: string;
    place: string;
}
interface ITopsellingPackage{
    name: string;
    description: string;
    image: string;
    price: string;
}
const activitySchema=new Schema<IActivity>({
    name: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true}
});
const destinationSchema=new Schema<IDestination>({
    name: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true}
});
const ferrySchema=new Schema<IFerry>({
    name: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    place: {type: String, required: true}
});
const sightSeeingSchema=new Schema<ISightSeeing>({
    name: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true}
});
const socialMediaLinksSchema=new Schema<ISocialMediaLinks>({
    Facebook: {type: String},
    Instagram: {type: String},
    Twitter: {type: String},
    Youtube: {type: String}
});
const topBeachSchema=new Schema<ITopBeach>({
    name: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    place: {type: String, required: true}
});
const topsellingPackageSchema=new Schema<ITopsellingPackage>({
    name: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    price: {type: String, required: true}
});

const homeSchema=new Schema<IHome>({
    logo: {type: String},
    tagline: {type: String},
    video: {type: String},
    BestActivitiesToTry: {type: [activitySchema]},
    Destination: {type: [destinationSchema]},
    Ferries: {type: [ferrySchema]},
    SightSeeings: {type: [sightSeeingSchema]},
    SocialMediaLinks: {type: socialMediaLinksSchema},
    TopBeaches: {type: [topBeachSchema]},
    TopsellingPackages: {type: [topsellingPackageSchema]}
});
const Home=model <IHome>('Home',homeSchema);
export default Home;