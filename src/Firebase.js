
//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import {useNavigate} from 'rea'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
import { useNavigate } from "react-router";
import {useDispatch,useSelector} from 'react-redux'
// Your web app's Firebase configuration
import {loggin} from './Redux/action'


const firebaseConfig = {
  apiKey: "AIzaSyAMX0hciEoOZp3iT8lCNmqeLKhiL7vNU3M",
  authDomain: "airbnb-auth-6cf8a.firebaseapp.com",
  projectId: "airbnb-auth-6cf8a",
  storageBucket: "airbnb-auth-6cf8a.appspot.com",
  messagingSenderId: "110101977917",
  appId: "1:110101977917:web:630dd9dddc9ece57fd4354"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)



const provider=new GoogleAuthProvider()

export const signInWithGoogle=()=>{
  signInWithPopup(auth,provider)
  .then((result)=>{
    console.log(result)
    localStorage.setItem("user",JSON.stringify({
      name:result.user.email,
      email:result.user.displayName,
      photo:result.user.photoURL
    }))

    console.log(JSON.parse(localStorage.getItem('user')))
    const dispatch=useDispatch()

    dispatch(loggin())
   
  })
  .catch((error)=>{
    console.log(error)
  })
}
