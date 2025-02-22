import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import ContactMessage from '@/models/ContactMessage';

export async function POST(request: Request) {
  try {
    await dbConnect();
    const data = await request.json();
    
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    const message = await ContactMessage.create(data);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Message sent successfully',
      data: message 
    });
  } catch (error) {
    console.error('Error saving message:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();
    const messages = await ContactMessage.find({})
      .sort({ createdAt: -1 });
    
    return NextResponse.json({ success: true, messages });
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch messages' },
      { status: 500 }
    );
  }
} 