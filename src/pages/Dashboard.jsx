import { useState } from "react";
import { useNotes } from "../context/NotesContext";
import NoteCard from "../components/NoteCard";
import NoteModal from "../components/NoteModal";
import Navbar from "../components/Navbar";

export default function Dashboard({ onLogout }) {
  const { notes } = useNotes();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingNote, setEditingNote] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar onLogout={onLogout} />
      <div className="p-6 max-w-6xl mx-auto">
        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Your Notes
          </h2>
          <button
            onClick={() => {
              setEditingNote(null);
              setIsModalOpen(true);
            }}
            className="px-5 py-2 rounded-lg bg-sky-600 text-white font-medium shadow hover:shadow-lg hover:bg-sky-700 transition"
          >
            + Add Note
          </button>
        </div>

        {notes.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-400 text-center">
            No notes yet. Add your first one!
          </p>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {notes.map((note) => (
              <NoteCard
                key={note.id}
                note={note}
                onEdit={(n) => {
                  setEditingNote(n);
                  setIsModalOpen(true);
                }}
              />
            ))}
          </div>
        )}
      </div>

      <NoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        editingNote={editingNote}
      />
    </div>
  );
}
