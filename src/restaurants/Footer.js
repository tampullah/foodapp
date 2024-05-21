
const Footer = ()=>{

    return (

        <>
        
        <footer className="py-5 custom text-white">
            <div className="container">
            <p className="float-end mb-1">
                <a href="#" className="text-white">
                Back to top
                </a>
            </p>
            <div className="row">
                <div className="col-6 col-md-4 mb-3">
                <form>
                    <h5>About The Restaurant</h5>
                    <p>
                    Online food ordering is the process of ordering food, for delivery
                    or pickup, from a website or other application.
                    </p>
                </form>
                </div>
                <div className="col-12 col-md-6">
                <form>
                    <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                    </div>
                    <button type="submit" className="btn btn-dark">
                    Subscribe
                    </button>
                </form>
                </div>
            </div>
            </div>
            </footer>

        </>
    )
}

export {Footer};