/**
 * Criar um programa que preenche uma Matriz de 10 linhas com 10 colunas. Exibir a matriz
    na tela. O programa deve então gerar uma segunda matriz que tem como base a primeira:
    Se o número da linha for igual ao número da coluna, colocar o valor "1" na posição.
    Se o número da linha for menor que o número da coluna, colocar o valor "0".
    Se o número da linha for maior que o número da coluna, colocar o valor "2".
    Exibir a segunda matriz na tela.
*/

let matrix = []
for (let indexY = 0; indexY < 10; indexY++) {
    for (let indexX = 0; indexX < 10; indexX++) {
        if(!matrix[indexY]) matrix[indexY] = []
        if(indexY == indexX) matrix[indexY][indexX] = 1
        if(indexY < indexX) matrix[indexY][indexX] = 0
        if(indexY > indexX) matrix[indexY][indexX] = 2
    }
}

console.table(matrix)