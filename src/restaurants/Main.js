import { useEffect } from "react";
import { useState } from "react";

export const Main =()=>{

   

    const[categories, setCategories]=useState(null);
    const [loading, setLoading] =useState(true);

    const fetchFoodCatgories =()=>{
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(function(response){
            return response.json();
        })
        .then(function(data){
           setCategories(data.categories)
           setLoading(false);
           
        })
    }

    //call useeffect and call the function inside useeffect

    useEffect(function(){

        fetchFoodCatgories();
    },[])


    return(
        <>
             <main>
                {/* banner section */}
                <section
                    className="container-fluid p-0 m-0"
                    style={{
                    backgroundImage: 'url("assets/images/hero-bg.jpg")',
                    height: 300,
                    backgroundSize: "cover"
                    }}
                >
                    <div
                    className="row"
                    style={{ backgroundColor: "rgba(0,0,0,0.7)", height: "inherit" }}
                    >
                    <div className="col">
                        <h1 className="text-center text-light mt-4" style={{ lineHeight: 7 }}>
                        Eat Healthy, Stay Healthy.
                        </h1>
                    </div>
                    </div>
                </section>
                {/* end banner section */}
                <div className="album py-5 bg-light">
                    <div className="container" id="shopnow">
                    <div className="row">
                        <div className="col-md-12">
                        <h3 className="text-center mb-3">Welcome Home!</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                        {/* Categories of menu starts */}
                        <h5 className="mb-3 text-danger">CATEGORIES</h5>
                        {
                            loading ? <h1 className="text-center">Loading....</h1>: ""
                        }
                        {/* category item*/}
                       {
                       categories && categories.map(function(cat){
                            return(
                                <div className="row g-3" id="shopnow" key={cat.idCategory}>
                                <div className="col-md-2">
                                <img src={cat.strCategoryThumb} alt="" className="img-fluid" />
                                </div>
                                <div className="col-md-8">
                                <h5>{cat.strCategory}</h5>
                                <p>
                                    {cat.strCategoryDescription}
                                </p>
                               
                                </div>
                                <hr />
                            </div>
                            )
                        })
                       }
                        </div>
                        {/* end category item*/}
                       
                    </div>
                    {/* end category item*/}
                    {/* Categories of menu ends */}
                    </div>
                </div>
            </main>

        
        </>
    )
}

