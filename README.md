# motoMechanic
* Your one stop shop for all your home mechanic needs.

### To get up and running 
    * npm i
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
    * Take a look at the package.json inside functions for more commands
       

##### Protected branch === master
    * Please submit a PR with info on changes
