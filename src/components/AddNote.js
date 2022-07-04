import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState('');
	
	const characterLimit = 200;

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText); // it is prop which takes value of current state
			setNoteText('');
		}
	};

	return (
		<div className='note new'>
			<textarea
				rows='8'
				cols='10'
				placeholder='Type to add a note...'
				value={noteText}
				onChange={handleChange} //onChange will trigger the function handlechange which checks for
				// change in textArea, checks 200 character limit is not exceeded and update state 
			></textarea>
			
			<div className='note-footer'>
				<small>
					{characterLimit - noteText.length} Remaining
				</small>
				<button className='save' onClick={handleSaveClick}> {/*this button will trigger the function which will check if 
				the text area is not empty and give prop the state of textArea and then update the state again to empty string*/}
					Save 
				</button>
			</div>

		</div>
	);
};

export default AddNote;
