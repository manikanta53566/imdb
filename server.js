const db = require("./app/models");
const controller = require("./app/controllers/movie.controller");

const run = async () => {
  const movie1 = await controller.createMovie({
    title: "bahubali1&2",
    description: "biggest indian movie",
  });

  const movie2 = await controller.createMovie({
    title: "pk",
    description: "ameerkhan movie ",
  });

  const comment1 = await controller.createComment(movie1.id, {
    name: "mani",
    text: "greatest indian movie untouchoble rest 10 years",
  });

  await controller.createComment(movie1.id, {
    name: "ramesh",
    text: "One of the best its goinig to be a classic for ever",
  });

  const comment2 = await controller.createComment(movie2.id, {
    name: "nani",
    text: "Hi, thank you!",
  });

  await controller.createComment(movie2.id, {
    name: "sai",
    text: "Awesome movie rethink of living",
  });

  const movie1Data = await controller.findmovieById(movie1.id);
  console.log(
      ">> Movie id=" + movie1Data.id,
    JSON.stringify(movie1Data, null, 2)
  );

  const movie2Data = await controller.findmovieById(movie2.id);
  console.log(
    ">> Movie id=" + movie2Data.id,
    JSON.stringify(movie2Data, null, 2)
  );

  const comment1Data = await controller.findCommentById(comment1.id);
  console.log(
    ">> Comment id=" + comment1.id,
    JSON.stringify(comment1Data, null, 2)
  );

  const comment2Data = await controller.findCommentById(comment2.id);
  console.log(
    ">> Comment id=" + comment2.id,
    JSON.stringify(comment2Data, null, 2)
  );

  const Movies = await controller.findAll();
  console.log(">> All Movies", JSON.stringify(Movies, null, 2));
};


// db.sequelize.sync();
db.sequelize.sync({ force: 1 }).then(() => {
  console.log("Drop and re-sync db.");
  run();
});
