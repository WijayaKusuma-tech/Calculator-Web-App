// script.js

// Langkah 1: Memilih elemen HTML yang kita butuhkan
const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

// Langkah 2: Menambahkan event listener ke setiap tombol
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // Ambil nilai dari tombol yang diklik
        const buttonValue = button.value;

        // Langkah 3: Menentukan aksi berdasarkan nilai tombol
        if (buttonValue === 'C') {
            // Jika tombol 'C' (Clear) diklik, kosongkan layar
            display.value = '';
        } else if (buttonValue === '=') {
            // Jika tombol '=' (Equals) diklik, hitung hasilnya
            try {
                // 'eval' akan mengeksekusi string sebagai kode JavaScript.
                // Ini cara cepat untuk menghitung ekspresi matematika.
                display.value = eval(display.value);
            } catch (error) {
                // Jika terjadi error (misal: "5 * / 2"), tampilkan 'Error'
                display.value = 'Error';
            }
        } else {
            // Untuk tombol lainnya (angka dan operator), tambahkan nilainya ke layar
            display.value += buttonValue;
        }
    });
});