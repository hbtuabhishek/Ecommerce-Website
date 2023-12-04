import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";

const StoreItemProps = {
  id: Number,
  title: String,
  price: Number,
  imageUrl: String,
};

const StoreItem = ({ item, cart, setcart }) => {
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={item.imageUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{item.title}</span>
          <span className="ms-2 text-muted">${item.price}</span>
        </Card.Title>
        <div className="mt-auto">
          
            <Button
              variant="danger"
              size="sm"
              onClick={() => {
                setcart(cart.filter((c) => c.id !== item.id));
              }}
            >
              Remove
            </Button>
          
            <Button
              className="w-100"
              onClick={() => {
                setcart([...cart, item]);
              }}
            >
              + Add To Cart
            </Button>
          
        </div>
      </Card.Body>
    </Card>
  );
};
export default StoreItem;
