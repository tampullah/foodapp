export let Quote = ({quotes, calfunc})=>{

        
    return(
       <div>


            <h1>Quotes</h1>

            <ul className="list-group">
                {
                    quotes.map((quo,index )=>{
                        
                        return(
                            <li className="list-group-item" key={index}>{quo.text} : <span>{quo.author}</span></li>
                        )
                    })
                }
            </ul>
            <button className="btn btn-danger mt-2 m-3" onClick={()=>{ calfunc(5); }}>Click Me</button>
       </div>
    )

}

