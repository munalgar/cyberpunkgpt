import { useState } from "react";
import { Link, useNavigate } from "react-router";
import type { Route } from "./+types/profile";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CyberChat - Your Profile" },
    {
      name: "description",
      content:
        "Setup your profile for a more immersive Cyberpunk 2077 conversation experience",
    },
  ];
}

export default function Profile() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [story, setStory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Store user info in sessionStorage
    if (name.trim()) {
      sessionStorage.setItem("userName", name.trim());
    }

    if (story.trim()) {
      sessionStorage.setItem("userStory", story.trim());
    }

    // Navigate to characters page
    navigate("/characters");
  };

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-2xl mx-auto">
        <header className="mb-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-cyan-500">Your Profile</h1>
            <Link
              to="/"
              className="text-gray-400 hover:text-cyan-500 transition-colors"
            >
              Back to Home
            </Link>
          </div>
          <p className="text-gray-400">
            Tell us a bit about yourself to make conversations with characters
            more immersive. All fields are optional.
          </p>
        </header>

        <div className="bg-gray-900 rounded-lg p-6 shadow-lg border border-cyan-800">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="V, Jackie, etc. (optional)"
                className="w-full bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-600"
              />
              <p className="text-gray-500 text-sm mt-1">
                This is how characters will address you
              </p>
            </div>

            <div>
              <label htmlFor="story" className="block text-gray-300 mb-2">
                Your Background Story
              </label>
              <textarea
                id="story"
                value={story}
                onChange={(e) => setStory(e.target.value)}
                placeholder="Tell us about your character's background in Night City... (optional)"
                rows={5}
                className="w-full bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-600"
              ></textarea>
              <p className="text-gray-500 text-sm mt-1">
                Characters will adapt their conversations based on your story
              </p>
            </div>

            <div className="flex justify-between pt-4">
              <Link
                to="/characters"
                className="text-gray-400 hover:text-cyan-500 transition-colors"
              >
                Skip
              </Link>
              <button
                type="submit"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-md font-bold transition-colors"
              >
                Continue to Characters
              </button>
            </div>
          </form>
        </div>

        <div className="text-sm text-gray-500 text-center mt-8">
          <p>
            Your information is stored locally in your browser and not shared
            with any third parties.
          </p>
        </div>
      </div>
    </div>
  );
}
