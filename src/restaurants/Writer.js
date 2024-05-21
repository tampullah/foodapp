
export let Writer =({write})=>{
console.log(write)
    return(

        <table className="table table-striped-columns">
            <thead>
                <tr>
                    <th>Text</th>
                    <th>Author</th>
                </tr>
            </thead>
            <tbody>
        
             {
                write.map(function(value){
                    <tr>
        
                    <td >{value.text}</td>
                    <td >{value.author}</td>
            
                    </tr> 
                })
            
            }
        
            </tbody>

        </table>

       
    )
    

}