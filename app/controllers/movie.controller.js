const db = require("../models");
const Movie = db.movies;
const Comment = db.comments;

exports.createMovie = (movie) => {
    return Movie.create({
      title: movie.title,
      description: movie.description,
    })
      .then((movie) => {
        console.log(">> Created movie: " + JSON.stringify(movie, null, 4));
        return movie;
      })
      .catch((err) => {
        console.log(">> Error while creating movie: ", err);
      });
  };

  exports.createComment = (movieId, comment) => {
    return Comment.create({
      name: comment.name,
      text: comment.text,
      movieId: movieId,
    })
      .then((comment) => {
        console.log(">> Created comment: " + JSON.stringify(comment, null, 4));
        return comment;
      })
      .catch((err) => {
        console.log(">> Error while creating comment: ", err);
      });
  };

  exports.findmovieById = (movieId) => {
    return Movie.findByPk(movieId, { include: ["comments"] })
      .then((movie) => {
        return movie;
      })
      .catch((err) => {
        console.log(">> Error while finding movie: ", err);
      });
  };

  exports.findCommentById = (id) => {
    return Comment.findByPk(id, { include: ["movie"] })
      .then((comment) => {
        return comment;
      })
      .catch((err) => {
        console.log(">> Error while finding comment: ", err);
      });
  };
  exports.findAll = () => {
    return Movie.findAll({
      include: ["comments"],
    }).then((movies) => {
      return movies;
    });
  };