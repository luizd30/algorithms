/**
 * Ordena um array de números usando o algoritmo Selection Sort.
 *
 * @param value - O array de números a ser ordenado.
 * @returns O array ordenado.
 *
 * Complexidade de tempo: O(n^2)
 * Complexidade de espaço: O(1)
 */
export const selectionSort = (value: number[]): number[] => {
  // Itera sobre cada elemento do array, exceto o último
  for (let i = 0; i < value.length - 1; i++) {
    // Assume que o menor elemento está na posição i
    let min_idx = i;

    // Encontra o menor elemento na parte não ordenada do array
    for (let j = i + 1; j < value.length; j++) {
      if (value[j] < value[min_idx]) {
        min_idx = j;
      }
    }

    // Troca o menor elemento encontrado com o elemento na posição i
    [value[i], value[min_idx]] = [value[min_idx], value[i]];
  }

  // Retorna o array ordenado
  return value;
};
