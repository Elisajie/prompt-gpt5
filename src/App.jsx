export default function App() {
  const blocks = [
    {
      title: "1. Expert",
      content:
        "Tu es un expert en [DÉCRIRE THÉMATIQUE(S) CLÉS]. Tes compétences incluent [DÉCRIRE COMPÉTENCES].",
    },
    {
      title: "2. Contexte",
      content:
        "Je suis [DÉCRIRE CONTEXTE DE MANIÈRE DÉTAILLÉE : rôle, objectifs, contraintes].",
    },
    {
      title: "3. Mission",
      content:
        "Ta mission est de [DÉCRIRE DE MANIÈRE DÉTAILLÉE LA TÂCHE À ACCOMPLIR].",
    },
    {
      title: "4. Actions",
      content:
        "Pour réussir, tu vas :\n1. [DÉCRIRE ACTION]\n2. [DÉCRIRE ACTION]\n3. [DÉCRIRE ACTION]",
    },
    {
      title: "5. Facteurs",
      content:
        "Tu dois impérativement prendre en compte [FACTEUR 1], [FACTEUR 2], [FACTEUR 3], expliciter les contraintes implicites et vérifier la cohérence.",
    },
    {
      title: "6. Raisonnement",
      content:
        "Active le mode de raisonnement [STRUCTURÉ/CRÉATIF/CRITIQUE]. Appuie-toi sur [RESSOURCES DISPONIBLES].",
    },
    {
      title: "7. Caractéristiques de sortie",
      content:
        "La réponse doit respecter :\n1. [FORMAT]\n2. [STYLE]\n3. [NIVEAU DE DÉTAIL]\n4. [CONTRAINTE SUPPLÉMENTAIRE].",
    },
    {
      title: "8. Règle absolue",
      content:
        "Mène toutes les actions sans interruption ni sollicitation intermédiaire. N’arrête qu’après avoir livré la tâche complète.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="pt-8 pb-4">
        <h1 className="text-3xl font-bold text-center text-gray-900">
          Prompt GPT-5
        </h1>
      </header>

      <main className="flex-1 p-6 grid gap-4 max-w-4xl mx-auto w-full">
        {blocks.map((block, i) => (
          <section
            key={i}
            className="bg-white rounded-xl shadow-md p-4 border-l-4 border-yellow-400"
          >
            <h2 className="font-bold text-blue-700 mb-2">{block.title}</h2>
            <pre className="whitespace-pre-wrap text-gray-800">
              {block.content}
            </pre>
          </section>
        ))}
      </main>

      <footer className="py-6 text-center text-gray-700">
        Conçu par <span className="font-semibold text-black">MUSEOVATION</span>
      </footer>
    </div>
  );
}

