import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AuthContext";

const useFetch = (url) => {
    const { state } = useContext(AuthContext)
    const [data, setData] = useState([])

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            await axios.get(url, {
                headers: {
                    Authorization: state.token
                }
            })
                .then(res => {
                    setData(res.data.data);
                    setLoading(false)
                    // console.log('res: ', res);
                })
                .catch(e => {
                    setError(e)
                    // console.log('e: ', e);
                })

        }
        fetchData()
    }, [])

    const reFetch = async () => {
        setLoading(true);
        try {
            const res = await axios.get(url,{
                headers: {
                    Authorization: state.token
                }
            });
            setData(res.data.data)
        } catch (error) {
            setError(error)
        }
        setLoading(false)
    }

    return { data, loading, error, reFetch }
};

export default useFetch;
