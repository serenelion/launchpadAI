import { useChat } from 'ai/react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col h-[600px] w-full max-w-2xl mx-auto p-4">
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                'flex w-max max-w-[80%] flex-col gap-2 rounded-lg px-4 py-2 text-sm',
                message.role === 'user'
                  ? 'ml-auto bg-primary text-primary-foreground'
                  : 'bg-muted'
              )}
            >
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage
                    src={message.role === 'user' ? '/user.png' : '/bot.png'}
                    alt={message.role}
                  />
                  <AvatarFallback>
                    {message.role === 'user' ? 'U' : 'B'}
                  </AvatarFallback>
                </Avatar>
                <span className="font-semibold">
                  {message.role === 'user' ? 'You' : 'AI'}
                </span>
              </div>
              <div className="whitespace-pre-wrap">{message.content}</div>
            </div>
          ))}
        </div>
      </ScrollArea>
      <form onSubmit={handleSubmit} className="flex items-center gap-2 p-4">
        <Input
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message..."
          className="flex-1"
        />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
} 