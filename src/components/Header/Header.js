import Logo from "../Logo/Logo"
import MenuList from "../MenuList/MenuList"

//TODO tentar entender porque o .css só funcionou quando colocado no header e não nos opcoesheader
import './Header.css'


const Header = () => {
    return (
        <>
        <MenuList/>
        <Logo/>
        </>
        
    )
}

export default Header