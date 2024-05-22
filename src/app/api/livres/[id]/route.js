import Livre from "@/models/Livre";
import connectDB from "@/lib/connectDB";
import { HttpStatusCode } from "axios";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  try {
    await connectDB();
    const livre = await Livre.findById(params.id);
    if (livre) {
      const body = await req.json();
      if (body.titre) {
        livre.titre = body.titre;
      }
      if (body.isbn) {
        livre.isbn = body.isbn;
      }
      if (body.annedition) {
        livre.annedition = body.annedition;
      }
      if (body.prix) {
        livre.prix = body.prix;
      }
      if (body.qtestock) {
        livre.qtestock = body.qtestock;
      }
      if (body.couverture) {
        livre.couverture = body.couverture;
      }
      if (body.specialite) {
        livre.specialite = body.specialite;
      }
      if (body.maised) {
        livre.maised = body.maised;
      }
      if (body.auteurs) {
        livre.auteurs = body.auteurs;
      }
      livre.save();
      return NextResponse.json({ livre });
    }
    return NextResponse.json(
      { message: `Livre ${params.id} not found` },
      { status: HttpStatusCode.NotFound }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error },
      { status: HttpStatusCode.BadRequest }
    );
  }
}

export async function DELETE(_, { params }) {
  try {
    await Livre.findByIdAndDelete(params.id);
    return NextResponse.json({
      message: `Book ${params.id} has been deleted`,
    });
  } catch (error) {
    return NextResponse.json(
      { message: error },
      { status: HttpStatusCode.BadRequest }
    );
  }
}
