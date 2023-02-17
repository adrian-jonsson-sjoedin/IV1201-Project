export default function AvailabilityForm(props) {

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