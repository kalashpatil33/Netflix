import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from '../utils/userSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Remove the user from the Redux store on sign-out
      dispatch(removeUser());
      navigate("/"); 
      // Sign-out successful. 
    }).catch((error) => {
      navigate('/error');
      console.error("Sign out error:", error);
    });
  }
  const user = useSelector((store) => store.user);
  return (
    <div className='absolute w-screen px-8 py-4 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className="w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo" />

      {user && (
        <div className='p-4'>
          <img alt='usericon' src={user?.photoURL} className='w-8 ml-5' />
          <button onClick={handleSignOut} className='bg-red-700 rounded-lg p-2'>Sign out</button>
        </div>
      )}
    </div>
  );
};
export default Header;
