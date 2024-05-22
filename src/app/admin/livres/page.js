import ListLivres from "@/components/livreComponent/ListLivres";
import { fetchLivres } from "@/services/livreService";

const getLivres = async () => {
    const data = await fetchLivres();
    console.log("*********************** data ********************************* " + data);

  return data;
};

const LivrePage = async () => {
  const livres = await getLivres();

  console.log("******************************************************** " + livres);
  return (<ListLivres livres={livres} />);
};

export default LivrePage;
