const szachownica = document.getElementById('wrapp')



for(let wiersz=0; wiersz<8; wiersz++){
    for(let kolumna = 0; kolumna<8; kolumna++){

        const kwadrat = document.createElement('div');
        if((kolumna+wiersz) % 2 ==0){
            kwadrat.classList.add('kwadrat_bialy')
        } else{
            kwadrat.classList.add('kwadrat_czarny')
        }

szachownica.appendChild(kwadrat);

    }
}


