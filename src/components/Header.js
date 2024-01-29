import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useEffect } from "react";
import { LOGO } from "../utils/constants";
import { toggleGPTSearchView } from "../utils/GPTSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Remove the user from the Redux store on sign-out
      // Sign-out successful. 
    }).catch((error) => {
      navigate('/error');
      console.error("Sign out error:", error);
    });
  }
  const handleGPTSearch = () => {
    // Toggle GPT Search Button
    dispatch(toggleGPTSearchView());
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // this  will unsubscribe when  component unmounts .
    return () => {
      unsubscribe();
    }
  }, [])
  const user = useSelector((store) => store.user);
  return (
    <div className='absolute w-screen px-8 py-4 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className="w-44" src={LOGO}
        alt="Netflix Logo" />

      {user && (
        <div className='p-4 flex '>
          <div className="mt-10 mr-4">
            <button onClick={handleGPTSearch} className="bg-red-700 rounded-lg p-2">GPT Search</button>
          </div>
          <div>
            <img alt='usericon' src={user?.photoURL} className='w-10 ml-5' />
            <button onClick={handleSignOut} className='bg-red-700 rounded-lg p-2'>Sign out</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;
