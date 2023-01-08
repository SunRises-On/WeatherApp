import LoginService from "../services/LoginService";
import ErrorService from "../services/ErrorService";
const handleSubmit = (email, pass) => {
    //reqres registered sample user
    const loginPayload = {
      email: 'jen@gmail.com',
      password: 'jenn1'
    }
    const loginUser = async()=>{
        try{
          const response = await LoginService.login();
          //get token from response
          const token  =  response.data.token;
          //set JWT token to sessionStorage
          sessionStorage.setItem("token", token);
  
          //set token to axios common header
          setAuthToken(token);
          //redirect user to home page
          window.location.href = '/weather'
  
        }catch(error){
            ErrorService.handle(error);
        }
      }
      loginUser();
  };