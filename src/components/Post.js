const Post = ({ meta, children }) => {
  return (
    <div>
      <h1>{meta.title}</h1>
      {children}
    </div>
  )
}

export default Post
