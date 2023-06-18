async function matrixProduct(matrix1, matrix2) {
  // Verifica se as matrizes têm dimensões adequadas para o produto
  if (matrix1[0].length !== matrix2.length) {
    throw new Error(
      "As dimensões das matrizes são incompatíveis para a multiplicação."
    );
  }
  // Cria uma matriz vazia para armazenar o resultado
  const result = [];
  // Inicializa a matriz de resultado com zeros
  for (let i = 0; i < matrix1.length; i++) {
    result[i] = [];
    for (let j = 0; j < matrix2[0].length; j++) {
      result[i][j] = 0;
    }
  }
  // Calcula o produto entre as matrizes
  for (let i = 0; i < matrix1.length; i++) {
    for (let j = 0; j < matrix2[0].length; j++) {
      for (let k = 0; k < matrix1[0].length; k++) {
        result[i][j] += matrix1[i][k] * matrix2[k][j];
      }
    }
  }
  // Retorna a matriz de resultado
  return result;
}
// Exemplo de uso
const matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
];
const matrix2 = [
  [7, 8],
  [9, 10],
  [11, 12],
];

const product = matrixProduct(matrix1, matrix2);
console.log(product);

module.exports = { matrixProduct };
