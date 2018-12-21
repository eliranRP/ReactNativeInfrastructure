import firebase from "firebase"



export default AuthApi = {
    login: (email, password) => {
        return firebase.auth().signInWithEmailAndPassword(email, password)

    },
    logout: () => {
        return firebase.auth().signOut()
    },
    signIn: (email, password) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
    }
}


