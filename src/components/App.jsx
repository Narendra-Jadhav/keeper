import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
// import notes from "../notes";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />

      {/* * If we have to include some notes from backend */}
      {/* {notes.map((note) => (
        <Note key={note.key} title={note.title} content={note.content} />
      ))} */}

      {/* <Note key={1} title="Note title" content="Note content" /> */}

      {notes.map((noteItem, index) => {
        return <Note key={uuidv4()} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
