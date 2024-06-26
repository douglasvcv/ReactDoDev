import Botao from "../Atoms/Button";

function Header(){
    
    function AcaoDoClick(valor){
        alert("Ação do click na seção: " + valor)
    }
    
    return (
        <div>
            <Botao onclick={AcaoDoClick}>
                Botão na seção
            </Botao>
            <span>Exemple</span>
            <Botao>Tome outro botão</Botao>
        </div>
    )
}

export default Header