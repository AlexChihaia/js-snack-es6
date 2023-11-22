'use strict';


const biciclette = [
    {
        nome: 'Bici pieghevole',
        peso: 7
    },
    {
        nome: 'Bici da cicloturismo',
        peso: 5
    },
    {
        nome: 'Mountain bike',
        peso: 8
    },
    {
        nome: 'Bici da corsa',
        peso: 4
    },
    {
        nome: 'Bici da ciclocross',
        peso: 12
    }
];


let biciMinorePeso = biciclette[0];

biciclette.forEach(({ nome, peso }) => {
    if (peso < biciMinorePeso.peso) {
        biciMinorePeso = { nome, peso };
    }
});

const biciElement = document.getElementById('bici')
biciElement.innerHTML = `La bici con peso minore è la ${biciMinorePeso.nome} con un peso di ${biciMinorePeso.peso} kg.`;