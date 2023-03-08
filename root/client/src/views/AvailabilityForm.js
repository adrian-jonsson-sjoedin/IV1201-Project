/**
 * A form where the applicant can enter thier availability periods
 * @param {function} props.nextPage - function the stores the form data and send the user to the next page  
 * @returns 
 */
export default function AvailabilityForm(props) {
    
    return (
        <div className="container">
        <div className="row justify-content-center my-5">
        <div className="col-lg-6">
            <h1 className="text-center mb-4">Availability</h1>

            <form onSubmit={ (e) => {props.nextPage(e)}} className="form-control bg-secondary">

                <div className="input-group date justify-content-center mt-4">
                    <input type="date" name="from_date" required></input>
                    <span className="input-group-text" id="seperator">--</span>
                    <input type="date" name="to_date" required></input>
                </div>

                <div className="row px-2">
                <div className="btn-group my-4 px-0" role="group">
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