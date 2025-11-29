"use client";

import { useState, useRef, useEffect, useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Bot, Send, Loader2, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { portfolioChatAction } from "@/app/actions";
import { cn } from "@/lib/utils";

type Message = {
  role: "user" | "model";
  content: string;
};

type State = {
  success: boolean;
  data?: { answer: string };
  error?: string;
} | null;

const initialState: State = null;
const formId = "portfolio-chat-form";

const PortfolioChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [state, formAction] = useActionState(portfolioChatAction, initialState);
  const [formKey, setFormKey] = useState(Date.now());
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (state) {
      if (state.success && state.data) {
        setMessages((prev) => [...prev, { role: "model", content: state.data.answer }]);
      } else if (state.error) {
        setMessages((prev) => [...prev, { role: "model", content: `Lo siento, ocurrió un error: ${state.error}` }]);
      }
      setFormKey(Date.now()); // Reset form after submission
    }
  }, [state]);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);
  
  const handleFormAction = (formData: FormData) => {
    const question = formData.get('question') as string;
    if (!question.trim()) return;

    setMessages(prev => [...prev, { role: 'user', content: question }]);
    formAction(formData);
  }

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (open && messages.length === 0) {
        setMessages([
            { role: "model", content: "¡Hola! Soy el asistente virtual de Adrián. ¿En qué puedo ayudarte sobre su portafolio?" }
        ]);
    }
  }

  return (
    <>
      <Button
        onClick={() => handleOpenChange(true)}
        className="h-14 w-14 rounded-full shadow-lg"
        size="icon"
        aria-label="Abrir Chatbot"
      >
        <Bot className="h-6 w-6" />
      </Button>

      <Sheet open={isOpen} onOpenChange={handleOpenChange}>
        <SheetContent className="flex flex-col">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <Bot /> Asistente Virtual
            </SheetTitle>
            <SheetDescription>
              Pregúntame cualquier cosa sobre Adrián y su portafolio.
            </SheetDescription>
          </SheetHeader>
          <ScrollArea className="flex-1 my-4 pr-4" ref={scrollAreaRef}>
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-start gap-3",
                    message.role === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  {message.role === "model" && (
                    <Avatar className="h-8 w-8">
                      <AvatarFallback><Bot size={18} /></AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={cn(
                      "max-w-xs rounded-lg px-4 py-2 text-sm md:max-w-md",
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    )}
                  >
                    {message.content}
                  </div>
                  {message.role === "user" && (
                    <Avatar className="h-8 w-8">
                      <AvatarFallback><User size={18}/></AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
               <PendingMessage />
            </div>
          </ScrollArea>
          <SheetFooter>
            <form id={formId} key={formKey} action={handleFormAction} className="flex w-full items-center space-x-2">
              <input type="hidden" name="history" value={JSON.stringify(messages)} />
              <Input
                name="question"
                type="text"
                placeholder="Escribe tu pregunta..."
                autoComplete="off"
                disabled={false} // Will be controlled by SubmitButton's pending state
              />
              <SubmitButton />
            </form>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};


function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button type="submit" size="icon" disabled={pending}>
            {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            <span className="sr-only">Enviar</span>
        </Button>
    )
}

function PendingMessage() {
    const { pending } = useFormStatus();

    if (!pending) return null;
    
    return (
        <div className="flex items-start gap-3 justify-start">
            <Avatar className="h-8 w-8">
                <AvatarFallback><Bot size={18} /></AvatarFallback>
            </Avatar>
            <div className="bg-muted rounded-lg px-4 py-3">
                <Loader2 className="h-5 w-5 animate-spin" />
            </div>
        </div>
    )
}

export default PortfolioChatbot;
