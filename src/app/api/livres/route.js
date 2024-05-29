import { HttpStatusCode } from "axios";
import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";
import Livre from "@/app/models/Livre";

export async function POST(req) {
  try {
    await connectDB(); // Connexion à la base de données
    const body = await req.json(); // Extraction du corps de la requête
    console.log(body); // Affichage du corps de la requête dans la console du navigateur

    if (body.titre) { // Vérification de la présence du titre dans le corps de la requête
      const livre = await Livre.create(body); // Création d'un nouveau livre dans la base de données
      return NextResponse.json(
        { livre, message: "Your book has been created" },// Réponse JSON avec le livre créé
        { status: HttpStatusCode.Created } // Statut HTTP 201 Created
      );
    }
    return NextResponse.json(
      { message: "Title is missing" }, // Message d'erreur si le titre est manquant
      { status: HttpStatusCode.BadRequest } // Statut HTTP 400 Bad Request
    );
  } catch (error) {
    return NextResponse.json(
      { message: error }, // Message d'erreur en cas d'exception
      { status: HttpStatusCode.BadRequest } // Statut HTTP 400 Bad Request
    );
  }
}
export async function GET() {
  try {
    await connectDB();
    const livres = await Livre.find({}, null, { sort: { _id: -1 } })
      .populate('auteurs')
      .populate('specialite')
      .populate('maised');
    return NextResponse.json(livres);
  } catch (error) {
    return NextResponse.json({ error: error });
  }
}
