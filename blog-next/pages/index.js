export default function Home(props) {
  return (
    <div>
      <div>
        {props.posts.map((post) => (
          <h2 key={post.id}>
            {post.attributes.Title}
          </h2>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps(){
  // get posts from our api
  const res = await fetch('http://localhost:1337/api/posts');
  const data = await res.json();
  const posts = data.data;

  return {
    props: {
      posts,
    },
  }
}