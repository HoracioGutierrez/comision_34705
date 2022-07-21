import Nav from "./Nav"

const Footer = (props) => {
    
    console.log(props)
    console.log(props.nombre)

    return (
        <footer>
            <p>Bienvenido {props.nombre}</p>
            <Nav
                type="footer"
            />
        </footer>
    )
}

export default Footer