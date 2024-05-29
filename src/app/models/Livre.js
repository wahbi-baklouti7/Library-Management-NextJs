import mongoose from "mongoose";

import Editeur from "./Editeur";
import Auteur from "./Auteur";
import Specialite from "./Specialite";
var livreSchema = mongoose.Schema(
  {
    isbn: String,
    titre: {type:String,required:true},
    annedition:Number,
    qtestock:Number,
    prix:Number,
    couverture:String,
    specialite:{
      type: mongoose.Schema.Types.ObjectId,
      ref: Specialite,
    },
    maised:{
      type: mongoose.Schema.Types.ObjectId,
      ref: Editeur,
    },
    auteurs: [{
        type: mongoose.Schema.Types.ObjectId,
      ref: Auteur,
  }],

});
const Livre = mongoose.models.Livre || mongoose.model("Livre", livreSchema);
export default Livre;
