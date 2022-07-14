const resolvers  = {
   Query: {
     /**
      * Get tracks array for homepage grid
      */
     tracksForHome: (_, __, {dataSources}) => {
       return dataSources.trackAPI.getTracksForHome();
     },
     /**
      * Get single track by id
      */
     track: (_, {id}, {dataSources}) => {
       return dataSources.trackAPI.getTrack(id);
     }
   },
   Mutation: {
     incrementTrackViews: async (_, {id}, {dataSources}) => {
       try {
         const track = dataSources.trackAPI.incrementTrackViews(id);
         return {
           code: 200,
           success: true,
           message: `Successfully incremented number of views for track ${id}`,
           track
         };
       } catch (error) {
         const response = error.extensions.response;
         return {
           code: response.status,
           success: false,
           message: response.body,
           track: null
         };
       }
     }
   },
   Track : {
     /**
      *  Get author of a track
      */
     author: ({authorId}, _, {dataSources}) => {
        return dataSources.trackAPI.getAuthor(authorId);
     },
     /**
      * Get modules of a track
      */
      modules: ({id}, _, {dataSources}) => {
        return dataSources.trackAPI.getTrackModules(id);
      }
   }
}

module.exports = resolvers;
