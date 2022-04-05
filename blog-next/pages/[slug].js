export default function Post(props){
    return (
        <div>{props.post.attributes.Title}</div>
    )
}

// tell next.js how many pages they are
export async function getStaticPaths(){
    const res = await fetch('http://localhost:1337/api/posts?populate=%2A');
    const data = await res.json();
    const posts = data.data;

    return{
        fallback: false,
        paths: posts.map((post) => ({
            params: { 
                slug: post.attributes.Slug
            }
        })),
    }
}

// for each indivual: get the data for that page
export async function getStaticProps(context){
    const slug = context.params.slug;
    console.log('Testando:' + slug);
    const res = await fetch(`http://localhost:1337/api/posts?populate=%2A&filters[Slug]=${slug}`);
    console.log(res);
    const data = await res.json();

    const post = data[0];

    console.log(post);

    return {
        props: { 
            post
        },
    }
}