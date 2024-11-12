Symmetric encryption, also known as "secret key" or "private key" encryption, is a cryptography technique that uses the same key to encrypt and decrypt data: 
 
![image](https://github.com/user-attachments/assets/9ffb0a17-6359-4219-8f2b-76d0c7b49e46)

How it works -->

    Uses a single key to encrypt and decrypt data

Strengths -->

    Fast, strong cryptographic strength per bit of key

Weaknesses -->

    Key must be securely shared before communication

Uses -->

    Data security, secure communication, web browsing, cloud security, database encryption, and more

---------------------------------------------------------------------------

Asymmetric encryption, also known as public key encryption, is a method of encrypting and decrypting data using a public/private key pair:

![image](https://github.com/user-attachments/assets/b2cc4cca-99d5-4043-9415-86dfb7d688fa)

Encryption: The public key in the pair is used to encrypt plaintext.

Decryption: The corresponding private key in the pair is used to decrypt the ciphertext.

---------------------------------------------------------------------------

![image](https://github.com/user-attachments/assets/cf0efb56-e7ea-49ed-8de0-7117978ccc37)

![image](https://github.com/user-attachments/assets/bef7ecca-32b5-4dac-be98-7fd01112b89d)

---------------------------------------------------------------------------

TLS 1.2-->

Transport Layer Security (TLS) 1.2 is a protocol that encrypts and authenticates data transferred over a network. It's used by many devices and applications, including browsers, email, and instant messaging. TLS 1.2 is more secure than previous protocols like SSL 2.0, SSL 3.0, TLS 1.0, and TLS 1.1. Here are some of the features of TLS 1.2 encryption

it shares a private symmetric key (which is kinda problem )

![image](https://github.com/user-attachments/assets/23ac305e-e836-43d3-9476-8aede11e230a)

it is slow .....

-----------------------------------------------------------------------------

But sending out your private key directly to the server can be dangarous because anyone can want to acsess it

so, diffie - hellman come up with a solution 

They come up with a complicated algorithm to combine 3 types of key to create the final private key to encrypt the data

![image](https://github.com/user-attachments/assets/a96239bd-babe-45c6-b252-1754f1fdc545)

The blue and the red one are the private key and the pink one is public...........

![image](https://github.com/user-attachments/assets/20157cee-7719-41bb-bd22-1f42049e93b0)

Now they send the blue key with pink combined which is public but unbrekable, same with red and pink and send it to the both sides


