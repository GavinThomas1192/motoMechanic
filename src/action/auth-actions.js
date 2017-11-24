import superagent from 'superagent';
let database = firebase.database();

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


export const loginRequest = user => dispatch => {
    dispatch(userSet(user));
    database.ref('users/' + user.userID).set({
        user
    });
};

export const bikeCreateRequest = bike => (dispatch, getState) => {
    let { user } = getState();
    console.log('_ROUTING_NEWbike_TO_STORE_', bike)
    console.log('_Attaching to this user_', user)
    user.allBikes = []
    user.allBikes.push(bike);
    console.log('_AFTER COMBINING_', user)

    dispatch(userUpdate(user));
}

export const bikeUpdateRequest = bike => (dispatch, getState) => {
    let { user } = getState();
    console.log('_bike_UPDATE_INCOMING_bike', bike)
    dispatch(bikeUpdate(bike));
}

export const bikeDeleteRequest = bike => (dispatch, getState) => {
    let { user } = getState();
    console.log('_bike_DELETE_INCOMING_bike', bike)
    dispatch(bikeDelete(bike));
}

