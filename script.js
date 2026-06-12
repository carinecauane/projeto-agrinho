function calcularRecursos() {
    // Captura os valores inseridos pelo usuário
    const area = parseFloat(document.getElementById('area').value);
    const cultura = document.getElementById('cultura').value;
    const resultadoSelec = document.getElementById('resultado');
    const resultadoTexto = document.getElementById('resultado-texto');

    // Validação simples para garantir que os campos foram preenchidos
    if (!area || cultura === "") {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // Variáveis para armazenar as médias de consumo sustentável por hectare/dia
    let aguaPorHectare = 0;
    let fertilizantePorHectare = 0;

    // Lógica de negócio baseada na cultura (valores fictícios para fins educativos)
    if (cultura === "graos") {
        aguaPorHectare = 4500; // litros por dia por hectare
        fertilizantePorHectare = 15; // kg de adubo orgânico por hectare
    } else if (cultura === "hortalicas") {
        aguaPorHectare = 6000;
        fertilizantePorHectare = 25;
    } else if (cultura === "frutas") {
        aguaPorHectare = 5000;
        fertilizantePorHectare = 20;
    }

    // Cálculo total baseado na área do produtor
    const totalAgua = area * aguaPorHectare;
    const totalFertilizante = area * fertilizantePorHectare;

    // Criação do texto de resposta com boas práticas ecológicas
    resultadoTexto.innerHTML = `
        <div class="destaque-sucesso">
            <p>Para uma área de <strong>${area} hectares</strong> de cultivo de <strong>${cultura.toUpperCase()}</strong>, o manejo ideal recomendado é:</p>
            <br>
            <p>💧 <strong>Consumo estimado de água:</strong> ${totalAgua.toLocaleString('pt-BR')} Litros / dia.</p>
            <p>🍃 <strong>Fertilizante Orgânico sugerido:</strong> ${totalFertilizante.toLocaleString('pt-BR')} Kg / ciclo.</p>
            <br>
            <p><em>*Dica de Ouro: Utilize gotejamento na irrigação para reduzir o consumo de água em até 30% e evitar a erosão do solo!</em></p>
        </div>
    `;

    // Remove a classe "hidden" para tornar o resultado visível na tela
    resultadoSelec.classList.remove('hidden');
}