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
   Track: {
     /**
      * Get author of a track
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
