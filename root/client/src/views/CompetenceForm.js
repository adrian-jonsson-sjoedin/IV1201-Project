/**
 * Form where the user can enter their compentece.
 * @param {function} props.nextPage - function the stores the form data and send the user to the next page 
 * @returns View component - form
 */
export default function CompetenceForm(props){
    
    return(
        <div className="container">
        <div className="row justify-content-center my-5">
        <div className="col-lg-6">
            <h1 className="text-center mb-4">Application form</h1>
            <form onSubmit={ (e) => {props.nextPage(e)} } id="xp">
            <div className="form-control mb-4 bg-secondary">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="ticketSales" name="ticketSales"/>
                    <label className="form-label" htmlFor="ticketSales">Ticket sales</label>
                    
                </div>
                <input className="form-range" type="range" min="1" max="10" id="ticketSalesExperience" name="ticketSalesExperience"/>
            </div>

            <div className="form-control mb-4 bg-secondary">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="lotteries" name="lotteries"/>
                    <label className="form-label" htmlFor="lotteries">Lotteries</label>
                </div>
                <input className="form-range" type="range" min="1" max="10" id="lotteriesExperience" name="lotteriesExperience"/>
            </div>

            
            <div className="form-control mb-4 bg-secondary">
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