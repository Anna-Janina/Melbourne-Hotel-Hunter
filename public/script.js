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

function signup()
{

    const firstname = document.getElementById('name').value;
    const lastname = document.getElementById('surname').value;
    const email = document.getElementById('Email').value;
    const password = document.getElementById('SignupPassword').value;
    const rePassword = document.getElementById('reEnterPassword').value;

    // if ((password != rePassword) || (password.length < 10))
    // {
    //     document.getElementById('error-message').value = "Passwords dont match or length less than 10";
    //     return
    // }
    // else if (firstname =="" || lastname=="" || email=="" || password=="" || rePassword =="")
    // {
    //     console.log('some fields are empty')
    //     document.getElementById('error-message').value = "Fill out all information";
    //     return
    // }
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
        if (data == 'Email already exist')
        {document.getElementById('error-message').value = "Email already exist";}
        else if (data == 'Fill out all fields')
        {
            document.getElementById('error-message').value = "Fill out all fields";
        }
        else
        {
            window.location.replace('/')
        }
    })
}


function submitReview()
{
    const heading = document.getElementById('review-heading').value;
    const review = document.getElementById('code').value;
    const hotelid = document.getElementById('submit-review').getAttribute('data-id')

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


if (document.getElementById("login-button"))
{

document.getElementById("login-button").addEventListener("click", (event)=>{
    event.preventDefault()
    login(event)});
}

if (document.getElementById("submit-review"))
{

document.getElementById("submit-review").addEventListener("click", (event)=>{
    submitReview()});
}

if (document.getElementById("submit-signup"))
{

document.getElementById("submit-signup").addEventListener("click", (event)=>{
    signup()});
}

