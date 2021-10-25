import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider,signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase =()=>{
    const [user,setUser] = useState({});
    //const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
            .finally(() => { setLoading(false) });
    }

    const logOut =()=>{
        setLoading(true);
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        .finally(() => setLoading(false))
    }
//observe whether user auth state changed or not
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        }
        else {
            setUser({});
        }
        setLoading(false);
    });
    return () => unsubscribe;
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
    return{
        user,
        loading,
        signInUsingGoogle,
        logOut,
    }
     
}

export default useFirebase;