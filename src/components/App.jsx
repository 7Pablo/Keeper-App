import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    const [noteArray, setNoteArray] = useState([]);

    function addNote(note) {
        setNoteArray(prevValue => {
            return [...prevValue, note];
        });
    }

    function deleteNote(id) {
        setNoteArray((prevValue) => {
            return prevValue.filter((note, index) => {
                return index !== id;
            });
        })
    }
    
    return (
        <div>
          <Header />
          <CreateArea onAdd={addNote}/>
          {noteArray.map((note, index) => {
            return <Note key={index} onDelete={deleteNote} id={index} title={note.title} content={note.content} />
          })}
          <Footer />
        </div>
      );
}

export default App;
