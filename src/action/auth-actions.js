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
            }).then(() => {
                firebase.database().ref('users/' + user.uid).once('value').then(function (snapshot) {
                    let updatedUser = snapshot.val();
                    dispatch(userSet(updatedUser))
                    console.log('SET NEW USER!');
                })

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
    let username;
    console.log('INSIDE BIKE CREATE USER', user)

    // ******** SET BIKE FOR FIRST TIME AND STORE KEY REFERENCE FOR BIKES*******
    let groupId = firebase.database().ref().child('users/' + user.uid + '/allBikes').push().key;
    firebase.database().ref('users/' + user.account.uid + '/allBikes' + '/' + groupId).set({
        bike
    }).then(() => {
        // ******** INITIATE UPDATE REDUX STORE LOCALLY FOR NEW ENTIRE USER WITH NEW ALLBIKE LIST ********
        firebase.database().ref('users/' + user.account.uid).once('value').then(function (snapshot) {
            username = snapshot.val();
            console.log('FIRST UERSNAME', username)
            // ******** ATTACH ALLBIKE KEY/ID TO USER OBJECT ********
            username.account.bikeGroupId = []
            username.account.bikeGroupId.push(groupId)
            dispatch(userSet(username))
        })
            .then(() => {
                // ******** UPDATE USER OBJECT IN DATABASE WITH ALLBIKE KEY/ID ********
                let account = username.account
                let allBikes = username.allBikes
                firebase.database().ref('users/' + username.account.uid).set({
                    account,
                    allBikes
                })

            })
    })
}

export const bikeUpdateRequest = bike => (dispatch, getState) => {
    let { user } = getState();
    let username;

    console.log('_bike_UPDATE_INCOMING_bike', bike)
    let groupId = firebase.database().ref().child('users/' + user.uid + '/allBikes').push().key;
    firebase.database().ref('users/' + user.account.uid + '/allBikes' + '/' + groupId).set({
        bike
    }).then(() => {
        firebase.database().ref('users/' + user.account.uid).once('value').then(function (snapshot) {
            username = snapshot.val();
            console.log('FIRST UERSNAME', username)
            // ******** ATTACH ALLBIKE KEY/ID TO USER OBJECT ********
            username.account.bikeGroupId.push(groupId)
            console.log('hohohohohoohoh', username.account.bikeGroupId)
        }).then(() => {
            // ******** UPDATE USER OBJECT IN DATABASE WITH ALLBIKE KEY/ID ********
            let account = username.account
            let allBikes = username.allBikes
            firebase.database().ref('users/' + username.account.uid).set({
                account,
                allBikes
            })
        }).then(() => {
            // ******** INITIATE UPDATE REDUX STORE LOCALLY ********
            firebase.database().ref('users/' + user.account.uid).once('value').then(function (secondSnapshot) {
                let secondUsername = secondSnapshot.val();
                dispatch(userSet(secondUsername))
            })

        })
    })
}

export const bikeDeleteRequest = bike => (dispatch, getState) => {
    let { user } = getState();
    console.log('_bike_DELETE_INCOMING_bike', bike)
    dispatch(bikeDelete(bike));
}

export const tokenDelete = () => ({ type: 'TOKEN_DELETE', payload: null });

