import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class LoadSudokuService {

    constructor(public http: Http) {
        console.log('Sudoku Loader Service Up')
    }

    getSudoku(level, callback) {
        this.http.get(`api/sudoku/level/${level}`)
            .subscribe(
                res => callback(undefined, res),
                err  => callback(err)
            )
    }

    getGames(userName, callback) {
        console.log("Estoy en loadSudokuService")
        this.http.get(`api/sudoku/games/${userName}`)
            .subscribe(
                res => callback(undefined, res),
                err  => callback(err)
            )
    }

    getSolution(sudoku, callback) {
        console.log('Estoy llamando el servidor para que me de una solucion')
        console.log(JSON.stringify(sudoku, (k, v) => {console.log(k, v); return v;}, 4))
        this.http.get(`api/sudoku/solve/${sudoku}`)
            .subscribe(
                res => callback(undefined, res),
                err => callback(err)
            )
    }
}
