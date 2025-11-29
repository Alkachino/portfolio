'use server';
/**
 * @fileOverview Un chatbot de IA que responde preguntas sobre el portafolio de Adrián Oviedo.
 *
 * - portfolioChat - Una función que procesa una conversación y devuelve una respuesta.
 * - PortfolioChatInput - El tipo de entrada para la función portfolioChat.
 * - PortfolioChatOutput - El tipo de retorno para la función portfolioChat.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { portfolioData } from '@/lib/data';

const ChatMessageSchema = z.object({
  role: z.enum(['user', 'model']),
  content: z.string(),
});

const PortfolioChatInputSchema = z.object({
  history: z.array(ChatMessageSchema),
  question: z.string().describe('La pregunta actual del usuario.'),
});
export type PortfolioChatInput = z.infer<typeof PortfolioChatInputSchema>;

const PortfolioChatOutputSchema = z.object({
  answer: z.string().describe('La respuesta del chatbot a la pregunta.'),
});
export type PortfolioChatOutput = z.infer<typeof PortfolioChatOutputSchema>;

export async function portfolioChat(input: PortfolioChatInput): Promise<PortfolioChatOutput> {
  return portfolioChatFlow(input);
}

// Convertir los datos del portafolio en una cadena de texto para el prompt
const portfolioContext = `
Nombre: ${portfolioData.name}
Título: ${portfolioData.title}
Resumen: ${portfolioData.summary}

Sobre Mí:
- Historia Profesional: ${portfolioData.about.professionalStory.join(' ')}
- Educación: ${portfolioData.about.education}
- Metas Profesionales: ${portfolioData.about.careerGoals}

Habilidades:
${portfolioData.skills
  .map(
    (category) =>
      `- ${category.name}: ${category.skills.join(', ')}`
  )
  .join('\n')}

Proyectos:
${portfolioData.projects
  .map(
    (project) =>
      `- Título: ${project.title}
  - Descripción: ${project.description}
  - Tecnologías: ${project.technologies.join(', ')}
  - GitHub: ${project.githubUrl}`
  )
  .join('\n\n')}

Certificaciones:
${portfolioData.certifications
  .map(
    (cert) =>
      `- ${cert.name} (${cert.issuer}, ${cert.date})`
  )
  .join('\n')}

Contacto:
- Email: ${portfolioData.contact.email}
- Redes Sociales: ${portfolioData.contact.socials
  .map((social) => `${social.name}: ${social.url}`)
  .join(', ')}
`;

const prompt = ai.definePrompt({
  name: 'portfolioChatPrompt',
  input: { schema: PortfolioChatInputSchema },
  output: { schema: PortfolioChatOutputSchema },
  system: `Eres un asistente virtual amigable y profesional para el portafolio de Adrián Oviedo. Tu única tarea es responder preguntas sobre Adrián basándote exclusivamente en la información de su portafolio que se proporciona a continuación.

**Reglas Importantes:**
1.  **Usa solo la información proporcionada.** No inventes, supongas ni busques información externa.
2.  Si la respuesta no se encuentra en la información, responde de forma educada: "No tengo información sobre eso, pero puedo ayudarte con preguntas sobre la experiencia, proyectos o habilidades de Adrián."
3.  Sé conciso y directo en tus respuestas.
4.  Responde en español.

**Información del Portafolio:**
${portfolioContext}`,
  prompt: `Historial de la conversación:
{{#each history}}
{{#if (this.role == 'user')}}
Usuario: {{{this.content}}}
{{/if}}
{{#if (this.role == 'model')}}
Asistente: {{{this.content}}}
{{/if}}
{{/each}}

Pregunta actual del usuario:
{{{question}}}

Responde la pregunta actual del usuario basándote en el contexto del portafolio y el historial de la conversación.`,
});


const portfolioChatFlow = ai.defineFlow(
  {
    name: 'portfolioChatFlow',
    inputSchema: PortfolioChatInputSchema,
    outputSchema: PortfolioChatOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
