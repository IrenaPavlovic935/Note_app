import React from 'react';
import AddImage from '../static/images/add-new.png';

const NoteList = ({ notes, onEditNote, onDeleteNote, onAddNote }) => {
  return (
    <div className='notes_list'>
      {/* {notes.length > 0 && <h2>List of your notes</h2>} */}
      <div className='list'>
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <div className='informatins'>
                <h3>{note.title}</h3>
                <p>{note.content}</p>
                <div className='edit_delete'>
                  <button className='create' onClick={() => onEditNote(note)}>Edit</button>
                  <button className='cancel' onClick={() => onDeleteNote(note)}>Delete</button>
                </div>
              </div>
            </li>
          ))}
            <div className="last_card">
            <button className='add_note_btn'  onClick={onAddNote}>
            +Add New 
            </button>
            <img src={AddImage}  />
        </div>
        </ul>
      </div>
    </div>
  );
};

export default NoteList;
