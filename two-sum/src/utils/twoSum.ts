/**
 * A função `bruteForce` tenta encontrar dois números em um array `nums`
 * cuja soma seja igual ao valor `target`. Se tais números forem encontrados,
 * a função retorna um par de números que satisfazem a condição. Caso contrário,
 * a função retorna um array vazio.
 *
 * @param {number[]} nums - Um array de números inteiros.
 * @param {number} target - O valor alvo que a soma de dois números deve atingir.
 * @returns {[number, number] | []} - Um par de números cuja soma é igual ao target,
 *                                    ou um array vazio se nenhum par for encontrado.
 *
 * Complexidade:
 * - Tempo: O(n^2) - Devido aos dois loops aninhados, onde 'n' é o tamanho do array `nums`.
 * - Espaço: O(1) - Usa espaço constante, independente do tamanho do array `nums`.
 */

export const bruteForce = (
  nums: number[],
  target: number
): [number, number] | [] => {
  // Percorre o array com o primeiro índice i
  for (let i = 0; i < nums.length; i++) {
    // Para cada índice i, percorre o array com o segundo índice j
    for (let j = i + 1; j < nums.length; j++) {
      // Verifica se a soma de nums[i] e nums[j] é igual ao target
      if (nums[i] + nums[j] === target) {
        // Se for, retorna o par de números que satisfazem a condição
        return [nums[i], nums[j]];
      }
    }
  }
  // Se nenhum par for encontrado, retorna um array vazio
  return [];
};

/**
 * A função `hashmap` tenta encontrar dois números em um array `nums`
 * cuja soma seja igual ao valor `target`, utilizando um map para armazenar
 * os números já percorridos e suas posições. Se tais números forem encontrados,
 * a função retorna um par de números que satisfazem a condição. Caso contrário,
 * a função retorna um array vazio.
 *
 * @param {number[]} nums - Um array de números inteiros.
 * @param {number} target - O valor alvo que a soma de dois números deve atingir.
 * @returns {[number, number] | []} - Um par de números cuja soma é igual ao target,
 *                                    ou um array vazio se nenhum par for encontrado.
 *
 * Complexidade:
 * - Tempo: O(n) - Devido ao uso de um mapa que permite acesso rápido, onde 'n' é
 *                 o tamanho do array `nums`.
 * - Espaço: O(n) - O mapa pode armazenar até 'n' elementos, onde 'n' é o tamanho do
 *                 array `nums`, caso todos os elementos sejam únicos.
 */

export const hashmap = (
  nums: number[],
  target: number
): [number, number] | [] => {
  // Cria um mapa para armazenar os números já percorridos e suas posições
  const map = new Map<number, number>();

  // Percorre o array `nums`
  for (let i = 0; i < nums.length; i++) {
    // Calcula a diferença entre o `target` e o número atual
    const diff = target - nums[i];

    // Verifica se a diferença está presente no mapa
    if (map.has(diff)) {
      // Se estiver, retorna o par de números que satisfazem a condição
      return [diff, nums[i]];
    }

    // Caso contrário, adiciona o número atual ao mapa junto com sua posição
    map.set(nums[i], i);
  }

  // Se nenhum par for encontrado, retorna um array vazio
  return [];
};
