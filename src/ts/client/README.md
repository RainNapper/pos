## Client app code  
Code that is running on client devices

## Initial setup  
Install yarn and grunt globally 
`npm install -g yarn grunt npm-run`

## Run app  
From directory with package.json  
`grunt exec:electron`

## Compile just app code and bundle (and babel and maybe other stuff)  
`grunt webpack:dev`

## Compile app as well as external dependencies  
`grunt webpack:dev_with_externals`

## Linter  
`grunt tslint`  
`grunt tslint --fix`
