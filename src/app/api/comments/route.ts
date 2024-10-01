import { NextResponse } from 'next/server';
import data from '@/data/data.json';

// Datos de ejemplo para simular una base de datos en memoria
const commentsData = data;

// GET: Obtener todos los comentarios
export async function GET() {
    return NextResponse.json(commentsData);
}

// POST: Agregar un nuevo comentario
export async function POST(req: Request) {
    const newComment = await req.json();
    newComment.id = commentsData.comments.length + 1;
    commentsData.comments.push(newComment);
    return NextResponse.json(newComment, { status: 201 });
}

// PUT: Actualizar un comentario existente
export async function PUT(req: Request) {
    const updatedComment = await req.json();
    const { id } = updatedComment;

    const commentIndex = commentsData.comments.findIndex((comment) => comment.id === id);

    if (commentIndex !== -1) {
        commentsData.comments[commentIndex] = updatedComment;
        return NextResponse.json(updatedComment, { status: 200 });
    } else {
        return NextResponse.json({ error: 'Comentario no encontrado' }, { status: 404 });
    }
}

// DELETE: Eliminar un comentario
export async function DELETE(req: Request) {
    const { id } = await req.json();

    const commentIndex = commentsData.comments.findIndex((comment) => comment.id === id);

    if (commentIndex !== -1) {
        commentsData.comments.splice(commentIndex, 1);
        return NextResponse.json({ message: 'Comentario eliminado' }, { status: 200 });
    } else {
        return NextResponse.json({ error: 'Comentario no encontrado' }, { status: 404 });
    }
}
