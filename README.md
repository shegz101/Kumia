# Challenges and Process of the Kumia Build

## First Challenge: Sass (Scss) package wasn't installed
The command below didn't install the package. I think its because Vite was what was used to bootstrap the project.
```
$ npm install -g sass
```
This command solved the issue. Thanks to (StackOverflow)[https://stackoverflow.com/questions/65589265/vite-how-to-use-sass]
```
$ npm install -D sass
```
