const getcommunities = async () => {
    try {
        
        const data = await fetch('https://back-nextweb.onrender.com/community', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        
        })

        const comm = await data.json()

        return comm

    }

    catch (e) {
        console.error(e)
        alert('Não foi possível encontrar comunidades, tente novamente mais tarde')
        throw e
    }
}

export default getcommunities