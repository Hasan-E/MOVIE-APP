import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { createContext } from "react";
import { auth } from "../auth/firebase";
import { useNavigate } from "react-router-dom";
import { toastError, toastSuccess } from "../helpers/ToastNotify";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContextt = createContext();

const AuthContext = ({ children }) => {
  const navigate = useNavigate();
  //!register
  //!register için (sitede zincir yapılı fetch işlemi var biz burada async await i tercih ettik)
  // https://firebase.google.com/docs/auth/web/start?hl=tr

  const createKullanici = async (email, password, displayName) => {
    await createUserWithEmailAndPassword(auth, email, password);
    toastSuccess("register işlemi başarılı");
    navigate("/");
  };

  //! Login
  const giris = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
    toastSuccess("login işlemi başarılı");
    navigate("/");
  };

  //! google ile giriş
  const googleGiris = () => {
    //? google hesaplarına erişme metodu
    const provider = new GoogleAuthProvider();
    //? Açılır pencere ile giriş yapılması için firebase metodu
    signInWithPopup(auth, provider)
      .then((result) => {
        toastSuccess("google ile giriş başarılı");
        navigate("/");
      })
      .catch((error) => {
        toastError("başarısız google girişi");
      });
  };
  return (
    <AuthContextt.Provider value={{ createKullanici, giris, googleGiris }}>
      {children}
    </AuthContextt.Provider>
  );
};

export default AuthContext;
