import connectDB from "@/lib/connectDB";
import Specialite from "@/models/Specialitie";
import { HttpStatusCode } from "axios";
import { NextResponse } from "next/server";



export async function POST(req) {
    try {
      await connectDB();
      const body = await req.json();
      if (body.nomspecialite) {
        const specialite = await Specialite.create(body);
        return NextResponse.json(
          { specialite, message: "Your author has been created" },
          { status: HttpStatusCode.Created }
        );
      }
      return NextResponse.json(
        { message: "Specialite name is missing" },
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
      const specialites = await Specialite.find();
      const nbSpecialities = await Specialite.countDocuments();
      return NextResponse.json({
        nbSpecialities,
        specialites,
      });
    } catch (e) {
      return NextResponse.json({ error });
    }
  }