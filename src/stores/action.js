export function submitLogin(loginData) {
  return async (dispatch) => {
    try {

      const action = {
        type: 'login',
        payload: loginData
      }

      dispatch(action)

    } catch (error) {
      console.log(error);
    }
  }
}