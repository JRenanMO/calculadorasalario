function calcular(paramentro) {
    let salarioBruto = parseInt(document.getElementById('salarioBruto').value);

    let resultadoLiquido
    let descontoInss;
    let descontoIrpf;

    descontoInss = salarioBruto*0.05
    descontoIrpf = salarioBruto*0.07
    resultadoLiquido = salarioBruto - descontoInss - descontoIrpf

    console.log(resultadoLiquido)
    console.log(descontoInss)
    console.log(descontoIrpf)
    console.log(salarioBruto)

    document.getElementById('descontoInss').value = descontoInss
    document.getElementById('descontoIrpf').value = descontoIrpf
    document.getElementById('salarioLiquido').value = resultadoLiquido
}