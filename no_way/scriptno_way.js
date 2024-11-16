function tisni() {
    let max = document.getElementById('number').value
    if (max % 1 == 0) {
        if (max > 0) {
            silnia(max)
        } else {
            alert('liczba musi byc weksza od 0')
        }
    } else {
        alert('liczba musi byc calkowita')
    }

    function silnia(zmienna) {
        console.log(zmienna)
        zmienna= parseInt(zmienna)
        let wynik = 1
        for (let i = 1; i <= zmienna; i++) {
            // wynik += i;
            parseInt(wynik *= i)
        }
    }
    document.getElementById('wynik').innerHTML = wynik.toString()
   
}

