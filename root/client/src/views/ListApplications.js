
export function ListApplications({applications}){
    
    return applications ? (
        <div className="container">
        <div className="row justify-content-center my-5">
        <div className="col-lg-6">
        
        <table>
        {applications.map( (appli) => {
                return(
                    <tr key={appli.surname}><td>{appli.name}</td><td>{appli.surname}</td><td>{appli.status}</td></tr>
                )
            })}
        </table>

        </div> 
        </div>
        </div>
    ) : <div></div>
}