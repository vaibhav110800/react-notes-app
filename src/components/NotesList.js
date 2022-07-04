import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
	return (
		<div className='notes-list'>
			{notes.map((note) => (  //notes is a prop here which is rendering every note component 
				<Note
					id={note.id}
					text={note.text}
					date={note.date}
					handleDeleteNote={handleDeleteNote}
				/>
			))}

			{/* addnote has a prop handleNote (inherited from its component AddNote) and also props of note component are given value here */}
			
			<AddNote handleAddNote={handleAddNote} /> 
		</div>
	);
};

export default NotesList;
