const AUTEUR_API = "/auteurs/";


export const fetchAuteurs = async () => {

    try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + AUTEUR_API, { 'cache': 'no-store' },
        {

            method: "GET",
        }

    );
    const response = await res.json()
    // console.log(response)
    return response 
    } catch (error) {
        console.log(error)
    }
    
}


export const fetchAuteurById = async (auteur)=>{
    

    try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + AUTEUR_API + `${auteur}`, { 'cache': 'no-store' },
        {
            method: "GET",
            
        }

    )

    const response = res.json()
    return response

    } catch (error) {
        if (error.name === "SyntaxError") {
            console.error("Error parsing JSON:", error);
            // Handle the error gracefully, such as displaying an error message to the user
        } else {
            console.error("Error fetching data:", error);
        }
    }

    
    
}


export const deleteAuteur = async (auteur) => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + AUTEUR_API + `${auteur}`, {
        method: "DELETE",
    })
    const response = await res.json()
    return response
}


export const addAuteur = async (auteur) => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + AUTEUR_API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(auteur),
    })
    const response = await res.json()
    return response
}

export const editAuteur = async (auteur) => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + AUTEUR_API + `${auteur._id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(auteur),
    });

    const response = res.json();
    return response;
}