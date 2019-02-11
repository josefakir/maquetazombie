var app = new Framework7({
  // App root element
  root: '#app',
  theme : 'ios',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      path: '/about/',
      url: 'about.html',
    },
    {
      path: '/',
      url: 'index.html',
    },
    {
      path: '/dashboard/',
      url: 'dashboard.html',
    },
  ],
  // ... other parameters
});

var mainView = app.views.create('.view-main');
