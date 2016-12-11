const hardCodedData = [
  { id: 1, name: 'Cody' },
  { id: 2, name: 'Ben' },
  { id: 3, name: 'Bubba' }
];


const INITIAL_STATE = {
	allPuppies: hardCodedData
}

export default function (state = INITIAL_STATE, action) {

	const newState = Object.assign({}, state);

	switch (action.type) {

		default: return state;
	}

	return newState;
}

