export function calculateCheckDigit(containerNumberWithoutCheckDigit: string) {
  const lettersMap = {
    A: 10,
    B: 12,
    C: 13,
    D: 14,
    E: 15,
    F: 16,
    G: 17,
    H: 18,
    I: 19,
    J: 20,
    K: 21,
    L: 23,
    M: 24,
    N: 25,
    O: 26,
    P: 27,
    Q: 28,
    R: 29,
    S: 30,
    T: 31,
    U: 32,
    V: 34,
    W: 35,
    X: 36,
    Y: 37,
    Z: 38,
  } as const

  const upper = containerNumberWithoutCheckDigit.toUpperCase()
  if (!/^[A-Z]{4}\d{6}$/.test(upper)) return null

  let sum = 0
  for (let i = 0; i < upper.length; i++) {
    const char = upper[i]
    const value = /[A-Z]/.test(char)
      ? lettersMap[char as keyof typeof lettersMap]
      : parseInt(char, 10)
    sum += value * Math.pow(2, i)
  }

  const remainder = sum % 11
  return remainder === 10 ? 0 : remainder
}
