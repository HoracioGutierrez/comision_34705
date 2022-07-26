const Main = (props/* { uno, dos, tres } */) => {
    //console.log(props)
    
    //console.log(props.uno)
    //console.log(props.dos)
    //console.log(props.tres)
    
    
    //const uno = props.uno
    //const dos = props.dos
    //const tres = props.tres
    //const { uno, dos, tres } = props;

    //console.log(uno)
    //console.log(dos)
    //console.log(tres)


    return (
        <main>
            <h2>Home</h2>
            {props.children}
        </main>
    )
}

export default Main