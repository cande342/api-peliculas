import { NextResponse } from "next/server";//acá vamos a importar la api de next para response.
import data from '@/data.json'

export async function GET() {
    const movie = data;
    return NextResponse.json(movie);
}

export async function POST(request:Request) {
    const newMovie = await request.json();

    // Agrega la nueva película al array
    data.push(newMovie);

    return NextResponse.json({
        message: 'Movie added successfully',
        data,    
    });
}


export async function DELETE(request:Request) {
    
    const { id } = await request.json();
    const index = data.findIndex(movie => movie.id === id);

    if (index === -1) {
      return NextResponse.json({ message: 'Movie not found' });
    }

    data.splice(index, 1);

    return NextResponse.json(data);
}