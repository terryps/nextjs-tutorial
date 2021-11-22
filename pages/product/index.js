import Link from 'next/link';

function ProductList({ productId = 100 }) {
    return (
        <>
            {/* example 2 */}
            {/* "/" represents the root of our application */}
            <Link href="/">
                <a>Home</a>
            </Link>
            <ul style={{listStyle: 'none'}}>
                {/* example 3 */}
                <li>
                    <Link href="/product/1"><a>
                        <h2>Product 1</h2>
                    </a></Link>
                </li>

                <li>
                    <Link href="/product/2"><a>
                        <h2>Product 2</h2>
                    </a></Link>
                </li>

                <li>
                    {/* the "replace" attr brought us to the home page */}
                    {/* when click back */}
                    {/* The "replace" prop replaces the current history state */}
                    {/* instead of adding a new url to the stack. */}
                    <Link href="/product/3" replace><a>
                        <h2>Product 3</h2>
                    </a></Link>
                </li>

                {/* the productId can be passed in as a prop to the component */}
                <li>
                    <Link href={`/product/${productId}`}>
                        <a><h2>Product {productId}</h2></a>
                    </Link>
                </li>
            </ul>
        </>
    );
}

export default ProductList;