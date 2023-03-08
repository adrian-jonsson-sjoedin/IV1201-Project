import { ErrorView, ListApplications } from "../views"
import { fetchAllApplications } from "../models/Applications"
import { useEffect, useState } from "react"

export default function Applications(){
    const [isLoading, setIsLoading] = useState()
    const [error, setError] = useState()
    const [applications, setApplications] = useState()

    useEffect( () => {
        if(isLoading || applications){return}
        setIsLoading("loading")
        fetchAllApplications()
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