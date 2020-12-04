export{dibujaLogin, dibujaHome, dibujaMenu};
import { Page} from "../pages.js"


function dibujaLogin() {

    let loginPag = `<div id="login-button">
    <img class="img-log" src="https://dqcgrsy5v35b9.cloudfront.net/cruiseplanner/assets/img/icons/login-w-icon.png">
    </img>
  </div>
  <div id="container">
    <h1 class="a-h1">Inicia Sesión</h1>
    <span class="close-btn">
      <img class="img-log" src="https://cdn4.iconfinder.com/data/icons/miu/22/circle_close_delete_-128.png"></img>
    </span>
  
    <form>
      <input type="text" name="usuario" placeholder="Usuario">
      <input type="password" name="pass" placeholder="Contraseña">
      <a class="a-log boton-inicio">Inicia Sesión</a>
      <div id="remember-container">
        <input type="checkbox" id="checkbox-2-1" class="checkbox" checked="checked"/>
        <span id="remember">Recuerdame</span>
        <span id="forgotten">Olvidaste la contraseña</span>
      </div>
  </form>
  </div>
  
  <div id="forgotten-container">
     <h1>Forgotten</h1>
    <span class="close-btn">
      <img class="img-log" src="https://cdn4.iconfinder.com/data/icons/miu/22/circle_close_delete_-128.png"></img>
    </span>
  
    <form>
      <input type="email" name="email" placeholder="E-mail">
      <a href="#" class="orange-btn">Get new password</a>
  </form>
  </div>`;

  let log = document.querySelector('#contenido');
  log.innerHTML = loginPag;
}



function dibujaMenu(){

  let menu = `
  <div id="menu">
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #edd1dd;">
  <p class="navbar-brand"> <img class ="logo-peque" src="./Graficos/LogoPeque.png" width="120px"> </p>
  <div id="navbarColor03" class="collapse navbar-collapse">
   <ul class="navbar-nav mr-auto">
        <li class="nav-item"> 
            <a class="nav-link"> Inicio </a>
        </li>
        <li class="nav-item">
            <a class="nav-link">Eventos</a>
        </li>
        <li class="nav-item">
            <a class="nav-link">Perfil</a>
        </li>
        <li class="nav-item">
            <a class="nav-link">Usuarios</a>
        </li>
    </ul>
    <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search">
        <button class="btn btn-outline-primary my-2 my-sm-0" type="submit"> Buscar</button>
    </form>
</div>
</nav> </div>`;

      let superior = document.querySelector('#superior');
      superior.innerHTML = menu;



      setTimeout(() => {
          Array.from(document.querySelectorAll(".nav-link")).forEach(element => {
              element.addEventListener('click', function (e){
                Page.mostrarPagina(this.innerHtml); //esto da error
              })
          })
      },50);
}


function dibujaHome(){
  let home = ` <div class="wrapper">
  <div id="sidebar">
      <div class="sidebar-header">

          <img src="Graficos/MadBangLogo.gif">
      </div>
      <div class="sidebar-contenido">
          <p> <h3>Te damos la bienvenida a esta gran familia, $NombreUser! </h3>
              Ayudamos a conectar con la gente, con la ciudad, con tu trabajo...
              Prometemos ayudarte a disfrutar de tu tiempo de la manera que prefieras, aquí tienes libertad:
              decide profesion o sector laboral, elige pareja, aprovecha oportunidades y conoce personas afines a
              ti.
              O no.
              Puedes hacer lo que nunca te atreviste, tu solo, un viaje, un concierto, una excursión, con
              desconocidos, con amigos, o tu solo.
              Bienvenido a tu nueva vida, bienvenido a Mad Bang :) </p>

      </div>
      <div class="sidebar-menu">
            <p>   Perfil </p><span>|</span><p>  Eventos    </p><span>|</span> <p>  Usuarios </p>
      </div>
      <div class="sidebar-footer">
          <div class="iconos">
              <span href="#"><i class="facebook"><img src="./Graficos/facebook.png" width="35px"></i></span>
              <span href="#"><i class="twitter"></i><img src="./Graficos/twitter.png" width="30px"></i></span>
              <span href="#"><i class="instagram"><img src="./Graficos/instagram.png" width="30px"></i></span>
              <span href="#"><i class="whatsapp"><img src="./Graficos/wtpp.png" width="30px"></i></span>
          </div>
      </div>
  </div>`;

  let cont = document.querySelector('#contenido');
  cont.innerHTML = home;

  setTimeout(() => {
    Array.from(document.querySelectorAll(".sidebar-menu p")).forEach(element => {
        element.addEventListener('click', function (e){
            console.log(e.target.innerHTML);
            Page.mostrarPagina(this.innerHtml);
        })
    })
},50);
}



