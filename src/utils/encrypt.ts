import JSEncrypt from 'jsencrypt'

import Key from "@/config/key";

class Encrypt {
  static encrypted(data: string): string | false {
    var encryptor = new JSEncrypt()
    encryptor.setPublicKey(Key.PUBLIC_KEY)
    return encryptor.encrypt(data);
  }

  static decrypt(data: string): string | false {
    let decrypt = new JSEncrypt();
    decrypt.setPrivateKey(Key.PRIVATE_KEY);
    return decrypt.decrypt(data);
  }
}
export default Encrypt;