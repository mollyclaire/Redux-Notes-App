import store from './store/store';
import { addNote } from './actions/actions';
import { removeNote } from './actions/actions';

// ------ HTML references ------
let notesUList = document.getElementById('notes');
let addNoteForm = document.getElementById('add-note');
let addNoteTitle = addNoteForm['title'];
let addNoteContent = addNoteForm['content'];

// ------ Redux ------
// An action is being dispatched to the store 
// (see setDeleteNoteButtonsEventListeners function below for corresponding event listener).
function deleteNote(index) {
    store.dispatch(removeNote(index));
  } 

function renderNotes() {
    let notes = store.getState().notes;
    
    notesUList.innerHTML = '';
    // For all of the notes in the state, create a new noteItem variable which includes
    // a list item of a title, a button with the data-id of index, and the content.
    notes.map((note, index) => {
      let noteItem = `
        <li>
          <b>${ note.title }</b>
          <button data-id="${ index }">x</button>
          <br />
          <span>${ note.content }</span>
        </li>
      `;
      // Add the new noteItem to the page.
      notesUList.innerHTML += noteItem;
    });
    
    setDeleteNoteButtonsEventListeners();
  }

// ------ Event Listeners ------
// Here we are dispatching an action to our store. The action creator object
// returns an object with the content and values, which is the content we put into the form.
addNoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let title = addNoteTitle.value;
    let content = addNoteContent.value;
    store.dispatch(addNote(title, content));
  });

function setDeleteNoteButtonsEventListeners() {
  let buttons = document.querySelectorAll('ul#notes li button');
  
  for(let button of buttons) {
    button.addEventListener('click', () => {
      deleteNote(button.dataset.id);
    });
  }
}

// ------ Render the Notes ------
// Here we take advantage of Redux's store object, which includes the subscribe function.
store.subscribe(() => {
    renderNotes();
  });

// I'm just testing how dispatching an action to the store works here.
// This is not crucial to the functionality of the app.  
console.log('Before:', store.getState());
store.dispatch(addNote('One', 'One content'));
store.dispatch(addNote('Two', 'Two content'));
store.dispatch(addNote('Three', 'Three content'));
console.log('After:', store.getState());  

