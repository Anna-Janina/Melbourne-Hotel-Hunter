// function login() will send sign-in request to the backend server

function login()
{

    const email = document.getElementById('InputEmail').value;
    const password = document.getElementById('Password').value;

    fetch('/signin', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        
        body: JSON.stringify({
            "email": email,
            "password": password
        })
    })
    
    .then((response)=>{
        return response.text()
    })
    
    .then((data)=>{
        console.log(data)
        if (data == 'Username or password is incorrect')
        {document.getElementById("login-fail-text").textContent = 'Login failed'}
        else
        {
            window.location.replace('/')
        }
    })
}


// function signup() will send sign-up request to the backend server

function signup()
{

    const firstname = document.getElementById('name').value; //get user first name
    const lastname = document.getElementById('surname').value; //get user last name
    const email = document.getElementById('Email').value; //get user email address 
    const password = document.getElementById('SignupPassword').value; //get password
    const rePassword = document.getElementById('reEnterPassword').value; //get re entered password

    if (password != rePassword) // check if both passwords match
    {
        document.getElementById('error-message2').textContent = "Passwords do not match"; //display message to user
        return // return if passwords don't match
    }
    //send POST request to bacnend server with user details
    fetch('/signup', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        
        body: JSON.stringify({
            "firstname": firstname,
            "lastname": lastname,
            "email": email,
            "password": password,
        })
    })
    
    .then((response)=>{
        return response.text()
    })
    
    .then((data)=>{
        console.log(data)
        //display message to the user based on server response
        if (data == 'Email already exist')
        {document.getElementById('error-message2').textContent = "Email already exist";}
        else if (data == 'Fill out all fields')
        {
            document.getElementById('error-message2').textContent = "Fill out all fields";
        }
        else if (data == "Password length must be atleast 10 characters")
        {
            document.getElementById('error-message2').textContent = "Password length must be atleast 10 characters";

        }
        else if (data == 'Email address is not valid')
        {
            document.getElementById('error-message2').textContent = "Email address is not valid";

        }
        else
        {   //redirect user to home page
            window.location.replace('/')
        }
    })
}

// function submitReview() will send user review to the backend server

function submitReview()
{
    const heading = document.getElementById('review-heading').value; //get the heading text
    const review = document.getElementById('code').value; //get the review text
    const hotelid = document.getElementById('submit-review').getAttribute('data-id') //get hotel id

    fetch(`/review/${hotelid}`,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        
        body: JSON.stringify({
            "heading":heading,
            "review":review
        })
    })
    
    .then((response)=>{
        if (response.status == '200')
        {   
            document.getElementById('review-submit-message').value = "Your review has been submitted";
            window.location.reload(`/review/${hotelid}`)
        }
    })

}

//Check if the "login-button" id exist on the page. This could be missing depending on which handlebar we are on
if (document.getElementById("login-button"))
{

// add event listner on login button

document.getElementById("login-button").addEventListener("click", (event)=>{
    event.preventDefault()
    login(event)});
}
//Check if the "submit-review" id exist on the page. This could be missing depending on which handlebar we are on

if (document.getElementById("submit-review"))
{

// add event listner on submit review button
document.getElementById("submit-review").addEventListener("click", (event)=>{
    event.preventDefault()
    submitReview()});
}

//Check if the "submit-signup" id exist on the page. This could be missing depending on which handlebar we are on

if (document.getElementById("submit-signup"))
{

// add event listner on submit signup button
    
document.getElementById("submit-signup").addEventListener("click", (event)=>{
    event.preventDefault()
    signup()});
}

