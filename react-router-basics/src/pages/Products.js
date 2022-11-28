import { Link } from 'react-router-dom'

const Products = () =>{
    return(
        <div>
            <h1>Products</h1>
            <ul>
               <li> <Link to='/products/one'>Product 1</Link> </li>
               <li> <Link to='/products/two'>Product 2</Link> </li>
               <li> <Link to='/products/three'>Product 3</Link>  </li>
            </ul>

        </div>
    );
}


export default Products;