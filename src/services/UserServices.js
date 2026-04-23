const createUser = async (body) => {
    try {
        const res = await fetch("", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })

        if (!res.ok) {
            throw new Error("Error ao criar usuario")
        }

        const data = await res.json()

    }
    catch (e) {
        console.log(e)
    }

}

export { createUser }