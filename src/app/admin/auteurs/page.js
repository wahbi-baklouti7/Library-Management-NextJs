import Listauteurs from "@/components/auteurComponents/listauteurs"
import { fetchAuteurs } from "@/services/auteurService";
const getAuteurs = async () => {
  const data = await fetchAuteurs();
  return data;
};
const AuteurPage = async () => {
  const auteurs = await getAuteurs();
  console.log(auteurs);
  return (
    <div>
      <Listauteurs auteurs={auteurs} />
    </div>
  );
};
export default AuteurPage;
