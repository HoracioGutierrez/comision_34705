import Nav from "./Nav"

const Header = () => {
    return (
        <header id="header">
            <h1 className="titulo" >Titlo</h1>
            <img src="/logo192.png"/>
            <Nav
                type="header"
            />
        </header>
    )
}

export default Header