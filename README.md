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

### You can access the env variables from the admin account like so

    * const envName = functions.config().enviroment.envName;
    ** List of env names are 
    *** apikey, databaseurl, projectid, authdomain, messagingsenderid, facebookappid, storagebucket


### Because Firebase is a cloud service backend. We need to spin up an instance of it locally to write backend function responses.
    * Navigate to the functions folder in terminal
    * $ firebase login
    * $ firebase functions:config:get > .runtimeconfig.json
    * $ npm run shell
    * Call your functions to test
        * Example
            * sendWelcomeEmail(mockData)
            
    * Take a look at the package.json inside functions for more commands

##### Protected branch === master
    * Please submit a PR with info on changes

    # MotoMechanic

Moto Mechanic was created as a resource for DIY mechanics or everyday people wanting to learn how to work on motorcycle. By signing up with a user account and adding your vehicle through our database we can help you figure out when and how to do your next repair. Whether that be providing you with links to parts and repairs or showing you the closest trusted garage. You'll never forget to get an oil change again!

### Getting Started

    * npm i
    * npm run watch
    * navigate to localhost:8080

### Prerequisites

What things you need to install the software and how to install them

Give examples
Installing

A step by step series of examples that tell you have to get a development env running

Say what the step will be

Give the example
And repeat

until finished
End with an example of getting some data out of the system or using it for a little demo

### Running the tests

Explain how to run the automated tests for this system

Break down into end to end tests

Explain what these tests test and why

Give an example
And coding style tests

Explain what these tests test and why

Give an example
### Deployment

Add additional notes about how to deploy this on a live system

### Built With

Dropwizard - The web framework used
Maven - Dependency Management
ROME - Used to generate RSS Feeds
Contributing

Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.

### Versioning

We use SemVer for versioning. For the versions available, see the tags on this repository.

### Authors

Billie Thompson - Initial work - PurpleBooth
See also the list of contributors who participated in this project.

### License

This project is licensed under the MIT License - see the LICENSE.md file for details

### Acknowledgments

Hat tip to anyone who's code was used
Inspiration
etc



### Tech

Dillinger uses a number of open source projects to work properly:

* [AngularJS] - HTML enhanced for web apps!
* [Ace Editor] - awesome web-based text editor
* [markdown-it] - Markdown parser done right. Fast and easy to extend.
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]
* [Gulp] - the streaming build system
* [Breakdance](http://breakdance.io) - HTML to Markdown converter
* [jQuery] - duh

And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

### Installation

Dillinger requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd dillinger
$ npm install -d
$ node app
```

For production environments...

```sh
$ npm install --production
$ NODE_ENV=production node app
```

### Plugins

Dillinger is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.

| Plugin | README |
| ------ | ------ |
| Dropbox | [plugins/dropbox/README.md] [PlDb] |
| Github | [plugins/github/README.md] [PlGh] |
| Google Drive | [plugins/googledrive/README.md] [PlGd] |
| OneDrive | [plugins/onedrive/README.md] [PlOd] |
| Medium | [plugins/medium/README.md] [PlMe] |
| Google Analytics | [plugins/googleanalytics/README.md] [PlGa] |


### Development

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantanously see your updates!

Open your favorite Terminal and run these commands.

First Tab:
```sh
$ node app
```

Second Tab:
```sh
$ gulp watch
```

(optional) Third:
```sh
$ karma test
```
#### Building for source
For production release:
```sh
$ gulp build --prod
```
Generating pre-built zip archives for distribution:
```sh
$ gulp build dist --prod
```
### Docker
Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

```sh
cd dillinger
docker build -t joemccann/dillinger:${package.json.version}
```
This will create the dillinger image and pull in the necessary dependencies. Be sure to swap out `${package.json.version}` with the actual version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on your host. In this example, we simply map port 8000 of the host to port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 --restart="always" <youruser>/dillinger:${package.json.version}
```

Verify the deployment by navigating to your server address in your preferred browser.

```sh
127.0.0.1:8000
```

#### Kubernetes + Google Cloud

See [KUBERNETES.md](https://github.com/joemccann/dillinger/blob/master/KUBERNETES.md)


### Todos

 - Write MORE Tests
 - Add Night Mode

License
----

MIT


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>

