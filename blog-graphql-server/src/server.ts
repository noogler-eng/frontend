import { useDisableIntrospection } from "@graphql-yoga/plugin-disable-introspection";
import { blockFieldSuggestionsPlugin } from '@escape.tech/graphql-armor-block-field-suggestions'
import { createSchema, createYoga, maskError } from "graphql-yoga";
import typeDefs from "./typeDefs/index.js";
import resolvers from "./resolvers/index.js";
import express from "express";

const app = express();
const isProd = true;

// mutuations - executes sequenlty for a user (order matters)
// query - executes in parallel for a user (read only, order does not matter)
const schema = createSchema({
  typeDefs,
  resolvers,
});

const yoga = createYoga({
  schema: schema,
  plugins: [
    useDisableIntrospection(),
    blockFieldSuggestionsPlugin()
  ],
  maskedErrors: {
    isDev: false,
    maskError: (error) => {
      console.log("Error occurred:", error);
      return new Error("The requested query structure or field is invalid.");
    },
  },
});

app.use(yoga.graphqlEndpoint, yoga);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(
    `Server is running on http://localhost:${PORT}${yoga.graphqlEndpoint}`,
  );
});
