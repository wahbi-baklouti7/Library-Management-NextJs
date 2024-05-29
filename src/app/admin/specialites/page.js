import Listspecialites from "@/components/specialiteComponents/listspecialites"
import { fetchSpecialites } from "@/services/specialiteService";
const getSpecialites = async () => {
  const data = await fetchSpecialites();
  return data;
};
const AuteurPage = async () => {
  const specialites = await getSpecialites();
  console.log(specialites);
  return (
    <div>
      <Listspecialites specialites={specialites} />
    </div>
  );
};
export default AuteurPage;
