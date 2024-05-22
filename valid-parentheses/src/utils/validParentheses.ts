/**
 * Verifica se a sequência de parênteses é válida.
 *
 * @param value - A string contendo a sequência de parênteses.
 * @returns Retorna `true` se a sequência é válida, `false` caso contrário.
 *
 * Complexidade:
 * Tempo: O(n), onde n é o comprimento da string de entrada.
 * Espaço: O(n), no pior caso, onde n é o comprimento da string de entrada.
 */
export const validParentheses = (value: string): boolean => {
  // Mapeamento de parênteses de abertura para seus correspondentes de fechamento
  const openToClose: { [key: string]: string } = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  // Conjunto de parênteses de fechamento para busca rápida
  const closingBrackets = new Set(Object.values(openToClose));

  // Pilha para armazenar parênteses de abertura
  const stack: string[] = [];

  // Itera sobre cada caractere da string de entrada
  for (let i = 0; i < value.length; i++) {
    const char = value[i];

    // Se o caractere for um parêntese de abertura, empilha ele
    if (char in openToClose) {
      stack.push(char);
    }
    // Se o caractere for um parêntese de fechamento
    else if (closingBrackets.has(char)) {
      // Se a pilha estiver vazia, significa que não há parêntese correspondente
      if (stack.length === 0) {
        return false;
      }

      // Remove o último parêntese de abertura da pilha
      const lastOpen = stack.pop();

      // Verifica se o último parêntese de abertura corresponde ao parêntese de fechamento atual
      if (lastOpen === undefined || openToClose[lastOpen] !== char) {
        return false;
      }
    }
  }

  // Verifica se todos os parênteses de abertura foram fechados
  return stack.length === 0;
};
