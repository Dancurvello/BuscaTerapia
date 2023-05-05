import './MenuList.css'
import { textoOpcoes } from '../../constant/constant';

const MenuList = () => {  
    return (
      <div className="topnav">        
        {textoOpcoes.map((opcao, index) => (
          <a key={index} className="active" href={opcao.href}>{opcao.name}</a>
        ))}
        <a className="active" href="/Home">Home</a>
        
      </div>
    );
  }
  
  export default MenuList;