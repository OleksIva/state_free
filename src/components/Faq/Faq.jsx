function Faq () {       
    return (
        <div className="container-fluid">
            <div className="row py-5">
                <div className="col-md-12 justify-content-center d-flex align-items-center"><h2>FAQ</h2></div>
                <div className="col-md-12 d-flex justify-content-center"><h2>Wie können wir Ihnen helfen</h2></div>
                <div className="col-md-12 d-flex justify-content-center"><form className="d-flex justify-content-center">

                    <input className="form-control me-2" type="search" placeholder="Geben Sie Ihre Frage ein" aria-label="Search"/>

                    <button className="btn btn-outline-success" type="submit">Search</button>

                    </form></div>
                

            </div>

            
        </div>
    )
}

export default Faq