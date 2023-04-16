import { ErrorView, ListApplications } from "../views"
import { fetchAllApplications } from "../models/Applications"
import { useEffect, useState } from "react"

export default function Applications({model}){
    const [isLoading, setIsLoading] = useState()
    const [error, setError] = useState()
    const [applications, setApplications] = useState()

    useEffect( () => {
        if(isLoading || applications){return}
        setIsLoading("loading")
        fetchAllApplications(model.currentUser.token)
        .then( res => {
            setApplications(res)
            setIsLoading(null)
        })
        .catch( err => {
            setError("error")
            setIsLoading(null)
        })
    }, [])

    return isLoading ? (
        <div className="loader"></div>
    ) : error ? (
        <ErrorView />
    ) : (
        <ListApplications applications={applications}/>
    )
}