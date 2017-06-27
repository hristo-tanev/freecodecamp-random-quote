# freecodecamp-random-quote
> Random quote generator done with Node.js and ReactJS based on the freeCodeCamp initiative.

[![Build Status](https://travis-ci.org/hristo-tanev/freecodecamp-random-quote.svg?branch=master)](https://travis-ci.org/hristo-tanev/freecodecamp-random-quote)

# Install
To install all the relevant modules needed for the application to run, navigate to the project folder and run the following command:
```
npm install
```
After all modules are installed to run the application execute the command below and navigate your browser to the following address: ```localhost:3000```
```
npm start
```

# Description
The functionality of the application requires it to fulfill the following two requirements:
  1. The user should be able to generate a new quote.
  1. The user should be able to tweet the quote.
  
 For satusfying the first requirement I have used the following webasite to fetch the initial set of quotes: ```http://quotesondesign.com/```. It allows the quotes to be fetched in a set of at most 10 at once. To generate a new quote the user would have to press __New quote__ button.

The second requirment however would require the use of an external npm package: [node-twitter](https://github.com/desmondmorris/node-twitter). How it can be used and examples of it can be found in the README section of the repository.

# License
See the [LICENSE](https://github.com/hristo-tanev/freecodecamp-markdown-previewer/LICENSE) file for license rights and limitations (MIT).
