# motoMechanic
* Your one stop shop for all your home mechanic needs.

### To get up and running 
    * npm i
    * npm run watch
    * navigate to localhost:8080

### You need to create a .dev.env file inside the src folder
    * Contact Gavin Thomas at gthomas1192@gmail.com for the app secret id
    * Example .dev.env
        * FACEBOOK_APP_ID = 'xxxxxxxxxxxxxx'
        * APIKEY = xxxxxxxxxx
        * AUTHDOMAIN = "motomechanic-dd66a.firebaseapp.com",
        * DATABASEURL= "https://motomechanic-dd66a.firebaseio.com",
        * PROJECTID= "xxxxx",
        * STORAGEBUCKET= "",
        * MESSAGINGSENDERID= "xxxxxx"


### Because Firebase is a cloud service backend. We need to spin up an instance of it locally to write backend function responses.
    * Navigate to the functions folder in terminal
    * npm run serve
    * This will provide a link where you can test the routes with an appliction like Postman, or setup testing .dev.env file that replaces the __DATABASE_URL__ with the testing url recieved from running npm run serve.
    * Take a look at the package.json inside functions for more commands

    * You can also test functions quickly before deploying them to the cloud with test data
        * npm run serve
        * Call you functions to test
        * Example
            * sendWelcomeEmail(data)
       

##### Protected branch === master
    * Please submit a PR with info on changes
