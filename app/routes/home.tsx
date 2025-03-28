import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CyberChat - Talk to Cyberpunk 2077 Characters" },
    {
      name: "description",
      content:
        "Chat with your favorite characters from Night City powered by Gemini AI",
    },
  ];
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-gray-200 p-4">
      <div className="max-w-4xl w-full space-y-8">
        <header className="text-center">
          <h1 className="text-6xl font-bold text-cyan-500 mb-4">CyberChat</h1>
          <p className="text-xl text-gray-400">
            Connect with Night City's most iconic characters
          </p>
        </header>

        <div className="bg-gray-900 rounded-lg p-6 shadow-lg border border-cyan-800">
          <p className="mb-4">
            Welcome to CyberChat, where the line between reality and Night City
            blurs. Using Gemini AI, you can now have conversations with your
            favorite characters from the Cyberpunk 2077 universe.
          </p>

          <p className="mb-4">
            Ask Johnny Silverhand about his vendetta against Arasaka, seek
            advice from Judy Alvarez on braindance technology, or just chat with
            V about life in Night City.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              to="/characters"
              className="bg-cyan-600 hover:bg-cyan-700 text-white py-3 px-6 rounded-md font-bold transition-colors"
            >
              Start Chatting
            </Link>
          </div>
        </div>

        <div className="text-sm text-gray-500 text-center mt-8">
          <p>Powered by Gemini AI • Not affiliated with CD Projekt Red</p>
        </div>
      </div>
    </main>
  );
}
