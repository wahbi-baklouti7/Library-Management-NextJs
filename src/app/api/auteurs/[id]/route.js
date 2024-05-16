import connectDB from "@/lib/connectDB";
import Auteur from "@/models/Auteur";
import { HttpStatusCode } from "axios";
import { NextResponse } from "next/server";



export async function GET(_, { params }) {
    try {
    await connectDB();
    const auteur = await Auteur.findById(params.id);
    if (auteur) {
    return NextResponse.json({ auteur });
    }
    return NextResponse.json({ message: `Auteur ${params.id} not found` }, {
    status: HttpStatusCode.NotFound });
    } catch (error) {
    return NextResponse.json({ message: error }, { status:
    HttpStatusCode.BadRequest });
    }
    }