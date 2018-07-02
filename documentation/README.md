# A place to store project documentation and non-code deliverables

## Meteor rules of the road and terminology:

- Files: 
	- public folder is for statically loaded images that are part of the website design
	-  client folder are 'eagerly loaded' -- i.e. they will load first, as soon as the site goes up. 
	- imports folder is where most of the code will be -- everything from imports must be imported somewhere, or it is never used. 
		-  breakdown:
			- **startup**: configuration that runs on startup, separated between server configuration files and client configuration files. The client configuration files
			will include the configuration of all routes needed on the client. The index file for these will then import everything else made in that startup config to make it easier to use in client/main.js and in server/main.js. 
				- server/fixtures.js: These are the database 'seeds'.
				- server/security.js: The security settings we select. 
			- **api**: Note how each unit of domain logic has its own folder -- buddies, events, profiles, users. 
				- Buddies.js: the collection or schema (model) for buddies. See: https://guide.meteor.com/collections.html 
				- buddies.tests.js: the tests that you run to make sure the schema works
				- Methods.js: Note that each domain unit has a methods.js
					- Methods are similar to the concept of the controller. They tell the app
					how to communicate with collections (collections being Meteor's models).
					- See: https://guide.meteor.com/methods.html. Methods will define our CRUD operations. 
				- Note that each unit of domain logic also has a server folder. This is to separate the server-side logic. 
					- Publications: publications will send data from the server to the client. They control who on the client has rights to see something (e.g. by user or for everyone). The other side of this is a subscription -- the client-side that requests the data from the publication. If a Mongo model is a collection of documents, then we are publishing those documents and sending them to their subscribers. 
						- **Important**: Publications are *server-only* as they send data from the server. 
			- **ui**: User Interface: Will define the layout and logic of the site. 
				- components: Essentially, React components. Modular units such as rows, navs,
				headlines, etc. 
				- Remember, components can subscribe to publications
				- layouts:  page-level design
				- pages: encapsulates the layouts
			- **server**: main.js
				- Think of this as the server version of the client/main.js. This is an eagerly loaded file and will contain references to anything the server needs from imports. 
			- uploading pics and files:
				- We're going to need a package to handle this, I'm thinking: https://atmospherejs.com/lepozepo/cloudinary. It comes recommended in the documentation. 

