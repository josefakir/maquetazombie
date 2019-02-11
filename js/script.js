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
  {
    path: '/gastos-fijos/',
    url: 'gastos-fijos.html',
  },
  {
    path: '/gastos-variables/',
    url: 'gastos-variables.html',
  },
  {
    path: '/ingresos-fijos/',
    url: 'ingresos-fijos.html',
  },
  {
    path: '/ingresos-variables/',
    url: 'ingresos-variables.html',
  },
  {
    path: '/metas/',
    url: 'metas.html',
  },
  {
    path: '/agregar-meta/',
    url: 'agregar-meta.html',
  },
  {
    path: '/configuracion/',
    url: 'configuracion.html',
  },
  {
    path: '/recordatorios/',
    url: 'recordatorios.html',
  },
  {
    path: '/agregar-recordatorio/',
    url: 'agregar-recordatorio.html',
  },
  {
    url: 'meta.html',
    alias: '/meta/',
    path: '/meta/:id_meta?',
  },
  {
    url: 'recordatorio.html',
    alias: '/recordatorio/',
    path: '/recordatorio/:id_meta?',
  },
  ],
  // ... other parameters
});

var mainView = app.views.create('.view-main');
