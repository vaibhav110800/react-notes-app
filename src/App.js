import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Header from './components/Header';

const App = () => {
	const [notes, setNotes] = useState([]);

	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => { 									 // it will get all the notes when app is rendered for first time
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data') // retreive data using key 
		);

		if (savedNotes) {
			setNotes(savedNotes);						 // if savedNotes is retreived successfully then update the state with saved notes
		}
	}, []);

	useEffect(() => { 				// it will send the notes everytime the state is updated
		localStorage.setItem(       // it takes 2 parameter, first is key, second is key value
			'react-notes-app-data', // it is key which is string
			JSON.stringify(notes)   // strinfigy the current state before saving
		);
	}, [notes]); 					// any time notes state changes useEffect will be run

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
				<Header handleToggleDarkMode={setDarkMode} />
				<NotesList
					notes={notes} // notes is a prop of NoteList and it's value is initial state i.e. empty array
					handleDeleteNote={deleteNote}

					handleAddNote={addNote} 
				/>
			</div>
		</div>
	);
};

export default App;
