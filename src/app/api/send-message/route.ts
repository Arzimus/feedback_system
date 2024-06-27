import dbConnect from "@/lib/dbConnect";
import UserModel, { Message, } from "@/model/User";



export async function POST(request: Request) {
  await dbConnect()
  const { username, content } = await request.json()

  try {
    const user = await UserModel.findOne({
      username
    })
    if (!user) {
      return Response.json({
        success: false,
        message: 'User doesnot exist'
      }, { status: 404 })
    }

    if (!user.isAcceptingMessage) {
      return Response.json({
        success: false,
        message: 'User is not accepting messages'
      }, { status: 403 })
    }

    const newMessage = { content, createdAt: new Date() }
    user.messages.push(newMessage as Message)
    user.save()

    return Response.json({
      success: true,
      message: 'Message sent successfully'
    }, { status: 201 })

  } catch (error) {
    console.error('Error adding message:', error);
    return Response.json(
      { message: 'Internal server error', success: false },
      { status: 500 }
    );
  }
}