import firebase from "firebase/app"   
import "firebase/auth"
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyDwvoe_HhYGhAqFEdZYR2OYi8jM_V8aPnc",
            authDomain: "weekendplanner-7a85f.firebaseapp.com",
            databaseURL: "https://weekendplanner-7a85f.firebaseio.com",
            projectId: "weekendplanner-7a85f",
            storageBucket: "weekendplanner-7a85f.appspot.com",
            messagingSenderId: "575676897778"
          };
        if(!firebase.apps.length){
            firebase.initializeApp(config);
        }
    const auth = firebase.auth();

  
                
        // const txtEmail = document.getElementById('txtEmail');
        // const txtPassword = document.getElementById('txtPassword');
        // const btnLogin = document.getElementById('btnLogin');
        // const btnSignUp = document.getElementById('btnSignUp');
        // const btnLogout = document.getElementById('btnLogout');
    
        // btnLogin.addEventListener("click", e => {
        //     console.log("Log in clicked");
            
        //     const email = txtEmail.value;
        //     const pass = txtPassword.value;
        //     const auth = firebase.auth();
        //     const promise = auth.signInWithEmailAndPassword(email, pass);
        //     promise.catch(e => console.log(e.message));
        // });
    
        // btnSignUp.addEventListener("click", e => {
        //     console.log("sign up in clicked");
            
        //     const email = txtEmail.value;
        //     const pass = txtPassword.value;
        //     const auth = firebase.auth();
        //     const promise = auth.createUserWithEmailAndPassword(email, pass);
        //     promise.catch(e => console.log(e.message));
        // });
    
        // btnLogout.addEventListener("click", e =>{
        //     firebase.auth().signOut();
        //     localStorage.clear();
            
        // });

        export  {
            auth,
        }
     