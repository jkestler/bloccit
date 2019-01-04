// export an object with a function 'init' which loads defined routes and defines them on Express app object.
// we call 'init' in app.js and pass in our express app to initialize all routes.

module.exports = {
   init(app) {
      const staticRoutes = require('../routes/static');
      const topicRoutes = require("../routes/topics");
      const adRoutes = require("../routes/ads");

      app.use(staticRoutes);
      app.use(topicRoutes);
      app.use(adRoutes);
   }
}
