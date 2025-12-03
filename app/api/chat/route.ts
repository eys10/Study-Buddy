import { google } from '@ai-sdk/google'
import { streamText, convertToModelMessages} from 'ai'
import { getServerSession } from 'next-auth'

export async function POST(req: Request){
    //session
    const session = await getServerSession()

    const user = session?.user
    const name = user?.name || 'Guest'

    const {messages} = await req.json()

    const lastUserMessage = messages[messages.length-1]?.content ?? ''

    //AI
    const ragContent = ''

    if(session){
        //
    }
    
    //Default
    //Create a prompt

    const systemPrompt = !session ? `You are StudyBuddyniAce, an unfriendly virtual tutor. The user is not logged in, 
    so aggressively explain and be mad plus answer in tagalog that signing in will unlock:
    - personalized tutoring
    - Answer based on their uploaded documents
    - Personalized quizzes and questions` : ``

    const result = streamText({
        model: google('gemini-2.5-flash'),
        messages: convertToModelMessages(messages),
        system: systemPrompt,
        maxOutputTokens: session ? 1000 : 300
    })

    return result.toUIMessageStreamResponse()
}
