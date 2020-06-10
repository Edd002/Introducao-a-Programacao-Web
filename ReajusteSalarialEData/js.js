function calcular(salario) {
	salario = parseFloat(salario);
	var percentualAumento = 0.0;
	var valorAumento = 0.0;
	var novoSalario = 0.0;

	if (salario <= 280.00) {
		// Aumento de 20%
		percentualAumento = 0.2;
		valorAumento = salario * percentualAumento;
		novoSalario = salario + valorAumento;
		preencherCampos(salario, percentualAumento, valorAumento, novoSalario);
		//alert("Salário Antes: " + salario + "\nPercentual: " + percentualAumento + "\nAumento: " + valorAumento + "\nNovo Salário: " + novoSalario);
	} else if (salario > 280.00 && salario <= 700.00) {
		// Aumento de 15%
		percentualAumento = 0.15;
		valorAumento = salario * percentualAumento;
		novoSalario = salario + valorAumento;
		preencherCampos(salario, percentualAumento, valorAumento, novoSalario);
		//alert("Salário Antes: " + salario + "\nPercentual: " + percentualAumento + "\nAumento: " + valorAumento + "\nNovo Salário: " + novoSalario);
	} else if (salario > 700.00 && salario <= 1500.00) {
		// Aumento de 10%
		percentualAumento = 0.1;
		valorAumento = salario * percentualAumento;
		novoSalario = salario + valorAumento;
		preencherCampos(salario, percentualAumento, valorAumento, novoSalario);
		//alert("Salário Antes: " + salario + "\nPercentual: " + percentualAumento + "\nAumento: " + valorAumento + "\nNovo Salário: " + novoSalario);
	} else {
		// Aumento de 5%
		percentualAumento = 0.05;
		valorAumento = salario * percentualAumento;
		novoSalario = salario + valorAumento;
		preencherCampos(salario, percentualAumento, valorAumento, novoSalario);
		//alert("Salário Antes: " + salario + "\nPercentual: " + percentualAumento + "\nAumento: " + valorAumento + "\nNovo Salário: " + novoSalario);
	}
}

function preencherCampos(salarioAntes, percentualAumento, valorAumento, novoSalario) {
	document.getElementById('id-input-salario-antes').value = salarioAntes.toFixed(2);
	document.getElementById('id-input-percentual').value = percentualAumento * 100;
	document.getElementById('id-input-aumento').value = valorAumento.toFixed(2);
	document.getElementById('id-input-salario-novo').value = novoSalario.toFixed(2);
}

function converterData(data) {
	var vetorData = new Array();
	vetorData = data.split("/");
	var vetorMeses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
	var mesExtenso;

	for (i = 0; i < 12; i++) { 
		if (vetorData[1] == i) {
			mesExtenso = vetorMeses[i - 1];
		}
	}

	//alert("Data sem conversão (vetor): " + vetorData);
	//alert("Data convertida: " + vetorData[0] + " de " + mesExtenso + " de " + vetorData[2]);

	document.getElementById('id-input-data-extenso').value = vetorData[0] + " de " + mesExtenso + " de " + vetorData[2];
}