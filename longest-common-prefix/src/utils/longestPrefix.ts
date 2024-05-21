/**
 * A função `longestPrefix1` encontra o prefixo mais longo comum entre strings em um array.
 * Retorna o prefixo mais longo comum se existir, ou a primeira string se não houver.
 *
 * @param {string[]} value - Array de strings para encontrar o prefixo.
 * @returns {string} - O prefixo mais longo comum ou a primeira string se não houver prefixo.
 *
 * Complexidade:
 * - Tempo: O(n * m), onde n é o número de strings no array e m é o tamanho da menor string.
 * - Espaço: O(1) - Usa espaço constante, independente do tamanho do array e das strings.
 */
export const longestPrefix1 = (value: string[]): string => {
  if (!value.length) return "";

  for (let i = 0; i < value[0].length; i++) {
    for (let j = 1; j < value.length; j++) {
      if (value[j][i] !== value[0][i]) {
        return value[0].slice(0, i);
      }
    }
  }

  return value[0];
};

/**
 * Finds the longest common prefix string amongst an array of strings.
 * If there is no common prefix, it returns an empty string.
 *
 * @param {string[]} value - An array of strings.
 * @return {string} - The longest common prefix or an empty string if there is none.
 *
 * @complexity
 * Time complexity: O(n * m), where n is the number of strings and m is the length of the longest string.
 * Space complexity: O(m), where m is the length of the longest string.
 */
export const longestPrefix2 = (value: string[]): string => {
  if (!value.length) return "";

  let prefix = value[0];

  for (let i = 1; i < value.length; i++) {
    while (value[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
  }

  return prefix;
};
