const resolvers  = {
   Query: {
     /**
      * Get tracks array for homepage grid
      */
     tracksForHome: (_, __, {dataSources}) => {
       return dataSources.trackAPI.getTracksForHome();
     },
   },
   Track: {
     author: ({authorId}, _, {dataSources}) => {
        return dataSources.trackAPI.getAuthor(authorId);
     }
   }
}

module.exports = resolvers;
