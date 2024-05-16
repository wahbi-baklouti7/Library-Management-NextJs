import connectDB from "@/lib/connectDB";
import Specialite from "@/models/Specialitie";
import { HttpStatusCode } from "axios";
import { NextResponse } from "next/server";

export async function GET(_, { params }) {
  try {
    await connectDB();
    const specialite = await Specialite.findById(params.id);
    if (specialite) {
      return NextResponse.json({ specialite });
    }
    return NextResponse.json(
      { message: `Specialitie ${params.id} not found` },
      {
        status: HttpStatusCode.NotFound,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error },
      { status: HttpStatusCode.BadRequest }
    );
  }
}

export async function PUT(req, { params }) {
  try {
    await connectDB();
    const specialite = await Specialite.findById(params.id);
    if (specialite) {
      const body = await req.json();
      specialite.nomspecialite = body.nomspecialite;
      specialite.email = body.email;
      specialite.numtel = body.numtel;
      specialite.save();
      return NextResponse.json({ specialite });
    }
    return NextResponse.json(
      { message: `Specialitie ${params.id} not found` },
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
    await connectDB();
    const specialite = await Specialitie.findById(params.id);
    if (specialite) {
      await Specialitie.findByIdAndDelete(specialite._id);
      return NextResponse.json({
        message: `Specialitie ${params.id} has been
        
        deleted`,
      });
    }

    return NextResponse.json(
      { message: `Specialitie ${params.id} not found` },
      {
        status: HttpStatusCode.NotFound,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error },
      { status: HttpStatusCode.BadRequest }
    );
  }
}
