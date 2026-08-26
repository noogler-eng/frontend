import { title } from "process";

const queryResolvers = {
  healthCheck: (parent: any, args: any, context: any, info: any) => {
    return {
      status: "SUCCESS",
      message: "Server is running fine",
    };
  },

  posts: (parent: any, args: any, context: any, info: any) => {
    return [
      {
        id: "1",
        title: "First Post",
        content: "This is the content of the first post.",
        comments: [
          {
            id: "1",
            content: "This is the first comment."
          }
        ]
      },
      {
        id: "2",
        title: "Second Post",
        content: "This is the content of the second post.",
        comments: [
          {
            id: "2",
            content: "This is the second comment."
          }
        ]
      }
    ];
  },

  post: (parent: any, args: any, context: any, info: any) => {
    const id = args.id;
    return {
      id: id,
      title: `Post ${id}`,
      content: `This is the content of post ${id}.`,
      comments: [
        {
          id: "1",
          content: "This is the first comment."
        },
        {
          id: "2",
          content: "This is the second comment."
        }
      ]
    }
  },


  comments: (parent: any, args: any, context: any, info: any) => {
    const postId = args.postId;
    return [
      {
        id: "1",
        content: `This is the first comment for post ${postId}.`
      },
      {
        id: "2",
        content: `This is the second comment for post ${postId}.`
      }
    ];
  }
};

export default queryResolvers;
