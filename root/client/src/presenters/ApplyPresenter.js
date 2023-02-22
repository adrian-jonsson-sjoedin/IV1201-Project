import { useState } from "react";
import { redirect } from "react-router-dom";
import { CompetenceForm, AvailabilityForm, ConfimData } from "../views";

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
                return <ConfimData data={application} nextPage={handleSubmit} setPage={setPage} page={page}/>;
            case 2:
                return <AvailabilityForm nextPage={handleSubmit} setPage={setPage} page={page}/>;
            case 3:
                return <ConfimData data={application} nextPage={handleSubmit} setPage={setPage} page={page}/>;
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
        if(page === 2) {
            validateAvailability(formData)
            setPage(page + 1)
        }
        if(page === 3){
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
                console.log(competence_profile)
            }
            if(formData.lotteries){
                competence_profile =  [...competence_profile,
                    {competence: 2, years_of_experience: formData.lotteriesExperience}]
                console.log(competence_profile)
            }
            if(formData.rollerCoasterOperation){
                competence_profile =  [...competence_profile,
                    {competence: 3, years_of_experience: formData.rollerCoasterExperiences}]
                console.log(competence_profile)
            }
            setApplication({competence_profile})
    }

    function validateAvailability(formData) {
        var availability = [formData];
        setApplication({...application, availability})  
    }
    
    return (
        <>
            {loader() || view()}
        </>
    );
}