import { createUserWithEmailAndPassword, getAuth, fetchSignInMethodsForEmail, signInWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged, updatePassword, sendPasswordResetEmail, getRedirectResult } from "firebase/auth";
import { authConfig, provider, Fbprovider } from "../lib/firebase";
import authApi from "../lib/api/authApi";




const api = authApi()
const auth = getAuth();

const useAuthHook = () => {

     const checkEmaiexist = async (email: string) => {


          if (email.trim().length === 0) throw "Email is required"
          if (email.trim().length < 2) throw "Email is not valid"

          const methods = await fetchSignInMethodsForEmail(auth, email)
          return methods
     }

     const sendOtp = async (email: string) => {
          const sendingOtp = await api.sendOtp(email)
     }


     const signupWithEmail = async (email: string, password: string, confirmpass: string) => {

          if (email.trim().length === 0) throw "Email is required"
          if (email.trim().length < 2) throw "Email is not valid"
          if (password.trim() !== confirmpass.trim()) throw "password should be same"

          const user = await createUserWithEmailAndPassword(authConfig, email, password)
          const idToken = await user.user.getIdToken().catch((err) => { throw err });

          const data = {
               uid: user.user.uid,
               token: idToken,
               email: user.user.email
          }

          const response = await api.signUp(data)
          return response

     }

     const verifyOtp = async (data: any) => {

          const userOtp = {
               otp: data?.otp,
               email: data?.email
          }

          if (userOtp?.otp === null) throw "Otp is required"
          const verify = await api.OtpVerification(userOtp)
          return verify
     }

     const signInWithEmail = async (email: string, password: string) => {

          if (email.trim().length === 0) throw "Email is required"
          if (email.trim().length < 2) throw "Email is not valid"

          try {
               const verifyuser = await signInWithEmailAndPassword(auth, email, password)
               console.log(verifyuser);
               return verifyuser
          } catch (err: any) {
               // console.log(err.message.split('(')[1].split(')')[0].split('/')[1],'eeeeeeeeeeeeeeeeeeeee');
               throw err.message.split('(')[1].split(')')[0].split('/')[1].split('-').join(' ')

          }
     }

     const LogOut = async () => {
          try {
               await signOut(auth);
               console.log("User signed out successfully");
               return 'User signed out successfully'
          } catch (err) {
               console.error("Error signing out:", err);
          }
     }

     const checkUserLoggedIn = async () => {
          return new Promise((resolve, reject) => {

               onAuthStateChanged(auth, (user) => {
                    if (user) {
                         console.log('User is signed in:', user.uid);
                         console.log('User email:', user.email);
                         console.log('User display name:', user.displayName);

                         resolve(user)
                         // You can also access other user properties like photoURL, etc.
                    } else {
                         console.log('User is signed out');
                         resolve(null)
                    }
               })
          })

     }

     const createNewPassword = async (email: string) => {

          return new Promise(async (resolve, reject) => {
               sendPasswordResetEmail(auth, email).then(() => {
                    resolve("password reset email send")
               }).catch((err) => {
                    reject(err)
               })
          })
     }


     const signInWithGoogle = () => {
          signInWithPopup(auth, provider)
               .then((result) => {
                    console.log(result);
               }).catch((error) => {
                    console.log(error);

               })
     }
     const signInwithFacebook = () => {
        
          signInWithPopup(auth,Fbprovider)
               .then((result) => {
                   console.log(result,'hhhhhhhhhhhhhhhhhhhhh');
                   const credential = Fbprovider.getCustomParameters();
                    const token = credential.accessToken;
                   
               }).catch((error) => {
                   console.log(error,'wwwwwwwwwwwwwwwwwwwwww');
               });
     }

     return {

          signupWithEmail,
          verifyOtp,
          checkEmaiexist,
          sendOtp,
          signInWithEmail,
          LogOut,
          checkUserLoggedIn,
          createNewPassword,
          signInWithGoogle,
          signInwithFacebook
     }

}

export default useAuthHook