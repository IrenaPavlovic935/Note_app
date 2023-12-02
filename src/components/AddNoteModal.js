import React, { useState, useEffect } from 'react';
import NotesImage from '../static/images/notes.jpg';

const AddNoteModal = ({ isOpen, onClose, onAddNote, editNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (editNote || isOpen) {
      setTitle(editNote ? editNote.title || '' : '');
      setContent(editNote ? editNote.content || '' : '');
    }
  }, [editNote, isOpen]);

  const handleSave = () => {
    if (!title.trim() || !content.trim()) {
      return;
    }

    const newNote = {
      title,
      content,
    };

    if (editNote) {
      newNote.id = editNote.id;
    }

    onAddNote(newNote);
  };

  const handleCancel = () => {
    setTitle('');
    setContent('');
    onClose();
  };

  return (
    <div className={`add_note_form ${isOpen ? 'open' : ''}`}>
      <div className='input'>
        <div className='left_side'>
        <img src={NotesImage}  />
          
        </div>
        <div className='right_side'>
          <h1>{editNote ? 'Edit Note' : 'Add New Note'}</h1>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Add your notes"
          />
        </div>
        <button className='create_notes' onClick={handleSave}>
          {editNote ? 'Edit' : 'Create'}
        </button>
        <button className='cancel' onClick={handleCancel}>
          Cancel
        </button>
      </div>
        </div>
        
    </div>
  );
};

export default AddNoteModal;
