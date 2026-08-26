const mutationResolvers = {
    addPost(parent: any, args: any, context: any) {
        const {title, content} = args;
        console.log(`Adding post with title: ${title} and content: ${content}`);
        return {
            id: "3",
            title: title,
            content: content,
            comments: []
        };
        
    }
}

export default mutationResolvers;