import { prisma } from "@/lib/prisma";
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const documents = await prisma.document.findMany();
        return NextResponse.json(documents);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Failed to fetch documents' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const newDocument = await prisma.document.create({
            data: data,
        });
        return NextResponse.json(newDocument, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Failed to create document' }, { status: 500 });
    }
}