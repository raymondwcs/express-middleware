# Express Middle Example
This example demonstrates the use of the middleware to change value of a query string parameter.

An [`application-level`](https://expressjs.com/en/guide/using-middleware.html#middleware.application) `myMiddleware` intercepts *all* incoming request, replace the value of a query string variable `name` with "snoopy" unconditionally.

## Getting Started

### Installing
```
npm install
```
### Running
```
npm start
```
### Testing
Send GET request /hello?name=peter and see the value of name changed to "snoopy" in the server response.
