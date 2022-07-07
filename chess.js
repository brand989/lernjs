let main = document.querySelector('main');

let alphabet = ["","A", "B", "C", "D", "E", "F", "G", "H"]



for (let j = 0; j < 9; j++) {

    let letter = document.createElement('div');
    letter.innerHTML = alphabet[j];


    main.appendChild(letter);

    for (let i = j; i < j + 8; i++) {

        if ( j == 0) {
            let number = document.createElement('div');
            number.innerHTML =  i + 1;
            main.appendChild(number);
            continue;
        }


        let cell = document.createElement('div');


        if (i % 2) {
            cell.className = "cell black";;
        } else {
            cell.className = "cell white";;
        }

        main.appendChild(cell);
    }
}




