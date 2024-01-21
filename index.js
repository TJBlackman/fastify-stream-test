const fastify = require("fastify")({ logger: true });

// return JSON from SWAPI - works!
fastify.get("/api/json", async (request, reply) => {
  const response = await fetch("https://swapi.dev/api/people/1/");
  const json = await response.json();
  return reply.send(json);
});

// return stream from SWAPI - doesn't work
fastify.get("/api/stream", async (request, reply) => {
  const response = await fetch("https://swapi.dev/api/people/1/");
  return reply.send(response.body);
});

fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
