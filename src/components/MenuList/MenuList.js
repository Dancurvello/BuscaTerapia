import './MenuList.css'
import { textoOpcoes } from '../../constant/constant';



/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


const MenuList = () => {  
    return (
      <div class="topnav" id="myTopnav">
        <a href="/home" class="active">Home</a>
        <a href="/Favorites">Favoritos</a>
        <a href="/MyAccount">Minha Conta</a>
        <a href="/About">Sobre</a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
        </a>
    </div>
    );
  }
  
  export default MenuList;