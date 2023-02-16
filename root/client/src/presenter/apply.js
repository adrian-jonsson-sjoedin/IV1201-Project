import { useState } from "react";
import { Experience, Availability, ConfimData } from "../view/applicationView";

export default function Apply() {
    const [page, setPage] = useState(0);
    const [application, setApplication] = useState();

    const view = () => {
        switch(page){
            case 0:
                return <Experience nextPage={handleSubmit}/>;
            case 1:
                return <ConfimData data={application} nextPage={handleSubmit} setPage={setPage} page={page}/>;
            case 2:
                return <Availability nextPage={handleSubmit} setPage={setPage} page={page}/>;
            case 3:
                return <ConfimData data={application} nextPage={handleSubmit} setPage={setPage} page={page}/>;
            default:
                return <Experience nextPage={handleSubmit}/>;
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
        var competenceProfile = [];
            if(formData.ticketSales){
                competenceProfile = [{competence: 1, yearsOfExperience: formData.ticketSalesExperience}]
                console.log(competenceProfile)
            }
            if(formData.lotteries){
                competenceProfile =  [...competenceProfile,
                    {competence: 2, yearsOfExperience: formData.lotteriesExperience}]
                console.log(competenceProfile)
            }
            if(formData.rollerCoasterOperation){
                competenceProfile =  [...competenceProfile,
                    {competence: 3, yearsOfExperience: formData.rollerCoasterExperiences}]
                console.log(competenceProfile)
            }
            setApplication({competenceProfile})
    }

    function validateAvailability(formData) {
        var availability = [formData];
        setApplication({...application, availability})  
    }
    
    return (
        <>
            {view()}
        </>
    );
}