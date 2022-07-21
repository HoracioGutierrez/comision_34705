const Nav = (parametros) => {

  if(parametros.type == "header"){
    return (
      <nav>
        <a href="#">link-header</a>
        <a href="#">link-header</a>
        <a href="#">link-header</a>
      </nav>
    )
  }else{
    return (
      <nav>
        <a href="#">link-footer</a>
        <a href="#">link-footer</a>
        <a href="#">link-footer</a>
      </nav>
    )
  }

}

export default Nav