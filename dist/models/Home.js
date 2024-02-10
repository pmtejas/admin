import { Schema, model } from "mongoose";
const TopsellingPackagesSchema = new Schema({
    id: String,
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }
});
const BestActivitiesTotrySchema = new Schema({
    id: String,
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true }
});
const DestinationsSchema = new Schema({
    id: String,
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true }
});
const SightSeeingsSchema = new Schema({
    id: String,
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true }
});
const FerriesSchema = new Schema({
    id: String,
    name: { type: String, required: true },
    place: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true }
});
const TopBeachesSchema = new Schema({
    id: String,
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true }
});
const SocialMediaLinksSchema = new Schema({
    id: String,
    Twitter: { type: String, required: true },
    Facebook: { type: String, required: true },
    Instagram: { type: String, required: true },
    Youtube: { type: String, required: true }
});
const homeSchema = new Schema({
    id: String,
    video: { type: String, required: true },
    tagline: { type: String, required: true },
    logo: { type: String, required: true },
    TopsellingPackages: [TopsellingPackagesSchema],
    BestActivitiesTotry: [BestActivitiesTotrySchema],
    Destinations: [DestinationsSchema],
    SightSeeings: [SightSeeingsSchema],
    Ferries: [FerriesSchema],
    TopBeaches: [TopBeachesSchema],
    SocialMediaLinks: [SocialMediaLinksSchema]
});
const Home = model('Home', homeSchema);
export default Home;
