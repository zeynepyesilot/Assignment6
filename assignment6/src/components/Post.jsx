const Post = ({ title, body }) => {
  
  const style = {
    border: '1px solid #ddd',
    padding: '15px',
    marginBottom: '10px',
    borderRadius: '8px',
    backgroundColor: '#fff'
  };

  return (
    <div style={style}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <p style={{ color: '#555' }}>{body}</p>
    </div>
  );
};

export default Post;