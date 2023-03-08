/**
 * Form where the user can enter their compentece.
 * @param {function} props.nextPage - function the stores the form data and send the user to the next page 
 * @returns View component - form
 */
export default function CompetenceForm(props){
    let yearArray = [];
    let monthArray = [];

    for(let i = 1; i <= 30; i++){
        yearArray[i] = i;
    }
    for(let i = 0; i < 12; i++){
        monthArray[i] = i;
    }

    function experienceOptions(year){
        return(
            <option key={year} value={year}>{year}</option>
        );
    }

    return(
        <div className="container">
        <div className="row justify-content-center my-5">
        <div className="col-lg-6">
            <h1 className="text-center mb-4">Application form</h1>
            <form onSubmit={ (e) => {props.nextPage(e)} } id="xp" className="form-control mb-4 bg-secondary">

            <span className="text-light">Please enter your previous experience</span>
            
            {props.competenceList.map( (competence) => {
                return (
                <div className="input-group mt-4 " key={competence.competence_id}>
                    <div className="input-group-text bg-dark">
                        <input className="form-check-input mt-0" type="checkbox" id={competence.competence_id} name={competence.competence_id}/>
                    </div>
                    <span className="input-group-text bg-dark text-light">{competence.name}</span>
                    <select className="form-select bg-dark text-light" name={"years_" + competence.competence_id} defaultValue={"Years"}>
                        <option disabled>Years</option>
                        {yearArray.map(experienceOptions)}
                    </select>
                    <select className="form-select bg-dark text-light" name={"months_" + competence.competence_id} defaultValue={"Months"}>
                        <option disabled>Months</option>
                        {monthArray.map(experienceOptions)}
                    </select>
                </div>
                );
            })}

            <div className="row px-2">
                <button type="submit" className="btn btn-primary btn-block my-4">Next</button>
            </div>
        </form>
        </div>
        </div>
        
        </div>
        
    );
}