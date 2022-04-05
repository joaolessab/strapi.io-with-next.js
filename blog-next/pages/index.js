export default function Home(props) {
  return (
    <div>
      <div>
        {props.posts.map((post) => (
          <div key={post.id}>
            <h2>{post.attributes.Title}</h2>
            <p>{post.attributes.User.data.attributes.username}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps(){
  // get posts from our api
  const res = await fetch('http://localhost:1337/api/posts?populate=%2A');
  const data = await res.json();
  const posts = data.data;

  return {
    props: {
      posts,
    },
  }
}