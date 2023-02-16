

export function Experience(props){
    
    return(
        <div className="container">
        <div className="row justify-content-center my-5">
        <div className="col-lg-6">
            <h1 className="text-center mb-4">Application form</h1>
            <form onSubmit={ (e) => {props.nextPage(e)} } id="xp">
            <div className="form-control mb-4">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="ticketSales" name="ticketSales"/>
                    <label className="form-label" htmlFor="ticketSales">Ticket sales</label>
                    
                </div>
                <input onChange={ (e) => {console.log(e.target.value)}} className="form-range" type="range" min="1" max="10" id="ticketSalesExperience" name="ticketSalesExperience"/>
            </div>

            <div className="form-control mb-4">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="lotteries" name="lotteries"/>
                    <label className="form-label" htmlFor="lotteries">Lotteries</label>
                </div>
                <input className="form-range" type="range" min="1" max="10" id="lotteriesExperience" name="lotteriesExperience"/>
            </div>

            
            <div className="form-control mb-4">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="rollerCoasterOperation" name="rollerCoasterOperation"/>
                    <label className="form-label" htmlFor="rollerCoasterOperation">Roller coaster operation</label>
                </div>
                <input className="form-range" type="range" min="1" max="10" id="rollerCoasterExperience" name="rollerCoasterExperiences"/>
            </div>


            <div className="row px-2">
                <button type="submit" className="btn btn-primary btn-block mb-4">Next</button>
            </div>
        </form>
        </div>
        </div>
        
        </div>
        
    );
}

export function ConfimData(props) {
    return (
        <div className="container">
        <div className="row justify-content-center my-5">
        <div className="col-lg-6">
            <h1 className="text-center mb-4">Confim information</h1>

            {JSON.stringify(props.data)}
            <div className="row px-2">
            <div className="btn-group mb-4 px-0" role="group">
                <button onClick={ () => {props.setPage(props.page - 1)}} type="button" className="btn btn-warning ">Back</button>
                <button onClick={ () => {props.nextPage()}}type="button" className="btn btn-primary ">Next</button>
            </div> 
            </div>
        </div>
        </div>        
        </div>
    );
}

export function Availability(props) {

    return (
        <div className="container">
        <div className="row justify-content-center my-5">
        <div className="col-lg-6">
            <h1 className="text-center mb-4">Availability</h1>

            <form onSubmit={ (e) => {props.nextPage(e)}}>

                <div className="input-group date justify-content-center mb-4">
                    <input type="date" name="fromDate"></input>
                    <span className="input-group-text" id="seperator">--</span>
                    <input type="date" name="toDate"></input>
                </div>

                <div className="row px-2">
                <div className="btn-group mb-4 px-0" role="group">
                    <button onClick={ () => {props.setPage(props.page - 1)}} type="button" className="btn btn-warning ">Back</button>
                    <button type="submit" className="btn btn-primary ">Next</button>
                </div> 
                </div>

            </form>
            
        </div>
        </div>        
        </div>
    );
}