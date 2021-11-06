//document.getElementById('contador').innerText = 5;
//console.log (count) //Uncaught ReferenceError: Cannot access 'count' before initialization
////////////////////////////////////////////////////////////////////////////
//LISTEN PARA CLICKS NO BOTAO INCREMENTO  //adicionar atributo onclick no button com id btnAdicionar

let c = document.getElementById('contador')/*c passa a ser o contador, getElementById */
//INCIALIZAR COUNT A 0
let count =0

//INCREMENTAR A VAR COUNT QUANDO BOTAO CLICK
function adicionar()
{
    
    //console.log("O botão foi clicado!")
    count ++
    console.log(count)
    c.innerText = count
}
function mudaCor()
{
    c.style.background="red"
}
function mudaCor2()
{
    c.style.background="linear-gradient(90deg, #6a29d4, #173ff1)"
}
//MUDAR O CONTADOR INNERHTML PARA O VALOR DA VAR COUNT
