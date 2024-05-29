import Listediteurs from "@/components/editeurComponents/listediteurs"
import { fetchEditeurs } from "@/services/editeurService";
const getEditeurs = async () => {
  const data = await fetchEditeurs();
  return data;
};
const EditeurPage = async () => {
  const editeurs = await getEditeurs();
  console.log(editeurs);
  return (
    <div>
      <Listediteurs editeurs={editeurs} />
    </div>
  );
};
export default EditeurPage;
