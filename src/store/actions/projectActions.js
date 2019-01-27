export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //async call to firebase
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Jack',
            authorLastName: 'Gisel',
            authorId: 123,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERR', err});
        })
    }
}