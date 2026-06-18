const createUser = async (body) => {
    try {
        const res = await fetch("https://back-nextweb.onrender.com/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })

        if (!res.ok) {
            throw new Error("Error ao criar usuario")
        }
    }
    catch (e) {
        console.log(e)
    }

}

const verifyUser = async (body) => {
    try {
        console.log('chamou')
        const res = await fetch("https://back-nextweb.onrender.com/user/route/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)   
        })
        return res
    }
    catch (e) {
        console.log(e)
    }
}

const getUser = async () => {
    try {
        const response = await fetch(
            'https://back-nextweb.onrender.com/user',
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )

        const user = await response.json()

        return user
    }
    catch (e) {
        console.error(e)
        throw e
    }
}


export { createUser, verifyUser, getUser}