# Grunt-a-boilerplate

To get started:

1. Have Grunt, npm, Sass (3.3+)
2. `git clone` this repo
3. `npm i` - will install all necessary Grunt toys
4. `bower update` - install all 3rd party libraries (important for CSS generation w/ Sass). Normalize is included by default
5. `grunt prep` - prepares a custom Modernizr build. Need only be run once at start of project, or whenever a new Modernizr test is required.
6. `grunt generate` - Using Assemble.io this will generate static pages in `build` from the available layout/partial/markdown documents
7. `grunt` - This will run in development mode, i.e. css mapping, expanded output of css. Hopefully Grunt will compile the `build/assets/main.css` file and "*Done, without errors*"


## Updating when new 3rd party tools/packages have been added

Things looking a bit odd? Try this:

1. `npm i` - this update any Grunt plug-ins that may have been added
2. `bower update` - this will look for any new 3rd party libraries
3. `grunt prep` - Maybe the website is now dependant on additional Modernizr tests? Lets regenerate Modernizr just in case.
4. `grunt` - Re-running this will regenerate your JS and CSS, hopefully with all the new toys included
