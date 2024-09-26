import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        console.log(data.products);
        setProducts(data.products);
      })
      .catch(error => console.log(`Some error during fetching the API: ${error}`));
  }, []);

  return (
    <div className='container'>
      <h1>Products List</h1>
      <table>
        <thead>
          <tr>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Product Description</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td><img src={product.images[0]} alt="Product Image" className='product-image' /></td>
              <td>{product.title}</td>
              <td>{product.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
