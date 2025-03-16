import { useDispatch } from "react-redux"
import { addToCart } from "../lib/features/cart/cartSlice";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

type Product = {
  id: number,
  name: string,
  price: number,
  image: string
}

const ProductList = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product : Product) => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      })
    )
  }

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT1Eqdb_Vb9ydEITXQMTCqANee5IzZ9cSBZE9ESsLc8uinxNtIrl44yfhthqAl0A0ohuPlHYBnVqhcKA5J6IgrMUz9hXEMDUE-BHOLbfZtBfD0477BKKL5eMg&usqp=CAE",
      description: "Premium wireless headphones with noise cancellation",
    },
    {
      id: 2,
      name: "Smartphone",
      price: 699.99,
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQqM3hPvH4Xcm2FEYPDfqzovNLVBdo7IDmo2BYqe_t6a1pTTgurcfkcqo6q8UuAqMuNyBL5lYZ7hTIIkJxG4PQF9nGZyQ2QAP8zh-8lFx9Hc48gVbJXOBXR&usqp=CAE",
      description: "Latest model with high-resolution camera",
    },
    {
      id: 3,
      name: "Laptop",
      price: 1299.99,
      image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-og-202503?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1739216814915",
      description: "Powerful laptop for work and gaming",
    },
    {
      id: 4,
      name: "Smartwatch",
      price: 249.99,
      image: "https://assets.ajio.com/medias/sys_master/root/20230516/fSRt/64639ccdd55b7d0c63b981c9/-1117Wx1400H-4938378220-multi-MODEL.jpg",
      description: "Track your fitness and stay connected",
    },
    {
      id: 5,
      name: "Wireless Earbuds",
      price: 129.99,
      image: "https://www.leafstudios.in/cdn/shop/files/1_6b54ff34-acdd-40e6-a08a-f2bfa33a1c7a_800x.png?v=1718706988",
      description: "Compact earbuds with amazing sound quality",
    },
    {
      id: 6,
      name: "Tablet",
      price: 349.99,
      image: "https://powermaccenter.com/cdn/shop/files/iPad_10th_generation_Wi-Fi_Pink_PDP_Image_Fall23_Position-1-alt__en-US_5ae13873-7308-4de7-8bd7-2a384fd29645.jpg?v=1718803000&width=1445",
      description: "Perfect for entertainment and productivity",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {
          products.map((product) => (
            <Card key={product.id} className="border border-gray-300">
              <CardHeader>
                <CardTitle className="text-2xl">{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center mb-4">
                  <img 
                  src={product.image} 
                  alt={product.name}
                  className="h-40 w-40 object-contain mb-2"
                  />
                  <p className="text-sm text-gray-500 text-center">{product.description}</p>
                </div>
                <p className="text-xl font-bold text-center">₹{product.price.toFixed(2)}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-black text-white" onClick={() => handleAddToCart({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: product.image
                })} >
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))
        }
      </div>
    </div>
  )
}

export default ProductList;