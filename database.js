'use strict';


const database = exports = module.exports = {};

database.init = () => {
	// initialize each db here
	this.db_pages = '';
	this.db_users = '';
};

// {"status": VARCHAR(20), "link": VARCHAR(100), "date": VARCHAR(30), "title": VARCHAR(60), "content": VARCHAR(255)}
// DB Page method
database.getPage = (_data) => {};

database.createPage = (_data) => {};

database.modifyPage = (_data) => {};

database.deletePage = (_data) => {};

// {"login": VARCHAR(60), "pass": VARCHAR(100), "email": VARCHAR(100), "status": VARCHAR(20)}
// DB User method
database.getUser = (_data) => {};

database.createUser = (_data) => {};

database.modifyUser = (_data) => {};

database.deleteUser = (_data) => {};