/**
 * A função `isPalindrome1` verifica se um número inteiro é um palíndromo,
 * ou seja, se sua representação em string é a mesma quando lida da esquerda
 * para a direita e da direita para a esquerda. A função retorna verdadeiro
 * se o número for um palíndromo e falso caso contrário.
 *
 * @param {number} value - O número inteiro a ser verificado.
 * @returns {boolean} - True se o número for um palíndromo, false caso contrário.
 *
 * Complexidade:
 * - Tempo: O(d) - Onde 'd' é o número de dígitos no valor `value`.
 * - Espaço: O(d) - O espaço adicional é proporcional ao número de dígitos no valor `value`.
 */
export const isPalindrome1 = (value: number): boolean => {
  // Converte o valor para string
  const stringValue = value.toString();
  // Inverte a string usando split, reverse e join
  const reversed = stringValue.split("").reverse().join("");
  // Verifica se a string original é igual à string invertida
  return stringValue === reversed;
};

/**
 * A função `isPalindrome2` verifica se um número inteiro é um palíndromo,
 * ou seja, se sua representação em string é a mesma quando lida da esquerda
 * para a direita e da direita para a esquerda. A função retorna verdadeiro
 * se o número for um palíndromo e falso caso contrário.
 *
 * @param {number} value - O número inteiro a ser verificado.
 * @returns {boolean} - True se o número for um palíndromo, false caso contrário.
 *
 * Complexidade:
 * - Tempo: O(log10(value)) - O tempo de execução está relacionado ao número de dígitos
 *                            do valor `value`, pois a operação de divisão reduz o valor
 *                            pela metade a cada iteração.
 * - Espaço: O(1) - Usa espaço constante, independente do tamanho do valor `value`.
 */
export const isPalindrome2 = (value: number): boolean => {
  // Verifica se o número é negativo ou termina com zero, exceto zero em si
  if (value < 0 || (value !== 0 && value % 10 === 0)) {
    return false;
  }

  // Variável para armazenar a metade reversa do número
  let half = 0;
  // Enquanto o valor original for maior que a metade reversa
  while (value > half) {
    // Adiciona o último dígito do valor original à metade reversa
    half = half * 10 + (value % 10);
    // Remove o último dígito do valor original
    value = Math.floor(value / 10);
  }
  // Verifica se o valor original é igual à metade reversa ou à metade reversa dividida por 10
  return value === half || value === Math.floor(half / 10);
};
