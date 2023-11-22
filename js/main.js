'use strict';

/* FIRST SNACK */

/* const biciclette = [
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
biciElement.innerHTML = `La bici con peso minore è la ${biciMinorePeso.nome} con un peso di ${biciMinorePeso.peso} kg.`; */


/* SECOND SNACK */

/* const soccerTeams = [
    {
        nome: 'Roma',
        puntiFatti: '',
        falliSubiti: '',
    },
    {
        nome: 'Milan',
        puntiFatti: '',
        falliSubiti: '',
    },
    {
        nome: 'Napoli',
        puntiFatti: '',
        falliSubiti: '',
    },
    {
        nome: 'Inter',
        puntiFatti: '',
        falliSubiti: '',
    },
    {
        nome: 'Juventus',
        puntiFatti: '',
        falliSubiti: '',
    }
]

function generaPuntiRandom() {
    const puntiRandom = [];
    for (let i = 0; i < 10; i++) {
        puntiRandom.push(Math.floor(Math.random() * 100));
    }
    return puntiRandom;
}

function generaFalliRandom() {
    const falliRandom = [];
    for (let i = 0; i < 10; i++) {
        falliRandom.push(Math.floor(Math.random() * 100));
    }
    return falliRandom;
}

function assegnaNumeriRandom(squadre, puntiRandom, falliRandom) {
    squadre.forEach((squadra, index) => {
        squadra.puntiFatti = puntiRandom[index];
        squadra.falliSubiti = falliRandom[index];
    });
}

function stampaSquadre(squadre) {
    squadre.forEach(squadra => {
        console.log(`Nome: ${squadra.nome}, Punti Fatti: ${squadra.puntiFatti}, Falli Subiti: ${squadra.falliSubiti}`);
    });
}

const puntiRandom = generaPuntiRandom();
const falliRandom = generaFalliRandom();
assegnaNumeriRandom(soccerTeams, puntiRandom, falliRandom);


stampaSquadre(soccerTeams); */


