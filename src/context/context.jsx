import React, { createContext, useEffect, useState } from 'react';

const Context = createContext()

function ContextProvider({ children }) {
    const [ipAddress, setIpAddress] = useState("");
    const [apiResults, setApiResults] = useState({})
    const apiKey = 'at_Sgj4LfS0v3EL4OjNdhm4t1sf6EaVR';

    const inputIp = (e) => {
        const { value } = e.target;
        setIpAddress(value);
    }

    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`;

    const fetchData = () => {
        fetch(url)
            .then(res => res.json())
            .then(data => setApiResults(data))
    }

    useEffect(() => {
        fetchData();
    }, [])

    async function searchIp() {
        // await fetchData()
        const response = await fetch(url);
        const data = await response.json();
        setApiResults(data);
        setIpAddress('');
    }

    const values = {
        inputIp, ipAddress, apiResults, searchIp
    }
    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }