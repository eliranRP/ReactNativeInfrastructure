import firebase from "firebase"
import User from '../Model/User'

const USER = 'user'
// Get a reference to the database service
// var db = firebase.database().ref(USER);
export default UserController = {

    create: (firebaseUser) => {
        User.email = firebaseUser.email
        User.id = firebaseUser.uid
        return firebase.database().ref(USER).child(User.id)
            .set(User)
            .then(() => firebaseUser);
    },
    update: (user) => {
        return firebase.database().ref(USER).child(User.id)
            .update(User)
    }

}