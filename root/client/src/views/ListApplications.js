
export function ListApplications({applications}){
    
    return applications ? (
        <div className="container">
        <div className="row justify-content-center my-5">
        <div className="col-lg-6">
        
        <table className="table table-bordered table-dark">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Surname</th>
                <th scope="col">Status</th>
            </tr>
        </thead>
        <tbody>
            {applications.map( (appli) => {
                return(
                    <tr key={appli.id}><td>{appli.name}</td><td>{appli.surname}</td><td>{appli.status}</td></tr>
                )
            })}
        </tbody>
        </table>

        </div> 
        </div>
        </div>
    ) : <div></div>
}