# Melbourne Hotel Hunter

## Project Team
- Zafar Ahmed
- Hinal Patel
- Anna Marcus
- Conor Ryan

**Table of Contents**
-
- [Project Description](#project-description)
- [How to Run](#how-to-run)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Schema](#schema)
- [Deployed link & Screenshot](#deployed-link--screenshot)
- [References & Resources](#references--resources)


**Project Description**
-

 Our task was to create a real-world full-stack application that you’ll be able to showcase to potential employers.

Welcome to Melbourne Hotel Reviews, a website that provides a platform for users to review and rate 5-star hotels in Melbourne, Australia.

The website is designed to make it easy for users to share their experiences and opinions about the hotels they've stayed in, and to help other travelers make informed decisions when choosing a place to stay in Melbourne.

Users can browse reviews and ratings from other users to get a sense of the quality and value of each hotel.

Each hotel listing includes detailed information about the property, photos, and location. Users can leave a written review on each hotel.

Overall, Melbourne Hotel Reviews is a valuable resource for anyone who is looking to book a 5-star hotel in Melbourne, and who wants to hear from other travelers about their experiences and recommendations.

**How to Run**
-

#### Prerequisites:
- Node JS
- MYSQL server

#### Steps:

1) Clone this repository to your machine by typing `git@github.com:Anna-Janina/Melbourne-Hotel-Hunter.git` on the terminal.
2) Install all dependencies by typing `npm install`.
3) Initialize SQL server by typing `mysql -u <username> -p<password>`.
4) Go to .\db directory and run schema.sql `source schema.sql`.
5) Change MySQL username and password in Connection.js file or .env file to match your credentials.
6) Create a .env file in home directory and set the value of SESSION_KEY variable there.
6) Seed the database by typing `node seeds\seed.js` in home directory.
7) Run the application by typing `node server.js` in the terminal.



**User Story**
-
- AS a traveler looking for a 5-star hotel in Melbourne
- I WANT to search for hotels and read reviews
- SO THAT I can make an infornmed decision on where to stay during my visit
- WHEN I land on the Melbourne Hotel Reviews website
- I WANT to see a user-friendly interface with easy navigation
- GIVEN I am browsing hotels on my mobile device
- THEN the website must be responsive and fit the screen size of my device
- AS a user who values other people's experiences 
- I WANT to view reviews and ratings from other users 
- SO THAT I can get a sense of the quality and value of each hotel
- WHEN I browse hotel listings on the website
- I WANT to be see detailed information of the property, including a photos and the address
- AS I read through reviews of the hotel 
- I WANT to be able to leave a written review of my own 
- SO THAT I can share my experience with other travellers 
- AS a security- conscious user 
- I WANT my personal information to be protected 
- SO THAT I can browse and leave reviews with peace of mind 
- GIVEN the website requires authentication to access certain features 
- THEN my personal information must be protected using express sessions and cookies 


**Acceptance Criteria**
-
- Use Node.js and Express.js to create a RESTful API.

- Use Handlebars.js as the template engine.

- Use MySQL and the Sequelize ORM for the database.

- Have both GET and POST routes for retrieving and adding new data.

- Use at least one new library, package, or technology that we haven’t discussed.

- Have a folder structure that meets the MVC paradigm.

- Include authentication (express-session and cookies).

- Protect API keys and sensitive information with environment variables.

- Be deployed using Heroku (with data).

- Have a polished UI.

- Be responsive.

- Be interactive (i.e., accept and respond to user input).

- Meet good-quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).

- Have a professional README (with unique name, description, technologies used, screenshot, and link to deployed application).

**Schema**
- 
<img width="265" alt="image" src="https://user-images.githubusercontent.com/118101244/224934957-69bf2bb8-dc54-4caa-a8b1-7c1d5dd558de.png">


**Deployed link & Screenshot**
-
- https://melbourne-hotel-hunter.herokuapp.com/


![Homepage](https://user-images.githubusercontent.com/118101244/224933565-3c12de2b-0463-4ea1-9f72-49d92bde84db.PNG)
![signuppage](https://user-images.githubusercontent.com/118101244/224933483-034e03a3-082a-4f8e-96fc-db81c9e6c058.PNG)
![signpage](https://user-images.githubusercontent.com/118101244/224933480-ec24c331-a481-4cb9-a6fb-7243a97836fb.PNG)
![reviewpage](https://user-images.githubusercontent.com/118101244/224933474-0618ec65-2be3-4e43-8c18-d9b414b500a9.PNG)



**References & Resources**
-
- https://www.google.com.au/
- https://www.youtube.com/
- https://developer.mozilla.org/en-US/
- https://courses.bootcampspot.com/courses/2384/pages/15-module-15-project-2-week-1?module_item_id=829890
- https://https://getbootstrap.com/docs/5.3/components/modal/

