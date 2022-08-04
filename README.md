# reactj-expressjs template

## Use for local
1. if done cloning the repo
2. go to the repo base directory and run:
    - `npm install`
    -  at repo base directory, run again `cd client && npm install`
3. if you change the port of the server, make sure to change the proxy in client
    - to change, just open ` client/package.json` and change 
    this


         ```... "proxy": "http://localhost:3003",```
4. to run the app just run with each own terminal
    - `npm start`
    - `cd client && npm start`

## for production
1. open the `.env` in base directory and change `NODE_ENV` into `NODE_ENV=production`
2. generate a build directory in client
    - `cd client && npm run build`
3. now try running the server only, `npm start`