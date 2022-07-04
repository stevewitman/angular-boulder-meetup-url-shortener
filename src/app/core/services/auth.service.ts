import { Injectable } from '@angular/core';

import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import {
  Auth,
  authState,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User,
} from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userAuthState$: Observable<User | null> = of(null);

  constructor(
    private auth: Auth,
    private firestore: Firestore,
    private router: Router
  ) {
    this.userAuthState$ = authState(this.auth);
  }

  getUserAuthState() {
    return this.userAuthState$;
  }

  async signInWithGoogle() {
    const googleAuthProvider = new GoogleAuthProvider();
    const googleAuth = getAuth();
    await signInWithPopup(googleAuth, googleAuthProvider)
      .then((result) => {
        console.log('Signed In With Google');
        return this.updateUserData(result.user);
      })
      .catch((error) => {
        console.log('An ERROR occurred while Signing In With Google...');
        console.log('ERROR message:', error);
      });
  }

  updateUserData(user: User) {
    const userRef = doc(this.firestore, `users/${user.uid}`);
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoUrl: user.photoURL,
    };
    return setDoc(userRef, data, { merge: true });
  }

  async signOutWithGoogle() {
    const auth = getAuth();
    await signOut(auth)
      .then(() => {
        console.log('Signed Out With Google');
        if (this.router.url === '/short') {
          // If on protected route ... navigate to Home Page         
          this.router.navigate(['/home']);
        } 
      })
      .catch((error) => {
        console.log('ERROR occurred while Signing Out With Google...');
        console.log('ERROR message:', error);
      });
  }
}
