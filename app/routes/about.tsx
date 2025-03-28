import { Link } from "react-router";
import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CyberChat - About" },
    { name: "description", content: "About the CyberChat application" },
  ];
}

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-cyan-500">
              About CyberChat
            </h1>
            <Link
              to="/"
              className="text-gray-400 hover:text-cyan-500 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </header>

        <div className="bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-800 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              What is CyberChat?
            </h2>
            <p className="text-gray-300">
              CyberChat is an AI-powered messaging application that lets you
              have conversations with characters from the Cyberpunk 2077
              universe. Using Google's Gemini API, the characters respond in a
              way that reflects their personality, knowledge, and background.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              How It Works
            </h2>
            <p className="text-gray-300 mb-4">
              CyberChat uses Google's Gemini AI to generate responses that match
              each character's unique personality. Each character has been
              carefully designed with knowledge about their background,
              relationships, and experiences in Night City.
            </p>
            <p className="text-gray-300">
              When you send a message, the AI considers the character's
              perspective and responds as they would in the game, creating an
              immersive conversational experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              Available Characters
            </h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>
                <span className="text-cyan-400">Johnny Silverhand</span> -
                Rockerboy, war veteran, and terrorist with a vendetta against
                Arasaka Corporation.
              </li>
              <li>
                <span className="text-cyan-400">Judy Alvarez</span> - Braindance
                technician and expert in virtual reality technologies.
              </li>
              <li>
                <span className="text-cyan-400">Panam Palmer</span> - Nomad and
                skilled driver with connections throughout the Badlands.
              </li>
              <li>
                <span className="text-cyan-400">V</span> - The protagonist
                mercenary of Cyberpunk 2077.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              Disclaimer
            </h2>
            <p className="text-gray-300">
              This is a fan project and is not affiliated with CD Projekt Red or
              Cyberpunk 2077. All character likenesses and the Cyberpunk 2077
              universe are property of their respective owners.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
