import superagent from 'superagent';


export const userSet = user => ({
    type: 'USER_SET',
    payload: user,
});

export const userCreate = user => ({
    type: 'USER_CREATE',
    payload: user,
});

export const userUpdate = user => ({
    type: 'USER_UPDATE',
    payload: user,
});


export const tokenSet = token => ({
    type: 'TOKEN_SET',
    payload: token,
});



export const tokenSetRequest = token => dispatch => {
    return new Promise((resolve, reject) => {
        resolve(dispatch(tokenSet(token)));
    });
};

// ******* This is going to fetch the user accout and allBikes *******
export const userFetchRequest = () => dispatch => {
    let user = firebase.auth().currentUser;

    if (user) {
        firebase.database().ref('users/' + user.uid).once('value').then(function (snapshot) {
            let username = snapshot.val();
            dispatch(userSet(username))
        });
        console.log('FETCHED AND STORED USER', username)

    } else {
        console.log('NO USER DATA')
    }

};


export const loginRequest = user => dispatch => {
    // ******** Here we need to check if user already exists so that we dont overwrite their old data ********
    firebase.database().ref('users/' + user.uid).once('value').then(function (snapshot) {
        let username = snapshot.val();
        console.log('LOOOKHERE GAVIN', username);
        {
            // ******** If theres no user already lets set it to the database ********
            username === null ? firebase.database().ref('users/' + user.uid).set({
                account: user
            }).then(function () {
                dispatch(userSet(user))
                console.log('SET NEW USER!');
            })

                : dispatch(userSet(username))
        }
    });

    dispatch(userSet(user))
    console.log('INSIDE FIREBASEE DB SET', user)

};
export const facebookLoginRequest = user => dispatch => {
    // ******** Here we need to check if user already exists so that we dont overwrite their old data ********
    user.uid = user.id
    firebase.database().ref('users/' + user.id).once('value').then(function (snapshot) {
        let username = snapshot.val();
        console.log('LOOOKHERE GAVIN', username);
        {
            // ******** If theres no user already lets set it to the database ********
            username === null ? firebase.database().ref('users/' + user.id).set({
                account: user
            }).then(function () {
                console.log('SET NEW USER!');
            })

                : dispatch(userSet(username))
        }
    });

    dispatch(userSet(user))
    console.log('INSIDE FIREBASEE DB SET', user)

};

export const bikeCreateRequest = bike => (dispatch, getState) => {
    // ******** GET STATE TO REF USER UID ********
    let { user } = getState();
    console.log('INSIDE BIKE CREATE USER', user)
    // ******** SET BIKE FOR FIRST TIME ********
    firebase.database().ref('users/' + user.account.uid + '/allBikes').push().set({
        bike
    }).then(() => {
        // ******** INITIATE UPDATE REDUX STORE LOCALLY ********
        firebase.database().ref('users/' + user.account.uid).once('value').then(function (snapshot) {
            let username = snapshot.val();
            dispatch(userSet(username))
        })
    })
}


export const bikeUpdateRequest = bike => (dispatch, getState) => {
    let { user } = getState();
    console.log('_bike_UPDATE_INCOMING_bike', bike)
    let allBikesReference = firebase.database().ref('users/' + user.account.uid + '/allBikes').push();
    allBikesReference.set({
        bike
    }).then(() => {
        // ******** INITIATE UPDATE REDUX STORE LOCALLY ********
        firebase.database().ref('users/' + user.account.uid + '/allBikes').once('value').then(function (bikeSnapshot) {
            let bikeList = bikeSnapshot.val();
            console.log('THIS IS BIKE LIST FROM ACTIONS', bikeList)
        })
    }).then(() => {
        // ******** INITIATE UPDATE REDUX STORE LOCALLY ********
        firebase.database().ref('users/' + user.account.uid).once('value').then(function (secondSnapshot) {
            let secondUsername = secondSnapshot.val();
            dispatch(userSet(secondUsername))
        })
    })
}

export const bikeDeleteRequest = bike => (dispatch, getState) => {
    let { user } = getState();
    console.log('_bike_DELETE_INCOMING_bike', bike)
    dispatch(bikeDelete(bike));
}

export const tokenDelete = () => ({ type: 'TOKEN_DELETE', payload: null });

