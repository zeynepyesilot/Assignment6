import Post from './Post';

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <Post 
          key={post.id} 
          title={post.title} 
          body={post.body} 
        />
      ))}
    </div>
  );
};

export default PostList;