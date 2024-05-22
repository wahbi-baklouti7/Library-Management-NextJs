import { fetchAuteurs } from "@/services/auteurService";



const getAuteurs = async () => {
    const data = await fetchAuteurs();
    console.log("data!!!!!!!!!!!!!!!!!!!!!!!!!!: "+data)
    return data;
}

const AuteurPage = async () => {
    const auteurs = await getAuteurs();
    return (
        <div>
            <h1>Auteurs</h1>
            <ul>
                {auteurs.map((auteur) => (
                    <li key={auteur._id}>{auteur.nomauteur}</li>
                ))} 
            </ul>
            </div>
    )
}

export default AuteurPage