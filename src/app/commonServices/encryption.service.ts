import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class EncryptionService {
  constructor() { }
  encryptText(plainText: string) {
    const key = CryptoJS.enc.Utf8.parse(environment.encryptionKey.trim());
    const iv = CryptoJS.enc.Utf8.parse(
      environment.encryptionKey.substring(0, 16).trim()
    );

    return CryptoJS.AES.encrypt(plainText.trim(), key, {
      iv,
      mode: CryptoJS.mode.CBC
    }).toString();
  }

  encryptURLParameters(plainText: string) {
    return encodeURIComponent(this.encryptText(plainText)).replace(/[%]/g, '!');
  }
}