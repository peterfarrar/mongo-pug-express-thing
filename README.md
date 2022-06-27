# Mongo Pug Express Thing

## What is it?
This app is designed to demonstrate a specific challenge.  When playing with pug and mongodb, we needed to be able to  
1. Add the mongo ID to an element
2. On a click event, get the id from the parent element
3. Retrieve data related to the mongo ID and use it to update the HTML  

So this does all of that. As a solution, this app is highly contrived. If the goal was to display the meaning on an idiom when the idiom is clicked on, there are much easier ways to do that that don't require API calls. But as a reference, it's fine.

## How do I use it?
### Set up `local.js`
First run the seed set up your `local.sh` file.  This file works with the `options.js` file to set up your app configuration.  `local.sh` exports environment variables that `options.js` picks up (if they're defined) and assigns to configuration values (or uses defaults where an environment variable is not defined).

In the config directory, create a file called `local.sh` and add values to export, like the following:
```
export NODE_PORT=3300
export CORS_OPTIONS="{ origin: \"*\" }"
export MONGODB_URL=mongodb://localhost:27017/my-mongo-test
```
These values should match your environment.  For example, my MongoDB is running locally.  If yours is running remotely you will need a different value for `MONGODB_URL`

If you look in the `package.json` file you'll see that this file is being envoked before th eapp is run.

### Seed the database
This app relies on a mongo database populated with idioms and their meanings.  Run `node config/seed.js` to set it up.  I know, you're wondering, "Where did you get these amazing idioms?"  I found them [here!](https://www.ef.edu/english-resources/english-idioms/)  Hopefully the creator of that page doesn't feel I stole them.  I promise I'm not making a penny of this.  There are plenty more there if you're facinated with idioms and proverbs.

### Run the app
To run the app there are two options, development using nodemon, or just start using node:
* `npm run dev`
* `npm run start`

Navigate to the page in your browser.  You should see a list of idioms in boxes.  Click on one.  You should see a modal appear with the idiom and it's meaning.  Click on the modal and it should disapear.

## To Do
* Well, it would be nice to block the clicks on the idioms until the modal has disapeared.
* If I scroll up and down, it would be nice to have the modal float in the center of the page.