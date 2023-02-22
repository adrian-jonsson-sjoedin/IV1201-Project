/**
 * View component meant to show the applicaiton data back to the user
 * with the ability the go back and edit previously input data
 * @param {Object} props.data - application object containing competence profile and availability
 * @returns View component
 */
export default function ConfimData(props) {
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