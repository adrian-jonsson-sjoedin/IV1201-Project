/**
 * View component meant to show the applicaiton data back to the user
 * with the ability the go back and edit previously input data
 * @param {Object} props.competenceProfile - Array containing the competence and years of experience
 * @returns View component
 */
export default function ConfirmAvailability(props) {

    return (
        <div className="container">
        <div className="row justify-content-center my-5">
        <div className="col-lg-6">
            <h1 className="text-center mb-4">Confim information</h1>

            {props.availability.map(listAvailability)}
            <div className="row px-2">
            <div className="btn-group mb-4 px-0" role="group">
                <button onClick={ () => {props.availability.pop(); props.setPage(props.page - 1)}} type="button" className="btn btn-warning ">Back</button>
                <button onClick={ () => {props.setPage(props.page - 1)}}type="button" className="btn btn-secondary ">Add availability period</button>
                <button onClick={ () => {props.nextPage()}}type="button" className="btn btn-primary ">Next</button>
            </div> 
            </div>
        </div>
        </div>        
        </div>
    );

    function listAvailability(availability){
        return <div className="text-center" key={availability.from_date}><p>From {availability.from_date} To {availability.to_date}</p></div>
    }
}