import mongoose from "mongoose";

 let editeurSchema = mongoose.Schema(
   {
         maisonedit: String,
         sitweb: String,
         email:String,
   }
)
 
const Editeur = mongoose.models.Editeur || mongoose.model("Editeur", editeurSchema);


export default Editeur;