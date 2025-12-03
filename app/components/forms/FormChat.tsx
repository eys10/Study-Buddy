'use client'

import { useChat } from '@ai-sdk/react'
import { useState, useRef, useEffect } from 'react'
import { UserRound, Bot } from 'lucide-react'
import ReactMarkdown from 'react-markdown'

export default function FormChat() {
  // AI SDK
  const { messages, sendMessage } = useChat({
    onError: (error) => {
      console.log('error: ', error)
      setError(error.toString())
    },
  })

  // States
  const [error, setError] = useState('')
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Ref for auto-scrolling
  const messagesEndRef = useRef<HTMLDivElement>(null)

    // Scroll to bottom whenever messages change
    useEffect(() => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
      }
    }, [messages])

  // Functions
  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()

      // trigger
      const form = e.currentTarget.form
      if (form && input.trim()) {
        form.requestSubmit()
      }
    }

    
  }

  // Handle chat
  async function handleChat(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!input) return

    try {
      setIsLoading(true)
      await sendMessage({ text: input })
      setInput('')
    } catch (error: any) {
      console.log('error: ', error)
      setError(error.toString())
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className=" w-1/2">

      {/* Message Display Area */}
      {messages && messages.length > 0 && (
        <div className="flex-1 flex flex-col gap-1 overflow-hidden">
          {messages.map((message) => (
            <div
              data-loading={isLoading}
              key={message.id}
              className={`flex gap-3  p-2 ${message.role === 'user' ? ' flex-row-reverse' : 'justify-start'}`}
            >
              {message.role === 'user' ? (
                <div className="h-10 w-10 aspect-square rounded-full border flex items-center justify-center bg-white">
                  <UserRound />
                </div>
              ) : (
                <div className="h-10 w-10 aspect-square rounded-full border flex items-center justify-center bg-white">
                  <Bot />
                </div>
              )}
              
              {message.parts.map((part, i) => {
                switch (part.type) {
                  case 'text':
                    return (
                      <div
                        key={`${message.id}-${i}`}
                        className={`${message.role === 'user' ? 'bg-red-600 text-white flex flex-col items-center p-3 rounded-md' : `bg-gray-100 flex flex-col items-center p-3 rounded-md`}`}
                      >
                        <div className="[&>p]:mb-3 [&>p]:last:mb-0 [&>ul]:mb-4 [&>ul>li]:list-disc [&>ul>li]:ml-5 [&>ol>li]:list-decimal [&>ol>li]:ml-5">
                          <ReactMarkdown>{part.text}</ReactMarkdown>
                        </div>
                      </div>
                    )
                }
              })}
            </div>
          ))}
          {/** Mark end of chat */}
          <div ref={messagesEndRef} />
        </div>
      )}
      <form
        data-loading={isLoading}
        onSubmit={(e) => handleChat(e)}
        className="max-w-full w-full mx-auto flex-1 sticky bottom-0 flex flex-col gap-2 p-4 bg-white border-1 border-gray-300 shadow-md rounded-lg"
      >
        <div className="form-control">
          <textarea
            name="message"
            placeholder="What do you want to know?"
            className="w-full h-20 p-2 rounded-lg resize-none focus:border-none focus:outline-none"
            onKeyDown={handleKeyDown}
            value={input}
            onChange={(e) => {
              console.log(e.currentTarget.value)
              setInput(e.currentTarget.value)
            }}
          ></textarea>
        </div>

        {error && <div className="alert alert--error">{error}</div>}

        <div className="flex mt-2 justify-end">
          {/* <button className='button button--default'>
            + Add files
          </button> */}
          <button type="submit" className="button button--primary">
            {isLoading ? 'Thinking...' : 'Send'}
          </button>
        </div>
      </form>
    </div>
  )
}