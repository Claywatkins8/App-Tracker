# Application Tracker

POWERED BY M.E.N.

- Mongoose
- Express
- Node

Dependencies

- Express
- Ejs
- Method-override
- Mongoose

Organization MVC

- Models (Mongoose)
- Views (EJS rendered by Express)
- Controllers (Express)

## User Stories

### Description

The Application Tracker App will take in any job application you have submitted online or in person, and track key components of this process. The user interface of the app makes it seemless to find all applications you have subbmited by company, date, or all applicactions.The app will track the following metrics:

- Job title
- Company
- Location
- Full description
- References and their contact info / any notes
- Resume & cover letter used for application- Date applied
- Job posting URL

### Home Page

When the user visits the Home Page of the app, they are greeted with a page that has a brief description of the app and a link to add an application.

<img src="WireFrames/Application Tracker - Home Page.png">

### Add Application Page

The add application page displays a form for the user to submit. This form will take in all the information about the job that was applied for and save it for later reference. After the user submits their application they will be redirected to the Application Show Page.

<img src="WireFrames/Application Tracker - Add Application Page.png">

### Application Show Page

This page will display all of the user-submitted information about the currently selected application. There will be edit and delete buttons if the user decides to change any information or remove the application all together.

<img src="WireFrames/Application Tracker - Application Show Page.png">

### Edit Page

The edit page will be the same form as the add application page with a submit button as well. The submit button will redirect back to the application show page.

<img src="WireFrames/Application Tracker - Edit Page.png">

### Applications by Company Page

The Company page is where the user will be able to see a clickable list of all the companies they have applied for. When a user clicks one of the companies they will be directed to the company show page.

<img src="WireFrames/Application Tracker - Applications By Company.png">

### Company Show Page

This page will show the user every application they have submitted to the selected company. The clickable application list will show the job title as well as the date applied. When a user clicks one of the job titles, the will be directed to the application show page.

<img src="WireFrames/Application Tracker - Company Show Page.png">

### All Applications Show Page

Users will be able to access this page at any time from the header. This will display a list of all companies that the user has applied to with a sub-list showing all jobs applied to at that company.

<img src="WireFrames/Application Tracker - All Applications Show Page.png">

## Database ERD

<img src="WireFrames/Application Tracker (2).png">
