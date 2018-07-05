## A place to keep track of Meteor issues for post-project reporting, issue reproduction and debugging. 

- When I install meteortesting:mocha package, tests that follow RE *.tests.js do not run but tests in test/main.js do run. 
- I went to my tutorial and added only that package, then noticed it added some scripts to package.json. I checked against the github version: https://github.com/meteortesting/meteor-mocha and noticed it did not have those scripts, so I deleted them from package.json and ran them. After doing so, my *.tests.js DID run but test/main.js did -- the expected behavior. I would like to test this more after the project. 
