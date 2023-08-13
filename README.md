# Gmail SSO Login Angular Application

This Angular application demonstrates Gmail Single Sign-On (SSO) login. It consists of two pages: a Gmail SSO page where users can authenticate using their Gmail account. After successful authentication, users are taken to a page displaying their details. In case of authentication failure, users are redirected to an error page.
## Installation  

1. Clone the repository:

```bash
git clone https://github.com/yourusername/your-gmail-sso-app.git
cd your-gmail-sso-app

## Install angularx-social-login:

   npm install angularx-social-login

Replace 'YOUR_GOOGLE_CLIENT_ID' with your Google Client ID in the providers array in App.module.txs

## Features

Login Page: Enter your username and password, or click on the Gmail icon to redirect to the Gmail SSO page.

Gmail SSO Page: Authenticate using your Gmail account. Upon successful authentication, you will be taken to the user details page.

User Details Page: Displays user details after successful authentication.

Error Page: If authentication with Gmail fails, you will be redirected to the error page.

Usage:

Start the Angular development server: ng serve

Open your web browser and navigate to http://localhost:4200/ to access the application.

On the login page, click the Gmail icon to initiate the Gmail SSO flow.

Upon successful authentication, you will be taken to the user details page displaying your Gmail user information.

In case of authentication failure, you will be redirected to the error page.

Technologies Used
Angular
Gmail Single Sign-On
HTML
CSS
