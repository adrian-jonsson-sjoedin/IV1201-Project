import { useEffect, useState } from "react";
import { fetchCompetenceList } from "../models/Competence";
import { CompetenceForm, 
        AvailabilityForm, 
        ConfimData, 
        ConfirmCompetence, 
        ConfirmAvailability,
        ErrorView} from "../views";



/**
 * Presenter controlling the multipage application form
 * @param {Object} model - The application model
 * @returns view
 */        
export default function Apply({model}) {
    const [page, setPage] = useState(0);
    const [application, setApplication] = useState();
    const [competences, setCompetences] = useState();
    const [error, setError] = useState();

    useEffect( () => {
        if(competences){
            return;
        }
        fetchCompetenceList()
        .then(res => {
            setCompetences(res)
        })
        .catch(err => {
            setError(err)
        })
    }, [competences])
    

    const view = () => {
        switch(page){
            case 0:
                return <CompetenceForm nextPage={handleSubmit} competenceList={competences}/>;
            case 1:
                return <ConfirmCompetence competenceProfile={application.competence_profile} nextPage={handleSubmit} setPage={setPage} page={page}/>;
            case 2:
                return <AvailabilityForm nextPage={handleSubmit} setPage={setPage} page={page}/>;
            case 3:
                return <ConfirmAvailability availability={application.availability} nextPage={handleSubmit} setPage={setPage} page={page}/>;
            default:
                return <CompetenceForm nextPage={handleSubmit}/>;
        }
    }

    async function submitApplication(){
        //send application object
        
        //if OK setPage(page + 1) to success page 
    }

    function handleSubmit(formEvent) {

        if(formEvent){
            formEvent.preventDefault();
            var formData = new FormData(formEvent.target);
            formData = Object.fromEntries(formData);
        }
        
        if(page === 0) {
            validateCompetence(formData)
            setPage(page + 1)
        }
        else if(page === 2) {
            validateAvailability(formData)
        }
        else if(page === 3){
            submitApplication()
        }
        else {
            setPage(page + 1)
        }
    }

    function validateCompetence(formData) {
        var competence_profile = [];

            competences.forEach(element => {
                let id = element.competence_id
                let years = "years_" + id
                let months = "months_" + id
                if(formData[String(id)]){
                    let xp = formData[years] ? Number(formData[years]) : 0;
                    xp += formData[months] ? Number(formData[months] * (1/12)) : 0;
                    xp = Number(xp.toFixed(1))
                    
                    competence_profile = [...competence_profile,
                    {competence: id,
                    years_of_experience: xp}]
                }
            });

            setApplication({competence_profile})
    }

    function validateAvailability(formData) {
        let from_date = new Date(formData.from_date)
        let to_date = new Date(formData.to_date)
        if(from_date.getTime() > to_date.getTime()){
            alert("From date most be before the to date")
            return
        }

        var availability = [formData]
        if(application.availability){
            application.availability.forEach( ava => {
                if((new Date(ava.from_date) < from_date && new Date(ava.to_date) > from_date) ||
                    (new Date(ava.from_date) < to_date && new Date(ava.to_date) > to_date)){
                    alert("Availability periods can't overlap")
                }
                return;
            })

            availability = [...application.availability, formData]
        }
        
        setApplication({...application, availability})
        setPage(page + 1)  
    }
    
    return competences ? (
        view()
    ) : error ? (
        <ErrorView />
    ) : (
        <div className="loader"></div>
    )
}