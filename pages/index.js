import Link from 'next/link';
import { useRouter } from 'next/router';

function Home() {
    // tut 11
    const router = useRouter();
    // we can access the push method passing in the required route as an argument

    const handleClick = () => {
        console.log('Placing your order');
        console.log(router);
        router.push('/product');
    };

    return (<div>
        <h1>Home Page</h1>
        {/* Let's look into client-side navigation */}
        {/* the link component is used for client-side routing */}
        {/* if you want to navigate to an external website u should use */}
        {/* plain old html anchor tag */}
        {/* u should not use a plain html anchor tag for client-side routing */}
        {/* as it would make a new server request*/}
        {/* and any client state you're maintaining will be erased. */}

        {/* instead of specifying the href attribute on the anchor tag, */}
        {/* we specify on the link tag, so href is equal to slash blog */}
        {/* example 1 */}
        <Link href="/blog">
            {/* "/blog" represents the route that we want to navigate to */}
            <a>Blog</a>
        </Link>

        <Link href="/product">
            <a>Products</a>
        </Link>
        <button onClick={handleClick}>
            Place Order
        </button>
    </div>);
}

export default Home;