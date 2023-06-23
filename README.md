# Timestamp Microservice
It takes a date string or Unix timestamp as an input, validates it, and returns the corresponding Unix timestamp and UTC representation of the date in a JSON response.
## setting up dev env 
- choose text editor
- install node.js: provide with the runtime env to run js code
## initialize the project
- set __Package.json__, which store information about the project and dependencies, 
```zsh
`npm init -y`
```
## install dependencies
- express.js: web application framework for node.js to handle http request
```zsh
run`npm`
```
## create the express server in `index.js`
- set end point
```js
app.get('/api/timestamp/:date_string?', (req, res) =>
{...})
``` 
### breakdowns
- `'/api/timestamp/:date_string?'` is the route path
- `:date_string?` is an optional parameter that can be provided in the url
- `(req, res) => { ... }` serves as the __route handler__
- check the provided date string, convert it to JavaScript`Date`object, and then checks if it's a validate date.
    - if not a valid date, it returns an error json object
    - otherwise, it returns a json object with the unix timestamp and the utc representation of the date
### run the server `node index.js`