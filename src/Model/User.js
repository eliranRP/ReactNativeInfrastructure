import * as firebase from "firebase"
export default User = {
    id: '',
    name: '',
    email: '',
    profileImage: '',
    loginAt: firebase.database.ServerValue.TIMESTAMP,
    timestamp: firebase.database.ServerValue.TIMESTAMP
}