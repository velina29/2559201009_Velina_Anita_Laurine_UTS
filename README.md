###Portofolio Desain Grafis 
Nama : Velina Anita Laurine
NPM : 2559201009
Program Studi : Sistem dan Teknologi Informasi

Tema : C-Portofolio Pribadi
Objek : Diri sendiri sebagai calon desainer grafis
Halaman katalog : daftar karya desain berupa poster, logo, dan daftar menu.

Daftar halaman
Beranda – hero section (judul "Halo, saya Velina", tagline, tombol "Lihat Karya" dan gambar latar), ringkasan "Sekilas tentang saya" dengan tiga fakta singkat, serta 3 karya unggulan: Poster Matcha, Poster Malam Musik Kampus, dan Poster Jam Tangan.

Tentang – profil singkat, alasan memilih desain grafis, foto, tiga fakta singkat, tabel riwayat pendidikan (SD sampai perguruan tinggi), dan tabel alat yang dipakai (Canva dan Lightroom). Tata letak foto di kiri dan teks di kanan.

Karya (Katalog) – karya desain ditampilkan dalam kartu berisi gambar, nama, kategori, dan deskripsi singkat, ditata dengan CSS grid. katalog menjadi 1 kolom.

Kontak – alamat kampus, email, Instagram, peta Google Maps, dan formulir kontak (nama, email, nomor HP, keperluan, pesan). 

Setiap halaman memakai <!DOCTYPE html>, <meta charset>, <meta name="viewport">, dan <title> yang berbeda.

Elemen semantik: header, nav, main, section, article, figure, footer.
Menu navigasi yang sama di setiap halaman.

Dua tabel data dengan thead dan tbody di halaman Tentang: riwayat pendidikan dan alat yang dipakai.

Semua gambar memakai gaya yang menarik.

Formulir kontak dengan label yang terhubung ke input (for/id): nama, email, nomor HP, pilihan keperluan (select: desain logo, poster, feed Instagram, dan lainnya), dan pesan (textarea).

Validasi HTML5: required pada semua kolom, type="email", type="tel" dengan pattern="[0-9]{10,13}", serta minlength="20" dan maxlength="300" pada pesan.

Seluruh gaya ada di satu file css/style.css (tanpa inline style dan tanpa tag <style>).
Flexbox untuk header, navigasi, dan hero; CSS grid untuk katalog, profil, formulir kontak, dan kotak fakta.

Responsif dengan media query untuk HP (≤ 600 px) dan desktop (≥ 992 px). Di HP, kartu menjadi 1 kolom dan menu tersusun vertikal di bawah logo. Tabel dibungkus agar bisa di-scroll sendiri tanpa membuat halaman bergeser ke samping.

9 variabel CSS di :root: --warna-utama, --warna-gelap, --warna-terang, --warna-aksen, --warna-kartu, --jarak, --radius, --font-judul, --font-isi.

Efek interaksi: :hover pada tombol (berubah warna dan naik), menu, dan kotak fakta; transition pada efek tersebut; serta animasi @keyframes muncul (fade-in dan naik) pada hero.

Font dari Google Fonts: Space Grotesk (judul) dan DM Sans (isi).

JavaScrip menambahkan menu hamburger
File: `js/script.js`, dipasang lewat `<script src="js/script.js"></script>`. Ditulis dengan JavaScript murni tanpa library.

### Menu hamburger
- **Fungsi:** di tampilan HP (≤ 600 px), menu navigasi disembunyikan dan bisa dibuka atau ditutup dengan tombol ☰.
- **Cara kerja:** saat halaman dimuat, JavaScript menambahkan class `js` ke elemen `<html>`. CSS memakai class ini untuk menyembunyikan menu di HP. Saat tombol diklik, `classList.toggle` menambah atau menghapus class `terbuka` pada menu, sehingga menu muncul atau hilang. Atribut `aria-expanded` pada tombol ikut diperbarui.
- **Tanpa JavaScript:** menu tetap tampil di semua halaman, jadi website tetap bisa dipakai.

Sumber Gambar
orange.jpeg
https://unsplash.com/id/foto/jus-jeruk-dalam-gelas-minum-bening-dengan-irisan-lemon-JWfcm1stQuo

coffee.jpeg dan coffee2.jpeg
https://unsplash.com/id/foto/fotografi-fokus-dangkal-kopi-di-akhir-cangkir-di-atas-meja-zUNs99PGDg0

https://unsplash.com/id/foto/secangkir-kopi-dengan-seni-latte-di-atas-piring-T3fFz5W0Foc

spaghtti.jpeg
https://unsplash.com/id/foto/pasta-dengan-saus-merah-di-piring-bulat-keramik-putih-qits91IZv1o

salad.jpeg
https://unsplash.com/id/foto/salad-sayuran-di-atas-mangkuk-keramik-putih-EvoIiaIVRzU

cake.jpeg
https://unsplash.com/id/foto/kue-raspberry-Mzy-OjtCI70

jam.jpeg
https://unsplash.com/id/foto/jam-tangan-analog-bulat-perak-dan-putih-LWPPpkn6NEQ

live_music.jpeg
https://unsplash.com/id/foto/seorang-wanita-bernyanyi-ke-mikrofon-di-atas-panggung--uqSsVEIT1Y

matcha.jpeg
https://unsplash.com/id/foto/es-matcha-latte-dengan-susu-dan-es-5TTA0ghtF0k

https://unsplash.com/id/foto/es-matcha-latte-dengan-bubuk-di-tatakan-kayu-8GQyzgrBOYs

latar.jpeg
https://unsplash.com/id/foto/menyalakan-laptop-acer-di-atas-meja-dekat-cangkir-zwsHjakE_iI

Canva laptop.jpeg
https://unsplash.com/id/foto/komputer-laptop-duduk-di-atas-meja-kayu-eD1E6Rqyeag

logo.jpge mendesain dicanva (logo brand).