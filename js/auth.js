function authenticateWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase
                .auth()
                .signInWithPopup( provider )
                .then( function ( result ) {
                        window.location.href = '../index.html';
                } )
                .catch( function ( error ) {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        const email = error.email;
                        const credential = error.credential;
                        console.log( errorCode, errorMessage, email, credential );
                } );
}