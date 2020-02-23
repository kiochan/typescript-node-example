# a Example for Typescript and Node work together
just another simple way to get the job done without any babel or bundle stuff

## How to use?

build source code
```sh
yarn build
```

run dist
```sh
yarn start
```

watch files from source
```sh
yarn watch
```

you may use other package (like `nodemon`) to watch dist and restart your program
```bash
# unix-like bash
yarn watch & nodemon ./dist/index.js
```

```powershell
# powershell
start yarn watch && start nodemon ./dist/index.js
```

```sh
# or just use concurrently
concurrently "yarn watch" "nodemon ./dist/index.js"
```