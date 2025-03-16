import { useDispatch, useSelector } from "react-redux"
import { removeFromCart, incrementQuantity, decrementQuantity } from "../lib/features/cart/cartSlice"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Minus, Plus, Trash2 } from "lucide-react"
import { selectCartTotal, selectCartItemTotal, selectCartItems } from "../lib/features/cart/cartSelectors";

const Cart = () => {
  const dispatch = useDispatch();
  const cartTotal = useSelector(selectCartTotal);
  const itemCount = useSelector(selectCartItemTotal);
  const cartItems = useSelector(selectCartItems);

  if (itemCount == 0) {
  return (
    <Card className="border border-gray-300">
      <CardHeader>
        <CardTitle className="text-2xl">Your Cart</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-gray-500">Your cart is empty</p>
      </CardContent>
    </Card>  
  )} 

    return (
    <Card className="border border-gray-300">
      <CardHeader>
        <CardTitle className="text-2xl">Your Cart</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {
          cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 pb-4 border-b">
                <img src={item.image} alt={item.name}
                className="h-16 w-16 object-contain"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">₹{item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                  variant='outline'
                  size='icon'
                  className="h-8 w-8"
                  onClick={() => dispatch(decrementQuantity(item.id))}
                  disabled={item.quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => dispatch(incrementQuantity(item.id))}
                  >
                  <Plus className="h-4 w-4" />
                  </Button>
                  <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 text-destructive"
                  onClick={() => dispatch(removeFromCart(item.id))}
                  >
                  <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
            </div>
          ))
        }
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-3">
        <div className="flex justify-between w-full text-lg font-bold">
          <span>Total:</span>
          <span>₹{cartTotal.toFixed(2)}</span>
        </div>
        <Button className="w-full bg-black text-white">Checkout</Button>
      </CardFooter>
    </Card> 
    )
}

export default Cart;