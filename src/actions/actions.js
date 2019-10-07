// In this file, we are exporting a constant and a function for each action. 
// The function is an action creator, which just returns an object.
// Remember: Actions define WHAT changed and not HOW!

export const ADD_NOTE = 'ADD_NOTE';

export function addNote(title, content) {
  return { type: ADD_NOTE, title: title, content: content };
}

export const REMOVE_NOTE = 'REMOVE_NOTE';

export function removeNote(id) {
  return { type: REMOVE_NOTE, id: id };
}