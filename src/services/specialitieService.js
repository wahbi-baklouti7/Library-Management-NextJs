const SPECIALITE_API = "/specialites/";


export const fetchSpecialites = async () => {

    try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + SPECIALITE_API, { 'cache': 'no-store' }
            
 );

        const response = await res.json()
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


export const fetchSpecialiteById = async (specialite)=>{
    
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + SPECIALITE_API + `${specialite}`, { 'cache': 'no-store' },
        {
            method: "GET",
        }

    )

    const response = res.json()
    return response
    
}


export const deleteSpecialite = async (specialite) => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + SPECIALITE_API + `${specialite}`, {
        method: "DELETE",
    })
    const response = await res.json()
    return response
}


export const addSpecialite = async (specialite) => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + SPECIALITE_API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(specialite),
    })
    const response = await res.json()
    return response
}

export const editSpecialite = async (specialite) => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + SPECIALITE_API + `${specialite._id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(specialite),
    });

    const response = res.json();
    return response;
}