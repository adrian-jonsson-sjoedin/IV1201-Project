import { useState } from "react";
import { redirect } from "react-router-dom";
import { CompetenceForm, 
        AvailabilityForm, 
        ConfimData, 
        ConfirmCompetence, 
        ConfirmAvailability} from "../views";

export default function Apply(props) {
    const [page, setPage] = useState(0);
    const [application, setApplication] = useState();
    

    const loader = () => {
        const user = props.model.currentUser
        if(!user){
            redirect('/')
        }
        if(user.role_id !== 1){
            redirect('/')
        }
        return null 
    }

    const view = () => {
        switch(page){
            case 0:
                return <CompetenceForm nextPage={handleSubmit}/>;
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
            if(formData.ticketSales){
                competence_profile = [{competence: 1, years_of_experience: formData.ticketSalesExperience}]
            }
            if(formData.lotteries){
                competence_profile =  [...competence_profile,
                    {competence: 2, years_of_experience: formData.lotteriesExperience}]
            }
            if(formData.rollerCoasterOperation){
                competence_profile =  [...competence_profile,
                    {competence: 3, years_of_experience: formData.rollerCoasterExperiences}]
            }
            setApplication({competence_profile})
    }

    function validateAvailability(formData) {
        if(!formData.from_date || !formData.to_date){
            alert('fill in the availability period')
            return;
        }

        var availability = [formData]
        if(application.availability){
            availability = [...application.availability, formData]
        }
        console.log('set ava')
        setApplication({...application, availability})
        setPage(page + 1)  
    }
    
    return (
        <>
            {loader() || view()}
        </>
    );
}