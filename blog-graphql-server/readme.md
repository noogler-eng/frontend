
## Nested query

```graphql

query random($id: ID!) {
  post(id: $id) {
    id,
    title,
    content,
    comments {
      id
      content
    }
  }
}

```