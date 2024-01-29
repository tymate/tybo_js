# Stimulus controllers for ruby gem tybo (Custom admin engine for Ruby on Rails)

### NPM/JSPM package

The Stimulus controllers required for the components to work properly must be published in an NPM package and then listed on JSPM so that they can be loaded by importmaps.

To put a new version online, it is necessary to :
1. Update the version number in the `package.json` file.
2. Run `npm run build`
3. GET `https://api.jspm.io/build/@tymate/tybo@<version number>` in order to build a queue request on JSPM
4. Once the request is processed (it is possible to track through the [JSPM:Generator](https://generator.jspm.io)), retrieve the new link and update it in the `config/importmap.rb` of the Rails project.
