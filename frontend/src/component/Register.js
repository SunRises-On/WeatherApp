const handleSubmit = (email, pass) => {
    //reqres registered sample user
    const registerPayload = {
      username: 'jen',  
      email: 'jen@gmail.com',
      password: 'jenn1'
    }
  
    axios.post("https://reqres.in/api/login", registerPayload)
      .then(response => {
        //get token from response
        const token  =  response.data.token;
  
        //set JWT token to sessionStorage
        sessionStorage.setItem("token",token);
        //set token to axios common header
        setAuthToken(token);
  
 //redirect user to home page
        window.location.href = '/'
      })
      .catch(err => console.log(err));
  };