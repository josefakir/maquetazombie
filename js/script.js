var URL_WS = 'http://localhost/api.soyzombie.com/';
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
  	path: '/salud-financiera/',
  	url: 'salud-financiera.html',
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


$(document).on("click","#btn_registro",function() {
	nombre = $('#registro_nombre').val();
	correo = $('#registro_correo').val();
	password = $('#registro_password').val();
	$.ajax({
		headers: {
			"nombre" : nombre,
			"correo" : correo,
			"password" : password
		},
		beforeSend : function(){
			app.preloader.show();
		},
		complete : function(){
			app.preloader.hide();
		},
		success : function(data){
			app.dialog.alert("Guardado correctamente", "Éxito",function(){
				app.loginScreen.close('.register-screen', true);
			});
		},
		error : function(data){
			app.dialog.alert(data.responseJSON.message, "Error");
		},
		type : 'POST',
		url : URL_WS+'registrar',
	});
});

$(document).on("click","#btn_login",function() {
	correo = $('#login_correo').val();
	password = $('#login_password').val();
	$.ajax({
		headers: {
			"correo" : correo,
			"password" : password
		},
		beforeSend : function(){
			app.preloader.show();
		},
		complete : function(){
			app.preloader.hide();
		},
		success : function(data){
			if(data[0].auth==true){
				localStorage.setItem('auth', true);
				localStorage.setItem('apikey', data[0].apikey);
				localStorage.setItem('userid', data[0].user_id);
				localStorage.setItem('correo', data[0].correo);
				localStorage.setItem('nombre', data[0].nombre);
				mainView.router.navigate('/dashboard/');
			}
		},
		error : function(data){
			app.dialog.alert(data.responseJSON.message, "Error");
		},
		type : 'POST',
		url : URL_WS+'login',
	});
});

$(document).on("click","#logout",function(e) {
	e.preventDefault();
	localStorage.removeItem('auth');
	localStorage.removeItem('apikey');
	localStorage.removeItem('userid');
	localStorage.removeItem('correo');
	localStorage.removeItem('nombre');
	mainView.router.navigate('/');

})

$(document).ready(function(){
	if(localStorage.getItem('auth')){
		mainView.router.navigate('/dashboard/');
	}
})