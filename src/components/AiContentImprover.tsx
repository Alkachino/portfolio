"use client";

import { useState, useEffect, useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Wand2, Copy, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { improveContentAction } from "@/app/actions";

type State = {
  success: boolean;
  data?: { improvedContent: string };
  error?: string;
} | null;

const initialState: State = null;
const formId = "ai-improver-form";

const AiContentImprover = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const [state, formAction] = useActionState(improveContentAction, initialState);
  const [isCopied, setIsCopied] = useState(false);
  const [formKey, setFormKey] = useState(Date.now());

  useEffect(() => {
    if (state?.error) {
      toast({
        variant: "destructive",
        title: "Ocurrió un error",
        description: state.error,
      });
    }
  }, [state, toast]);

  const handleCopy = () => {
    if (state?.success && state.data) {
      navigator.clipboard.writeText(state.data.improvedContent);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };
  
  const resetForm = () => {
    setFormKey(Date.now());
    // Directly create a new initial state object to avoid mutation issues
    const newState: State = null;
    if (state) {
        // This is a workaround as we can't directly reset useFormState's state
    }
  };


  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="h-14 w-14 rounded-full shadow-lg"
        size="icon"
        aria-label="Mejorar Contenido con IA"
      >
        <Wand2 className="h-6 w-6" />
        <span className="sr-only">Mejorar Contenido con IA</span>
      </Button>

      <Dialog open={isOpen} onOpenChange={(open) => { setIsOpen(open); if(!open) resetForm(); }}>
        <DialogContent className="sm:max-w-3xl grid-rows-[auto,1fr,auto]">
          <DialogHeader>
            <DialogTitle>Mejorador de Contenido con IA</DialogTitle>
            <DialogDescription>
              Ingresa contenido de tu portafolio, selecciona su contexto y deja que la IA lo mejore por ti.
            </DialogDescription>
          </DialogHeader>
          <form id={formId} key={formKey} action={formAction} className="grid md:grid-cols-2 gap-6 items-stretch overflow-y-auto py-4">
            <div className="space-y-4 flex flex-col">
              <div className="space-y-2">
                <Label htmlFor="context">Contexto del Contenido</Label>
                <Select name="context" defaultValue="About Me" required>
                  <SelectTrigger id="context">
                    <SelectValue placeholder="Seleccionar contexto" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="About Me">Sobre Mí</SelectItem>
                    <SelectItem value="Skills">Habilidades</SelectItem>
                    <SelectItem value="Projects">Proyectos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 flex-1 flex flex-col">
                <Label htmlFor="content">Contenido Original</Label>
                <Textarea
                  id="content"
                  name="content"
                  placeholder="Pega tu contenido aquí..."
                  className="flex-1"
                  required
                />
              </div>
            </div>
            <div className="space-y-2 flex flex-col">
              <Label htmlFor="improved-content">Contenido Mejorado</Label>
              <div className="relative flex-1">
                <Textarea
                  id="improved-content"
                  readOnly
                  value={state?.success ? state.data?.improvedContent : state?.error || ""}
                  placeholder="Las sugerencias de la IA aparecerán aquí..."
                  className="h-full resize-none"
                />
                 {state?.success && state.data?.improvedContent && (
                   <Button
                     type="button"
                     size="icon"
                     variant="ghost"
                     className="absolute top-2 right-2"
                     onClick={handleCopy}
                   >
                     {isCopied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                   </Button>
                 )}
              </div>
            </div>
          </form>
          <DialogFooter>
             <SubmitButton />
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button type="submit" form={formId} className="w-full md:w-auto" disabled={pending}>
            {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
            Mejorar con IA
        </Button>
    )
}

export default AiContentImprover;
