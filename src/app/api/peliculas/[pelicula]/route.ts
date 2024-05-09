
import { NextResponse } from "next/server";
import data from '@/data.json'



//Podemos usar el parámetro para que reciba las disntitas id y muestre distintos objetos dentro del json(o la db)

export async function GET(request:Request, context: any) {
    const { params } = context;
    const movie = data.filter(x => params.pelicula === x.id.toString())

    return NextResponse.json({
        movie,    
    });
}