import { Actions } from 'react-native-router-flux';

export const loginUserSuccess = (dispatch, user) => {
    console.log('called')
    Actions.navigationScreen()
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
    
}