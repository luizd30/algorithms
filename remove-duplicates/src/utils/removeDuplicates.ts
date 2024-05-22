/**
 * Remove duplicatas de um array ordenado in-place, modificando o array original.
 *
 * A função `removeDuplicates` recebe um array de números e remove duplicatas,
 * mantendo apenas elementos únicos no array. A remoção das duplicatas é feita
 * in-place, ou seja, sem criar um novo array.
 *
 * @param nums - O array ordenado do qual as duplicatas serão removidas.
 * @returns O comprimento do array após a remoção das duplicatas.
 *
 * A lógica da função é baseada nos seguintes passos:
 * 1. Verifica se o array está vazio e retorna 0 se for o caso.
 * 2. Utiliza um índice `k` para manter a posição dos elementos únicos.
 * 3. Itera pelo array a partir do segundo elemento.
 * 4. Se o elemento atual for diferente do anterior, move-o para a posição `k` e incrementa `k`.
 * 5. Retorna o comprimento do array após a remoção das duplicatas.
 *
 * Complexidade:
 * - Tempo: O(n), onde n é o comprimento do array `nums`.
 *   A função percorre cada elemento do array uma vez.
 * - Espaço: O(1). A função utiliza uma quantidade fixa de espaço adicional,
 *   independente do tamanho do array de entrada.
 */
export const removeDuplicates = (nums: number[]): number => {
    if (nums.length === 0) return 0;
  
    let k = 0;
  
    for (let i = 1; i < nums.length; i++) {
      if (nums[k] !== nums[i]) {
        k++;
        nums[k] = nums[i];
      }
    }
    return k + 1;
  };
  