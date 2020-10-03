# superhero-call

This project is about creating an application which is used to send the distress signal to a superhero. You just need to enter a number it will call the matching superhero.
In this project, [AirBnb](https://github.com/airbnb/javascript) guidelines are followed.

## Let's Run the Application

Note: First go to the project (superhero-call) directory.
It should be on master branch.(Default)

Run the commands :-

To install the packages.

### `npm i`

Start the server.

### `npm run server`

Now, Open another Terminal.
Again go to project directory and navigate to 'client', inside superhero-call

### `cd superhero-call/client`

Install packages for front-end.

### `npm i`

Run the UI.

### `npm start`

<br />

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# User Journey:

First of all you will see a Welcome page,
There is a choice, you can login from button 'Login' below welcome title or go to the login page through navigation bar.

Until you are not authenticated, you will only be able to see login page.
If you try to navigate using URLs of other pages, You will always be redirect to login page.
Wrong credentials will generate error and shows notification.

## Login:

Use these credentials to login :
Email: admin@gmail.com
Password: password

After successful login, You will be redirected to welcome page. Your name will appear there.
Now you can access the Dial-pad and phone number directory.