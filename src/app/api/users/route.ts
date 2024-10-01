
import { connectToDatabase } from '@/libs/mongodb';
import { NextResponse } from 'next/server';
import User from '@/models/User';

// GET: Obtener todos los usuarios
export async function GET() {
    await connectToDatabase();
    const users = await User.find({});
    return NextResponse.json(users);
}

// POST: Crear un nuevo usuario
export async function POST(request: Request) {
    await connectToDatabase();
    const user = await User.create(await request.json());
    return NextResponse.json(user);
}