type Props = {
    params: {
      blogsId: string;
    }
  }
  
  export default function BlogPost({ params }: Props) {
    const { blogsId } = params;
  
    let blogContent;
  
    switch (blogsId) {
      case 'first':
        blogContent = (
          <>
            <h1>Blog Post: First Blog</h1>
            <p>This is the content of the first blog post.</p>
          </>
        );
        break;
      case 'second':
        blogContent = (
          <>
            <h1>Blog Post: Second Blog</h1>
            <p>This is the content of the second blog post.</p>
          </>
        );
        break;
      default:
        blogContent = (
          <>
            <h1>Blog Post {blogsId}</h1>
            <p>This is the default content for blog post {blogsId}.</p>
          </>
        );
    }
  
    return <div>{blogContent}</div>;
  }