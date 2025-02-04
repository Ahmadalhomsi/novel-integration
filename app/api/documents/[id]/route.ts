import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {


    try {
        const { id } = await params;

        if (!id) {
            return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
        }

        const document = await prisma.document.findUnique({
            where: { id },
        });
        if (!document) {
            return NextResponse.json({ error: 'Document not found' }, { status: 404 });
        }
        return NextResponse.json(document, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {

    try {
        const { id } = await params;

        if (!id) {
            return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
        }

        const data = await req.json();
        const str = JSON.stringify(data);

        // console.log(str);

        const updatedDocument = await prisma.document.update({
            where: { id },
            data: {
                content: str
            }
        });
        return NextResponse.json(updatedDocument, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = await params;

    if (!id) {
        return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }

    try {
        await prisma.document.delete({
            where: { id },
        });
        return NextResponse.json(null, { status: 204 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}