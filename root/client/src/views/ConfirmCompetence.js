/**
 * View component meant to show the applicaiton data back to the user
 * with the ability the go back and edit previously input data
 * @param {Object} props.competenceProfile - Array containing the competence and years of experience
 * @returns View component
 */
export default function ConfirmCompetence(props) {

    return (
        <div className="container">
        <div className="row justify-content-center my-5">
        <div className="col-lg-6">
            <h1 className="text-center mb-4">Confim information</h1>

            <p> Ticket sales experience: {experience(1)} years of experience</p>
            <p> Lotteries experience: {experience(2)} years of experience</p>
            <p> Roller Coaster operation experience: {experience(3)} years of experience</p>
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

    function experience(id){
        const competence = props.competenceProfile.find( e => e.competence === id)
        if(!competence){
            return 0
        }
        return competence.years_of_experience
    }
}