import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { USER_AVATAR } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);
  const nameRegex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)?$/;
  const dispatch = useDispatch();
  const toggleSignIn = () => {
    setisSignInForm(!isSignInForm); //
  }
  const handleButtonClick = () => {
    //validate the form data
    // checkValidData();
    // console.log(email);
    // console.log(password);
    const enteredName = name.current ? name.current.value : '';
    const enteredEmail = email.current ? email.current.value : '';
    const enteredPassword = password.current ? password.current.value : '';
    if (!isSignInForm && !nameRegex.test(enteredName)) {
      seterrorMessage('Invalid name format. Plzease enter a valid name.');
      return;
    }
    const message = checkValidData(enteredEmail, enteredPassword);
    seterrorMessage(message);
    // console.log(message)
    if (message) return; //jar valid ch nhi tar ka validation karycha..
    //Ata sign in /sign up cha logic lavuya..
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: enteredName, photoURL: USER_AVATAR
          }).then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
            // }).catch((error) => {
            //   seterrorMessage(error.errorMessage);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + " " + errorMessage);
        });
    }
    else {
      signInWithEmailAndPassword(auth, enteredEmail, enteredPassword)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + " " + errorMessage);
        });
    }
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg" alt='Background' />
      </div>
      <form onSubmit={(e) => {
        e.preventDefault();
      }}
        className='w-3/12 absolute p-12 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0 text-white rounded-lg'>
        <h1 className='font-bold text-3xl py-4 m-2 '>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
        {!isSignInForm && <input ref={name}
          type="text" placeholder='Name' className='p-4 my-4 w-full bg-gray-700 rounded-lg' />}
        <input
          ref={email}
          type="email" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 rounded-lg' />
        <input
          ref={password}
          type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700 rounded-lg' />
        <p className='text-red-500 font-bold text-lg'>{errorMessage}</p>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}>{isSignInForm ? 'Sign In' : 'Sign Up'} </button>
        <p className='p-4 cursor-pointer' onClick={toggleSignIn}>{isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already Registerd? Sign In'}</p>
      </form>
    </div>
  )
}
export default Login;