import './MenuList.css'
import { textoOpcoes } from '../../constant/constant';

const MenuList = () => {  
    return (
      <div className="topnav">
        <a className="active" href="/Home">Home</a>
        {textoOpcoes.map((opcao, index) => (
          <a key={index} href={opcao.href}>{opcao.name}</a>
        ))}
      </div>
    );
  }
  
  export default MenuList;