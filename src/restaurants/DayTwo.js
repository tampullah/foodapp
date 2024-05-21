import {Header} from "../components2/Header";
import { Content } from "../components2/Content";
import { Footer } from "../components2/Footer";
import { useState } from "react";
import { ProductList } from "../components2/ProductList";
import ShowAllProducts from "../components/comcontext/ShowAllAproducts";
import { Product } from "../components/comcontext/Product";
import Effect from "../components2/Effect";

const DayTwo =()=> {
   let  [cartItems, setCart] =useState(0);

   const increaseCartItems =()=>{
    setCart(function(x){
        return x +1;

    })
   }

   const decreaseCartItems =()=>{
    setCart(function(x){
        if(cartItems==0){
            return 0
        }else{
        return x -1;
        }

    })
   }

   const increaseCount =()=>{
    //setCount(count+1)
    setCount(function(prev){
        return prev +1;

    })
   }

   const decreaseCount =()=>{
    //setCount(count+1)
    setCount(function(prev){
        if(count==0){
            return 0;
        }else{
        return prev -1;
        }
       

    })
   }
   const [count, setCount] = useState(0)

   const [products, setProducts]=useState([
    {
        pro_name: "Mercedes Benz 101",
        price: 2000000000,
        id: "mer101",
    },
    {
        pro_name: "Frozen Veggies ",
        price: 2000,
        id: "freez101",
    },
    {
        pro_name: " Greek Yougurt",
        price: 1500,
        id: "yogur101",
    },
   ])

   const addNewProduct =(newProduct)=>{
    const latestProduct=[...products, newProduct]
    setProducts(latestProduct)
   }

    //Create a function that will delete product

    const deleteproduct=(id)=>{

        const newProduct =products.filter(function(value){
            return value.id !=id
                    
            
        });

        setProducts(newProduct);
    }

  
    return(
        <div>
            <h1>Count :{count}</h1>

            <button className="btn btn-primary mt-2" onClick={()=>{increaseCount()}}>Increase</button>
            <button className="btn btn-danger mt-2" onClick={()=>{decreaseCount()}}>Decrease</button>
            <Header cartItems={cartItems} count={count} increaseCount={increaseCount} decreaseCount ={decreaseCount}/>
            <Content cartItems={cartItems} cart ={cartItems}  increaseCartItems ={ increaseCartItems} decreaseCartItems={decreaseCartItems} addNewProduct={addNewProduct}/>
            <ProductList products={products} deleteproduct={deleteproduct} />
            <Effect />
            <Footer />

            {/* <ShowAllProducts />
            <Product /> */}
        </div>
    )
}

export default DayTwo;