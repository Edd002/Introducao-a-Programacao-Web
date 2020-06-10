function calcula() {
	var altura = document.getElementById('altura');
	<!-- alert(altura.value); -->
	var peso = document.getElementById('peso');
	var IMC = document.getElementById('IMC');
	var quadrado = (altura.value * altura.value);
	IMC.value = (peso.value/quadrado).toFixed(2);
	var alert1 = document.getElementById('alert').className; 
}
			
function imc(){
	var IMC = document.getElementById("IMC");
	var div = document.getElementById("divResultado");

	if(IMC.value<18.5){
		<!-- altera a class da div -->
		document.getElementById('alert').className = 'alert alert-success';
		<!-- altera o display da div -->
		document.getElementById('alert').style.display = "block";
		document.getElementById('tabela-imc').style.display = "block";
		<!-- altera o texto dentro do alert -->
		div.innerText = 'Voc� est� magro com esse �ndice';	
	} else if(IMC.value>=18.5 && IMC.value<24.9) {
		<!-- alert("Voc� est� normal com esse indice: " + IMC.value); -->
		document.getElementById('alert').className = 'alert alert-info';
		document.getElementById('alert').style.display = "block";
		document.getElementById('tabela-imc').style.display = "block";
		div.innerText = 'Voc� est� normal com esse �ndice';
	} else if(IMC.value>=25 && IMC.value<29.9) {
		<!-- alert("Voc� est� com sobre peso com esse indice: " + IMC.value); -->
		document.getElementById('alert').className = 'alert alert-warning';
		document.getElementById('alert').style.display = "block";
		document.getElementById('tabela-imc').style.display = "block";
		div.innerText = 'Voc� est� com sobre peso com esse �ndice';
	} else if(IMC.value>=30 && IMC.value<39.9) {
		<!-- alert("Voc� est� com obesidade com esse indice: " + IMC.value); -->
		document.getElementById('alert').className = 'alert alert-danger';
		document.getElementById('alert').style.display = "block";
		document.getElementById('tabela-imc').style.display = "block";
		div.innerText = 'Voc� est� com obesidade com esse �ndice';
	} else if (IMC.value>40){
		<!-- alert("Voc� est�com obesidade grave com esse indice: " + IMC.value); -->
		document.getElementById('alert').className = 'alert alert-danger';
		document.getElementById('alert').style.display = "block";
		document.getElementById('tabela-imc').style.display = "block";
		div.innerText = 'Voc� est� com obesidade grave com esse �ndice';
	}
}