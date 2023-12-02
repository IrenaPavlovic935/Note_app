import React, { useState, useEffect } from 'react';
import AddNoteModal from './components/AddNoteModal';
import NoteList from './components/NoteList';
import ConfirmDeleteModal from './components/ConfirmDeleteModal';
import Home from './components/Home';
import { FaBook } from 'react-icons/fa';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [isAddNoteModalOpen, setAddNoteModalOpen] = useState(false);
  const [editNote, setEditNote] = useState(null);
  const [isConfirmDeleteModalOpen, setConfirmDeleteModalOpen] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState(null);
  const [showHome, setShowHome] = useState(true);

  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  const openAddNoteModal = () => {
    setAddNoteModalOpen(true);
    setShowHome(false);
  };

  const closeAddNoteModal = () => {
    setAddNoteModalOpen(false);
    setEditNote(null);
  };

  const handleAddNote = (newNote) => {
    if (editNote) {
      const updatedNotes = notes.map((note) =>
        note.id === editNote.id ? { ...note, ...newNote } : note
      );
      setNotes(updatedNotes);
      setEditNote(null);

      localStorage.setItem('notes', JSON.stringify(updatedNotes));
    } else {
      const updatedNotes = [{ ...newNote, id: Date.now() }, ...notes];
      setNotes(updatedNotes);

      localStorage.setItem('notes', JSON.stringify(updatedNotes));
    }

    closeAddNoteModal();
  };

  const handleEditNote = (noteToEdit) => {
    setEditNote(noteToEdit);
    openAddNoteModal();
  };

  const handleDeleteNote = (noteToDelete) => {
    setNoteToDelete(noteToDelete);
    setConfirmDeleteModalOpen(true);
  };

  const handleCancelDelete = () => {
    setConfirmDeleteModalOpen(false);
    setNoteToDelete(null);
  };

  const handleConfirmDelete = () => {
    const updatedNotes = notes.filter((note) => note.id !== noteToDelete.id);
    setNotes(updatedNotes);
    setEditNote(null);
    setNoteToDelete(null);
    setConfirmDeleteModalOpen(false);

    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  return (
    <div className='note'>
      {showHome ? (
        <Home onAddNote={openAddNoteModal} />
      ) : (
        <>
          <div className='add-note'>
            <div className='tape'>
            <h1><FaBook /> Notes</h1>
            <div className='nav'>
            <button className='show_home_btn' onClick={() => setShowHome(true)}>
              Home
            </button>
            <a className='list_link' href='#'>
              / List
            </a>
          </div>
            </div>
{/*             
            <button className='add_note_btn' onClick={openAddNoteModal}>
              Add Note
            </button> */}
           
          </div>

          <AddNoteModal
            isOpen={isAddNoteModalOpen}
            onClose={closeAddNoteModal}
            onAddNote={handleAddNote}
            editNote={editNote}
          />
          <NoteList
            notes={notes}
            onEditNote={handleEditNote}
            onDeleteNote={handleDeleteNote}
            onAddNote={openAddNoteModal} 
          />
          <ConfirmDeleteModal
            isOpen={isConfirmDeleteModalOpen}
            onCancel={handleCancelDelete}
            onConfirm={handleConfirmDelete}
            itemName={noteToDelete ? noteToDelete.title : ''}
          />
        </>
      )}
    </div>
  );
};

export default App;

