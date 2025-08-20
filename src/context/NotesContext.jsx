import { createContext, useContext, useState } from "react";

const NotesContext = createContext();

export const useNotes = () => useContext(NotesContext);

export function NotesProvider({ children }) {
  const [notes, setNotes] = useState([
    { id: 1, title: "Welcome!", content: "This is your first note 🚀" },
  ]);

  const addNote = (note) => setNotes([...notes, { id: Date.now(), ...note }]);
  const deleteNote = (id) => setNotes(notes.filter((n) => n.id !== id));
  const updateNote = (id, updatedNote) =>
    setNotes(notes.map((n) => (n.id === id ? updatedNote : n)));

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote, updateNote }}>
      {children}
    </NotesContext.Provider>
  );
}
