const PostCard = ({ post }) => {
  return (
    <div>
      <a href={post.path}>
        <h2>{post.title}</h2>
        <div>{post.publishedAt}</div>
        <div>{post.summary}</div>
      </a>
    </div>
  )
}

export default PostCard
