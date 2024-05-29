import { fetchEditeurs } from "@/services/editeurService";
import { fetchAuteurs } from "@/services/auteurService";
import NewLivre from "@/components/livreComponent/NewLivre";
import { fetchSpecialites } from "@/services/specialitieService";

const getEditeurs = async () => {
  const data = await fetchEditeurs();

  return data;
};

const getAuteurs = async () => {
  const data = await fetchAuteurs();
  return data;
};

const getSpecialite = async () => {
  const data = await fetchSpecialites();
  console.log(data);
  return data;
};

const AjoutLivrePage = async () => {
  const editeurs = await getEditeurs();
  const auteurs = await getAuteurs();
  const specialite = await getSpecialite();
  return (
    <div>
      <NewLivre
        LesEditeurs={editeurs}
        lesSpecialites={specialite}
        lesAuteurs={auteurs}
      />
    </div>
  );
};

export default AjoutLivrePage;
