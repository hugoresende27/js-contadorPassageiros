//document.getElementById('contador').innerText = 5;
//console.log (count) //Uncaught ReferenceError: Cannot access 'count' before initialization
////////////////////////////////////////////////////////////////////////////
//LISTEN PARA CLICKS NO BOTAO INCREMENTO  //adicionar atributo onclick no button com id btnAdicionar

let c = document.getElementById('contador')/*c passa a ser o contador, getElementById */
let m = document.getElementById('mostra')
let tot = document.getElementById('contadorTotal')
//INCIALIZAR COUNT A 0
let count =0
let countTotal=0

//INCREMENTAR A VAR COUNT QUANDO BOTAO CLICK
function adicionar()
{
    
    //console.log("O botão foi clicado!")
    count ++
    countTotal++
    console.log(count)
    //MUDAR O CONTADOR INNERHTML PARA O VALOR DA VAR COUNT
    c.innerText = count
}
function mudaCor()
{
    c.style.background="#F28D77"
}
function mudaCor2()
{
    c.style.background="linear-gradient(90deg, #6a29d4, #173ff1)"
}
///////////////////////////////////////////
function final()
{
    let contStr = count + " - "
   // m.innerHTML += contStr
    m.textContent += contStr
    count=0
    c.innerHTML=count
    tot.innerHTML = countTotal
}
//////////////////////////////////////////
function reset()
{
    countTotal=0
    count=0
    c.innerText=count
    m.innerText=""
    tot.innerText=countTotal
}
