import { Link } from "react-router";
import type { Route } from "../+types/characters";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CyberChat - Characters" },
    {
      name: "description",
      content: "Choose a Cyberpunk 2077 character to chat with",
    },
  ];
}

// Character data - in a real app this would come from an API or database
const characters = [
  {
    id: "johnny-silverhand",
    name: "Johnny Silverhand",
    description:
      "Rockerboy, war veteran, and terrorist with a vendetta against Arasaka Corporation.",
    image: "https://via.placeholder.com/150?text=Johnny",
  },
  {
    id: "judy-alvarez",
    name: "Judy Alvarez",
    description:
      "Braindance technician and editor at Lizzie's Bar, expert in virtual reality tech.",
    image: "https://via.placeholder.com/150?text=Judy",
  },
  {
    id: "panam-palmer",
    name: "Panam Palmer",
    description:
      "Nomad and former member of the Aldecaldos clan, expert driver and mechanic.",
    image: "https://via.placeholder.com/150?text=Panam",
  },
  {
    id: "v",
    name: "V",
    description: "Mercenary, netrunner, and protagonist of Cyberpunk 2077.",
    image: "https://via.placeholder.com/150?text=V",
  },
];

export default function CharactersList() {
  return (
    <div className="min-h-screen bg-black text-white p-4">
      <header className="max-w-6xl mx-auto mb-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-cyan-500">
            Choose a Character
          </h1>
          <Link
            to="/"
            className="text-gray-400 hover:text-cyan-500 transition-colors"
          >
            Back to Home
          </Link>
        </div>
        <p className="text-gray-400 mb-8">
          Select a character from Night City to start a conversation.
        </p>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {characters.map((character) => (
          <Link
            key={character.id}
            to={`/characters/${character.id}`}
            className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-cyan-600 transition-colors"
          >
            <div className="aspect-square bg-gray-800 overflow-hidden">
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-cyan-400">
                {character.name}
              </h2>
              <p className="text-gray-400 text-sm">{character.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
