import Home from "../Components/Home.js";
export const resolvers = {
    Query: {
        async getTopsellingPackage(_, { ID }) {
            return await Home.findById(ID);
        },
        async getTopsellingPackages(_, { limit }) {
            return await Home.find().limit(limit);
        },
        async getBestActivityToTry(_, { ID }) {
            return await Home.findById(ID);
        },
        async getBestActivitiesToTry(_, { limit }) {
            return await Home.find().limit(limit);
        },
        async getDestination(_, { ID }) {
            return await Home.findById(ID);
        },
        async getDestinations(_, { limit }) {
            return await Home.find().limit(limit);
        },
        async getSightSeeing(_, { ID }) {
            return await Home.findById(ID);
        },
        async getSightSeeings(_, { limit }) {
            return await Home.find().limit(limit);
        },
        async getFerry(_, { ID }) {
            return await Home.findById(ID);
        },
        async getFerries(_, { limit }) {
            return await Home.find().limit(limit);
        },
        async getTopBeach(_, { ID }) {
            return await Home.findById(ID);
        },
        async getTopBeaches(_, { limit }) {
            return await Home.find().limit(limit);
        },
        async getSocialMediaLinks(_, { ID }) {
            return await Home.findById(ID);
        },
        async getHome(_, { ID }) {
            return await Home.findById(ID);
        },
    },
    Mutation: {
        async createTopsellingPackages(_, { TopsellingPackagesInput: { name, price, description, image } }) {
            const res = await new Home({ TopsellingPackages: [{ name, price, description, image }] }).save();
            return res._id;
        },
        async updateTopsellingPackages(_, { ID, TopsellingPackagesInput: { name, price, description, image } }) {
            await Home.updateOne({ _id: ID }, { $set: { TopsellingPackages: [{ name, price, description, image }] } });
            return ID;
        },
        async deleteTopsellingPackages(_, { ID }) {
            await Home.findByIdAndDelete;
            return ID;
        },
        async createBestActivitiesToTry(_, { BestActivitiesToTryInput: { name, description, image } }) {
            const res = await new Home({ BestActivitiesToTry: [{ name, description, image }] }).save();
            return res._id;
        },
        async updateBestActivitiesToTry(_, { ID, BestActivitiesToTryInput: { name, description, image } }) {
            await Home.updateOne({ _id: ID }, { $set: { BestActivitiesToTry: [{ name, description, image }] } });
            return ID;
        },
        async deleteBestActivitiesToTry(_, { ID }) {
            await Home.findByIdAndDelete;
            return ID;
        },
        async createDestination(_, { DestinationsInput: { name, description, image } }) {
            const res = await new Home({ Destinations: [{ name, description, image }] }).save();
            return res._id;
        },
        async updateDestination(_, { ID, DestinationsInput: { name, description, image } }) {
            await Home.updateOne({ _id: ID }, { $set: { Destinations: [{ name, description, image }] } });
            return ID;
        },
        async deleteDestination(_, { ID }) {
            await Home.findByIdAndDelete;
            return ID;
        },
        async createSightSeeing(_, { SightSeeingsInput: { name, description, image } }) {
            const res = await new Home({ SightSeeings: [{ name, description, image }] }).save();
            return res._id;
        },
        async updateSightSeeing(_, { ID, SightSeeingsInput: { name, description, image } }) {
            await Home.updateOne({ _id: ID }, { $set: { SightSeeings: [{ name, description, image }] } });
            return ID;
        },
        async deleteSightSeeing(_, { ID }) {
            await Home.findByIdAndDelete;
            return ID;
        },
        async createFerry(_, { FerriesInput: { name, place, image, description } }) {
            const res = await new Home({ Ferries: [{ name, place, image, description }] }).save();
            return res._id;
        },
        async updateFerry(_, { ID, FerriesInput: { name, place, image, description } }) {
            await Home.updateOne({ _id: ID }, { $set: { Ferries: [{ name, place, image, description }] } });
            return ID;
        },
        async deleteFerry(_, { ID }) {
            await Home.findByIdAndDelete;
            return ID;
        },
        async createTopBeach(_, { TopBeachesInput: { name, place, image, description } }) {
            const res = await new Home({ TopBeaches: [{ name, place, image, description }] }).save();
            return res._id;
        },
        async updateTopBeach(_, { ID, TopBeachesInput: { name, place, image, description } }) {
            await Home.updateOne({ _id: ID }, { $set: { TopBeaches: [{ name, place, image, description }] } });
            return ID;
        },
        async deleteTopBeach(_, { ID }) {
            await Home.findByIdAndDelete;
            return ID;
        },
        async createSocialMediaLinks(_, { SocialMediaLinksInput: { Twitter, Facebook, Instagram, LinkedIn } }) {
            const res = await new Home({ SocialMediaLinks: { Twitter, Facebook, Instagram, LinkedIn } }).save();
            return res._id;
        },
        async updateSocialMediaLinks(_, { ID, SocialMediaLinksInput: { Twitter, Facebook, Instagram, LinkedIn } }) {
            await Home.updateOne({ _id: ID }, { $set: { SocialMediaLinks: { Twitter, Facebook, Instagram, LinkedIn } } });
            return ID;
        },
        async deleteSocialMediaLinks(_, { ID }) {
            await Home.findByIdAndDelete;
            return ID;
        },
        async createHome(_, { homeInput: { video, tagline, logo, TopsellingPackages, BestActivitiesToTry, Destinations, SightSeeings, Ferries, TopBeaches, SocialMediaLinks } }) {
            const res = await new Home({ video, tagline, logo, TopsellingPackages, BestActivitiesToTry, Destinations, SightSeeings, Ferries, TopBeaches, SocialMediaLinks }).save();
            return res._id;
        },
        async updateHome(_, { ID, homeInput: { video, tagline, logo, TopsellingPackages, BestActivitiesToTry, Destinations, SightSeeings, Ferries, TopBeaches, SocialMediaLinks } }) {
            await Home.updateOne({ _id: ID }, { $set: { video, tagline, logo, TopsellingPackages, BestActivitiesToTry, Destinations, SightSeeings, Ferries, TopBeaches, SocialMediaLinks } });
            return ID;
        },
        async deleteHome(_, { ID }) {
            await Home.findByIdAndDelete;
            return ID;
        },
    },
};
