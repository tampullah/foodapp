import { createContext, useContext, useState } from "react";

const ProductContext = createContext(); // Creating Context Step 1

// Creating provider Step 2
const ProductProvider =({children})=>{
    
    // Things that will be in your provider 
    // state and all other methods 

    const[products, setProducts]= useState([

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

    // All methods of state comes in here

    //This function adds new product
    const addNewProduct =(newProduct)=>{
        const latestProduct=[...products, newProduct]
        setProducts(latestProduct)
       }
       
       //Create a function that will delete product
        //this function delete product
       const deleteproduct=(id)=>{

        const newProduct =products.filter(function(value){
            return value.id !=id
                    
            
        });

        setProducts(newProduct);
    }

    return(
        <ProductContext.Provider value={{products, addNewProduct, deleteproduct,}}>
            {children}
        </ProductContext.Provider>
    )

    
}


// Setup usecontext

const UseProductContext =()=>{
    const context =useContext(ProductContext)
    if(!context){
        throw Error("Context not available")
    }
    return context;
}   

export {ProductProvider, UseProductContext}

