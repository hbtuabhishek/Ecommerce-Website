import { Button } from "react-bootstrap";
import './ProductData.css';

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "Album 1.png",
  },

  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "Album 2.png",
  },

  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "Album 3.png",
  },

  {
    title: "Blue Color",
    price: 100,
    imageUrl: "Album 4.png",
  },
];

const ProductData = () => {
  return (
    <div className="products">
      {productsArr.map((product) => (
        <div className="card">
          <div>
            <img src={product.imageUrl} alt={product.title} />
          </div>
          <div><h3 className="product.name">{product.title}</h3></div>
          <div className="product-price">${product.price}</div>
          <div><Button>Add to Cart</Button></div>
        </div>
      ))}
      ;
    </div>
  );
};

export default ProductData;
