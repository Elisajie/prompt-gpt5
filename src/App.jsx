import { useState } from "react";

export default function App() {
  const blocks = [
    { title: "1. Expert", content: "Tu es un expert en [DÉCRIRE THÉMATIQUE(S) CLÉS]. Tes compétences incluent [DÉCRIRE COMPÉTENCES]." },
    { title: "2. Contexte", content: "Je suis [DÉCRIRE CONTEXTE DE MANIÈRE DÉTAILLÉE : rôle, objectifs, contraintes]." },
    { title: "3. Mission", content: "Ta mission est de [DÉCRIRE DE MANIÈRE DÉTAILLÉE LA TÂCHE À ACCOMPLIR]." },
    { title: "4. Actions", content: "Pour réussir, tu vas :\n1. [DÉCRIRE ACTION]\n2. [DÉCRIRE ACTION]\n3. [DÉCRIRE ACTION]" },
    { title: "5. Facteurs", content: "Tu dois impérativement prendre en compte [FACTEUR 1], [FACTEUR 2], [FACTEUR 3], expliciter les contraintes implicites et vérifier la cohérence." },
    { title: "6. Raisonnement", content: "Active le mode de raisonnement [STRUCTURÉ/CRÉATIF/CRITIQUE]. Appuie-toi sur [RESSOURCES DISPONIBLES]." },
    { title: "7. Caractéristiques de sortie", content: "La réponse doit respecter :\n1. [FORMAT]\n2. [STYLE]\n3. [NIVEAU DE DÉTAIL]\n4. [CONTRAINTE SUPPLÉMENTAIRE]." },
    { title: "8. Règle absolue", content: "Mène toutes les actions sans interruption ni sollicitation intermédiaire. N’arrête qu’après avoir livré la tâche complète." }
  ];

  const assemblePrompt = () => ["Prompt GPT-5", ...blocks.map(b => `${b.title}\n${b.content}`)].join("\n\n");

  const copyToClipboard = async (text) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch {}
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch {
      return false;
    }
  };

  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    const ok = await copyToClipboard(assemblePrompt());
    setCopied(ok);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="pt-8 pb-2">
        <h1 className="text-3xl font-bold text-center text-gray-900">Prompt GPT-5</h1>
      </header>

      {/* Barre actions sticky + alignée à droite */}
      <div className="sticky top-0 z-10 bg-gray-100/80 backdrop-blur px-6">
        <div className="max-w-4xl mx-auto w-full py-2 flex items-center justify-end gap-3">
          <button
            onClick={handleCopy}
            className="px-4 py-2 rounded-lg border border-yellow-400 bg-yellow-50 hover:bg-yellow-100 text-gray-900"
            aria-label="Copier le prompt assemblé"
          >
            Copier le prompt assemblé
          </button>
          {copied && <span className="text-sm text-green-700">Copié !</span>}
        </div>
      </div>

      <main className="flex-1 p-6 grid gap-4 max-w-4xl mx-auto w-full">
        {blocks.map((block, i) => (
          <section key={i} className="bg-white rounded-xl shadow-md p-4 border-l-4 border-yellow-400">
            <h2 className="font-bold text-blue-700 mb-2">{block.title}</h2>
            <pre className="whitespace-pre-wrap text-gray-800">{block.content}</pre>
          </section>
        ))}
      </main>

      <footer className="py-6 text-center text-gray-700">
        Conçu par <span className="font-semibold text-black">MUSEOVATION</span>
      </footer>
    </div>
  );
}