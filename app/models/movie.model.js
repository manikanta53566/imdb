module.exports = (sequalize, Datatypes) => {
    const Movie = sequalize.define("movie",{
        title: {
            type:Datatypes.STRING
        },

        description: {
            type: Datatypes.STRING
        }
    });
    return Movie;

};
