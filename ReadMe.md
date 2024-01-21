# Fastify Proxy Return Streams

This is a demo to try to get Fastify to return a streamed response from a fetch call.

## Start up

- run `npm i`
- run `npm run dev`
- Make a GET request to the URLs below to see the response:
  - http://localhost:3000/api/json - Works!
  - http://localhost:3000/api/stream - Does not work :(

### StackOverflow

Here's the SO question:\
https://stackoverflow.com/questions/77856172/return-fetch-stream-from-fastify

### Fastify Docs

https://fastify.dev/docs/latest/Reference/Reply/#streams
