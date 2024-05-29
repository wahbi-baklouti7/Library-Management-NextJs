import mongoose from "mongoose";
var EditeurSchema = mongoose.Schema(
  {
    maisonedit: String,
    siteweb: String,
    email: String,
  },
  {
    timestamps: true,
  }
);
const Editeur = mongoose.models.Editeur || mongoose.model("Editeur", EditeurSchema);
export default Editeur;
