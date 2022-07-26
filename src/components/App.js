import { useState } from "react"
import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main";


const App = () => {
    /* const resultado = useState(0)
    let contador = resultado[0]
    const setContador = resultado[1] */
/* 
    const obj = {prop:val}
    const arr = [1,2,3]

    const {prop} = obj
    const [uno,dos,tres] = arr */


    /* const arr = useState(0)
    const [contador, setContador] = arr */

    const [contador, setContador] = useState(0)

    //console.log(contador)
    //contador++
    //console.log(contador)


    //let contador = 0 //objetivo a conseguir con el useState

    const aumentarContador = () => {
        console.log("aumentarContador")
        //contador++
        //contador = contador + 1
        //contador += 1 
        //setContador(contador++)
        //setContador(contador+=1)
        if(contador<5){
            setContador(contador + 1)
        }
    }

    const disminuirContador = () => {
        setContador(contador - 1)
    }

    const resetearContador = () => {
        setContador(0)
    }

    return (
        <>
            <Header contador={contador} />
            <Main uno={true} dos={1} tres={"Horacio"}>
                <h1>Hola</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil nobis temporibus at facere assumenda, accusamus perspiciatis sint maiores nesciunt ratione, commodi rerum eos libero tempore repudiandae ab saepe, laudantium possimus.</p>
            </Main>
            <button onClick={aumentarContador}>click</button>
            <button onClick={resetearContador}>click</button>
            <button onClick={disminuirContador}>click</button>
            <Footer contador={contador} test={true} nombre="Horacio" />
        </>
    )
}

export default App;