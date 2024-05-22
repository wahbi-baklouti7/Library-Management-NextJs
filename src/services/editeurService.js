import { ConstructionOutlined } from "@mui/icons-material";

const EDITEUR_API = "/editeurs/";


export const fetchEditeurs = async () => {

    try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + EDITEUR_API, { 'cache': 'no-store' });
        const response = await res.json()
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"+response.editeurs)

    return response 
    } catch (e) {
        console.log(e)
    }

   
}


export const fetchEditeurById = async (editeur)=>{
    
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + EDITEUR_API + `${editeur}`, { 'cache': 'no-store' },
        {
            method: "GET",
        }

    )

    const response = await res.json()
    return response
    
}


export const deleteEditeur = async (editeur) => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + EDITEUR_API + `${editeur}`, {
        method: "DELETE",
    })
    const response = await res.json()
    return response
}


export const addEditeur = async (editeur) => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + EDITEUR_API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(editeur),
    })
    const response = await res.json()
    return response
}

export const editEditeur = async (editeur) => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + EDITEUR_API + `${editeur._id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(editeur),
    });

    const response = res.json();
    return response;
}