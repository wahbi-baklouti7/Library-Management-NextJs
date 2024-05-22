import { fetchEditeurs } from "@/services/editeurService";
import { fetchAuteurs } from "@/services/auteurService"
import NewLivre from "@/components/livreComponent/NewLivre"
import { fetchSpecialites } from "@/services/specialitieService"


const getEditeurs = async () => {
    
    const editeurs = await fetchEditeurs() ;
    return editeurs;
}


const getAuteurs = async () => {
    const auteurs = await fetchAuteurs()
    return auteurs;
}

const getSpecialite = async () => {
    const specialite = await fetchSpecialites();
    return specialite;
}



const AjoutLivrePage = async () => {
    const editeurs = await getEditeurs();
    const auteurs = await getAuteurs();
    const specialite = await getSpecialite();
    return (
        <div>
        <NewLivre LesEditeurs={editeurs} lesSpecialites={specialite}
        lesAuteurs={auteurs} />
        </div>
        )
}

export default AjoutLivrePage