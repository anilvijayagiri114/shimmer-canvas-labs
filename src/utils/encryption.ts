// encryption.ts

import CryptoJS from 'crypto-js';

/**
 * Encrypts a plaintext string using AES encryption.
 * @param plaintext - The string to encrypt.
 * @param password - The password used for encryption.
 * @returns The encrypted string.
 */
function encrypt(plaintext: string, password: string): string {
  return CryptoJS.AES.encrypt(plaintext, password).toString();
}

/**
 * Decrypts an encrypted string back to plaintext using AES encryption.
 * @param ciphertext - The string to decrypt.
 * @param password - The password used for decryption.
 * @returns The decrypted string.
 */
function decrypt(ciphertext: string, password: string): string {
  const bytes = CryptoJS.AES.decrypt(ciphertext, password);
  return bytes.toString(CryptoJS.enc.Utf8);
}

export { encrypt, decrypt };
