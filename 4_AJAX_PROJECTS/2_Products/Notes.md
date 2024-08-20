# Three Possible States of AJAX

1. Loading State
2. State if Successful - Displaying Data
3. Error State

## In these states we switch states to perform functionality

### If data is successful

- remove the loading
- display the data

### If Data is unsuccessful

- remove the loading
- display the error

### Summary (Same idea for vanilla js or any frameworks)

- Our job is just to, flipping those states based on the responses we are getting back.

# Always Go Through API Docs

- check response in browser
- if response=ok , then check for api docs for specific endpoint we need.
- check for headers & other stuffs while fetching
  - send as options {headers: } (if accepting)
  - if not just fetch through browser API - fetch(url) or use any third party libraries.
