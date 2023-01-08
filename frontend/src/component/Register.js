import RegisterService from "../services/RegisterService";
import ErrorService from "../services/ErrorService";
const handleSubmit = (username,email, pass) => {
    //reqres registered sample user
    const registerPayload = {
      username: 'jen',  
      email: 'jen@gmail.com',
      password: 'jenn1'
    }
    const registerUser = async()=>{
        try{
          const response = await RegisterService.register();
          //get token from response
          const token  =  response.data.token;
          //set JWT token to sessionStorage
          sessionStorage.setItem("token", token);
          //set token to axios common header
          setAuthToken(token);
          //redirect user to home page
          window.location.href='/weather';
  
        }catch(error){
          ErrorService.handle(error);
        }

        
      }
      registerUser();
    
    };