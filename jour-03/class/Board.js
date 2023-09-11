export class Board {

    constructor () {
        this.grid = [];
        this.hasWinner = Boolean;
    }

    initializeBoard () {
        this.grid = [
            ["-", "-", "-"],
            ["-", "-", "-"],
            ["-", "-", "-"]
        ];
        this.hasWinner = false;
    }

    // Crée une méthode qui affiche le contenu de la grille dans la div avec l’id “board”
    displayBoard () {

        // Récupère la div avec l’id “board”
        let board = document.querySelector("#board");

        // Crée une boucle pour parcourir les lignes de la grille
        for (let y = 0; y < 3; y++) {
            
            // Crée une div avec la class “row”
            let row = document.createElement("div");
            row.classList.add("row");

            // Crée une boucle pour parcourir les cases de la ligne
            for (let x = 0; x < 3; x++) {

                // Crée un bouton avec la class “case” et un id “btn-Y-X”
                let btn = document.createElement("button");
                btn.classList = "case";
                btn.id = "btn-" + y + "-" + x;
                btn.innerHTML = this.grid[y][x];

                // Ajoute le bouton à la div row
                row.appendChild(btn);

            }
        
            // Ajoute la div row à la div board
            board.appendChild(row);
            
        }

    }

    placeMove (row, col, symbol) {

    }

    checkVictory () {

    }

    isFull () {

    }

    resetBoard () {

    }

}