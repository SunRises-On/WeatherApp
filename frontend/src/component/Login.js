import LoginService from "../services/LoginService";
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
          
  
        }catch(error){
          if(error.response){
            //Request completed but server responded with an error
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }else if(error.request){
            //Request completed but no response received from server.
            console.log(error.request);
          }else{
            //Error occured while setting up request.
            console.log("Error : " + error.message);
          }
          
        }
        
      }
      loginUser();
  };