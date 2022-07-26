import Nav from "./Nav"

const Footer = ({contador,nombre}) => {

    return (
        <footer>
            <p>Bienvenido {nombre}</p>
            <p>El contador va : {contador}</p>
            <Nav
                type="footer"
            />
        </footer>
    )
}

export default Footer