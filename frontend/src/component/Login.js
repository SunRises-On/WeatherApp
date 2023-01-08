import LoginService from "../services/LoginService";
import ErrorService from "../services/ErrorService";
const handleSubmit = (email, pass) => {
    //reqres registered sample user
    const handleSubmit=(email,password)=>{
        //sample user
        const loginPayload = {
            email: 'jen@gmail.com',
            password: 'jenn1'
          }
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
      };
      loginUser();
      return(
        <form
            onSubmit={(event)=>{
                event.preventDefault()
                const [email, password]= event.target.children;
                handleSubmit(email, password);
            }}

        >

            <label for="email">Email</label><br/>
            <input type="email" id="email" name="email"/><br/>

            <label for="password">Password</label><br/>
            <input type="password" id="password" name="password"/><br/>

            <input type="submit" value="Submit"/>
        </form>
      );
  }
  export default Login;