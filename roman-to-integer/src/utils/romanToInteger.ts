/**
 * Converte um número romano para um número inteiro.
 *
 * A função `romanToInteger` recebe uma string representando um número romano
 * e converte-a em seu valor numérico inteiro correspondente. O número romano é
 * processado da esquerda para a direita, adicionando ou subtraindo valores com
 * base na relação entre os dígitos adjacentes.
 *
 * @param value - A string contendo o número romano a ser convertido.
 * @returns O valor numérico inteiro correspondente ao número romano.
 *
 * A lógica da função é baseada nas seguintes regras:
 * 1. Se um dígito romano for menor que o próximo dígito, ele é subtraído do total.
 * 2. Caso contrário, ele é adicionado ao total.
 *
 * Complexidade:
 * - Tempo: O(n), onde n é o comprimento da string `value`.
 *   A função percorre cada caractere da string uma vez.
 * - Espaço: O(1). A função utiliza uma quantidade fixa de espaço adicional,
 *   independente do tamanho da entrada.
 */
export const romanToInteger = (value: string): number => {
  const roman: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  for (let i = 0; i < value.length - 1; i++) {
    if (roman[value[i]] < roman[value[i + 1]]) {
      total -= roman[value[i]];
    } else {
      total += roman[value[i]];
    }
  }
  total += roman[value[value.length - 1]];

  return total;
};
