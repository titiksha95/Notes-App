import { useNotes } from "../context/NotesContext";

export default function NoteCard({ note, onEdit }) {
  const { deleteNote } = useNotes();

  return (
    <div className="p-4 rounded-xl shadow bg-white dark:bg-gray-800">
      <h3 className="font-semibold text-lg mb-2">{note.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{note.content}</p>

      <div className="flex justify-between">
        <button
          onClick={() => onEdit(note)}
          className="px-3 py-1 rounded-lg bg-gray-500 text-white text-sm hover:bg-gray-600"
        >
          Edit
        </button>
        <button
          onClick={() => deleteNote(note.id)}
          className="px-3 py-1 rounded-lg bg-sky-500 text-white text-sm hover:bg-sky-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
