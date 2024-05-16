import connectDB from "@/lib/connectDB";
import Editeur from "@/models/Editeur";
import { HttpStatusCode } from "axios";
import { NextResponse } from "next/server";



export async function POST(req) {
    try {
      await connectDB();
      const body = await req.json();
      if (body.maisonedit) {
        const editeur = await Editeur.create(body);
        return NextResponse.json(
          { editeur, message: "Your editeur has been created" },
          { status: HttpStatusCode.Created }
        );
      }
      return NextResponse.json(
        { message: "Editeur name is missing" },
        {
          status: HttpStatusCode.BadRequest,
        }
      );
    } catch (error) {
      return NextResponse.json(
        { message: error },
        { status: HttpStatusCode.BadRequest }
      );
    }
}
  



export async function GET() {
    try {
      await connectDB();
      const editeurs = await Editeur.find();
      const nbEditeurs = await Editeur.countDocuments();
      return NextResponse.json({
        nbEditeurs,
        editeurs,
      });
    } catch (e) {
      return NextResponse.json({ error });
    }
  }