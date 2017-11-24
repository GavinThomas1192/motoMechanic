import superagent from 'superagent';
//auth actions
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

export const tokenDelete = () => ({ type: 'TOKEN_DELETE', payload: null });

export const logoutProfile = () => ({ type: 'LOGOUT_PROFILE', payload: null });