# About BigEnvelope

Data Exposure as a Service

# Introduction

Dokumen User Guide ini berisi tata cara penggunaan aplikasi BigEnvelope. Secara garis besar, BigEnvelope terdiri dari 3 komponen: Admin panel, API Backend, & Monitoring tools. Dokumen ini akan menjelaskan penggunaan ketiga komponen ini

## Overview

BigEnvelope adalah solusi data exposure as a service yang memungkinan pengguna untuk mengekspos kumpulan data dari sebuah data source menjadi bentuk API yang dapat digunakan oleh aplikasi internal atau eksternal. Selain data source, BigEnvelope juga dapat berfungsi sebagai API Gateway ke service-service lain sehingga menggunakan fitur-fitur access control built-in BigEnvelope.

![](/img/bigenvelope/images/image20.png)

Gambar 1. Arsitektur BigEnvelope

Secara garis besar, BigEnvelope terdiri dari 3 komponen: Admin panel, API Backend, dan monitoring dashboards.

### Admin Panel

![](/img/bigenvelope/images/image7.png)

Gambar 2. Admin Panel

Admin panel adalah sebuah aplikasi web dimana admin dapat mulai membuat API dari data source atau service lain. Pada admin panel, admin dapat mendaftarkan data source, membuat API, mendaftarkan consumer dan akses ke masing-masing APInya.

### API Backend

API Backend adalah service yang akan menyediakan API yang telah dibuat oleh admin. API Backend bertugas memproses spesifikasi API yang sudah dibuat admin menjadi API yang siap untuk digunakan. API Backend lah yang akan menerima request hit API dari consumer, menjalankan query jika ada, dan mengembalikan response yang sesuai.

### Monitoring Dashboards

![](/img/bigenvelope/images/image16.png)

Gambar 3. Halaman monitoring

Monitoring dashboards adalah aplikasi yang memonitor kinerja dari API yang telah dibuat. Menggunakan monitoring dashboards, ukuran performa API seperti latency, throughput, error rate, metrics resource mesin, dll dapat dipantau.

## Navigation

Navigasi pada halaman admin BigEnvelope dapat dilakukan dengan mudah menggunakan menu navigasi yang berada di sebelah kiri halaman. Melalui menu navigasi, admin dapat mengunjungi halaman Connection, API, dan Consumer. Selain itu juga terdapat menu tambahan berupa Config Distribution.

![](/img/bigenvelope/images/image17.png)

Gambar 4. Menu navigasi di sebelah kiri halaman

### Connection

![](/img/bigenvelope/images/image15.png)

Gambar 5. Halaman connection

Pada halaman connection, admin dapat melihat data source yang sudah terdaftar di platform BigEnvelope, juga menambahkan, mengedit, atau menghapus data source yang sudah ada

### API

![](/img/bigenvelope/images/image21.png)

Gambar 6. Halaman API

Pada halaman connection, admin dapat melihat API yang sudah di-generate oleh BigEnvelope. Admin juga dapat menambah, mengedit, atau menghapus API yang sudah ada.

### Consumer

![](/img/bigenvelope/images/image3.png)

Gambar 7. Halaman Consumer

Pada halaman Consumer, admin dapat melihat Consumer yang sudah terdaftar dan juga mengatur IP address, rate limit, serta akses consumer tersebut ke API yang sudah dibangkitkan.

---

# Creating API

## Creating API from Data Sources

BigEnvelope memungkinkan admin untuk dapat membuat API dari data source berupa database tanpa harus menulis code.

### Creating Connection to Data Source

Sebelum dapat membuat API, admin harus terlebih dahulu memastikan bahwa koneksi ke database sudah terdaftar. Hal ini dapat dilakukan di halaman Connection

![](/img/bigenvelope/images/image6.png)

Gambar 8. Halaman Connection

Jika koneksi ke database sudah terdaftar, lanjutkan ke tahap 2.1.2. Jika belum, daftarkan koneksi ke database dengan menekan tombol “Add New”.

![](/img/bigenvelope/images/image19.png)

Gambar 9. Halaman New Connection

Anda akan disajikan tampilan form koneksi ke database. Silahkan isi masukan nama koneksi, adapter, host, port, database name, username, dan password. Lalu nyalakan connection status ke posisi “ON”.

Untuk mengetes bahwa BigEnvelope sudah dapat melakukan koneksi dengan masukan yang telah diberikan, tekan tombol “Test Connection”. Jika pengisian sudah selesai tekan tombol “Submit”.

### Setting API

Untuk membuat API baru, masuk ke menu API lalu tekan tombol “Add new API”.

![](/img/bigenvelope/images/image10.png)

Gambar 10. Halaman New API

Isi form dengan masukan nama API, dan waktu cache yang diinginkan (default tidak ada cache). Biarkan tipe API di posisi “Common SQL”.

Pada form Connection, pilih koneksi ke database yang diinginkan.

![](/img/bigenvelope/images/image12.png)

Gambar 11. Pemilihan Database

Untuk memfasilitasi pembuatan query tanpa harus menulis code, BigEnvelope menyediakan UI berupa Query Builder yang memungkinkan admin untuk membuat query berdasarkan inputan nama tabel, join, select, where, dsb.

![](/img/bigenvelope/images/image8.png)

Gambar 11. Penulisan Query

BigEnvelope juga memfasilitasi penulisan query SQL secara manual. Query juga dapat menerima masukan parameter dengan cara memanggil karakter “:” sebelum nama parameter. Parameter ini akan menjadi parameter masukan dari API yang akan dibuat.

Untuk mengetes query, admin dapat menekan tombol “Test API”. Jika sudah selesai, admin dapat menekan tombol “Save”.

### Creating Consumer Profile

Untuk membuat profile consumer yang akan menggunakan API, admin dapat melakukannya di halaman Consumer dan menekan tombol “Add API User”.

![](/img/bigenvelope/images/image11.png)

Gambar 12. Modal New Consumer

Admin dapat mengisi form berisi nama consumer, IP consumer, dan batas rate limit yang dibolehkan untuk consumer itu. Untuk masukan IP juga mendukung CIDR notation untuk memasukan range beberapa IP sekaligus.

### Giving Consumer permission

Untuk memberi permission consumer untuk menggunakan API, admin dapat masuk ke halaman access control dari consumer yang dimaksud.

![](/img/bigenvelope/images/image13.png)

Gambar 12. Tombol Access Control Consumer

Untuk memberikan akses kepada Consumer, admin hanya perlu menekan checklist “Access API” dari API yang dimaksud.

![](/img/bigenvelope/images/image4.png)

Gambar 13. Halaman Access Control Consumer

## Creating API from Exernal API Service

BigEnvelope juga memungkinkan admin untuk membuat API dengan cara membungkus API service REST external yang sudah ada.

### Setting API

Untuk membuat API baru, masuk ke menu API lalu tekan tombol “Add new API”.

![](/img/bigenvelope/images/image10.png)

Gambar 14. Halaman New API

Isi form dengan masukan nama API, dan waktu cache yang diinginkan (default tidak ada cache). Masukan tipe API di value “Rest API”

![](/img/bigenvelope/images/image14.png)

Gambar 15. Pengaturan Tipe Rest API

Isi URL rest API dengan endpoint dari service yang ingin dibungkus. lalu pilih method yang digunakan oleh service tersebut. Jika diharuskan, isi masukan Authorization dengan jenis dan value authorization yang dibutuhkan. Jika sudah selesai, admin dapat menekan tombol “Save”.

### Creating Consumer Profile

Untuk membuat profile consumer yang akan menggunakan API, admin dapat melakukannya di halaman Consumer dan menekan tombol “Add API User”.

![](/img/bigenvelope/images/image11.png)

Gambar 16. Modal Consumer baru

Admin dapat mengisi form berisi nama consumer, IP consumer, dan batas rate limit yang dibolehkan untuk consumer itu. Untuk masukan IP juga mendukung CIDR notation untuk memasukan range beberapa IP sekaligus.

### Giving Consumer permission

Untuk memberi permission consumer untuk menggunakan API, admin dapat masuk ke halaman access control dari consumer yang dimaksud.

![](/img/bigenvelope/images/image13.png)

Gambar 17. Tombol Access Control Consumer

Untuk memberi akses kepada Consumer, admin hanya perlu menekan checklist “Access API” dari API yang dimaksud.

![](/img/bigenvelope/images/image4.png)

Gambar 17. Halaman Access Control Consumer

---

# Using APIs

API yang sudah diciptakan menggunakan BigEnvelope dapat dipanggil dengan URL endpoint seperti berikut.

{{BASE\_URL}}/bigenvelope/public/api/id/{API_ID}

## API dengan Parameter Masukan

Jika API yang dibuat menerima masukan parameter, parameter dapat dimasukan ke dalam URL menjadi query param GET. Contohnya, jika query SQL yang digunakan untuk membuat API adalah

SELECT \*

FROM nama_tabel  
WHERE kolom= :masukan

API menerima masukan parameter bernama “masukan”. Pemanggilan API dapat dilakukan dengan menambahkan query param dengan awalan “xin\_” menjadi “xin_masukan”, seperti berikut:

{{BASE\_URL}}/bigenvelope/public/api/id/{{API\_ID}}?xin_masukan={{nilai masukan}}

## Not Registered IP

{

"transaction": false,

"message": "Not registered IP",

"data": \[\]

}

Jika ketika menggunakan API mendapat balikan seperti di atas, berarti BigEnvelope tidak mengenali IP address pengguna API tersebut. silahkan cek kembali IP Publik dari pengguna API dan sesuaikan dengan Consumer profile di halaman admin panel.

---

# Monitoring

## Monitoring latency, status codes, and error rates

### Navigating service pages

![](/img/bigenvelope/images/image5.png)

Gambar 18. Halaman Daftar Service

Setelah melakukan login ke halaman monitoring. Klik service “BigEnvelopeJs” untuk masuk ke dashboard monitoring service BigEnvelope.

![](/img/bigenvelope/images/image9.png)

Gambar 19. Halaman Overview Service

Pada menu overview, pengguna dapat melihat summary latency, throughput, error rate, instances, dan statistik lain dari semua api yang dihandle oleh service BigEnvelope. Pengguna dapat melakukan filtering api id, consumer, ip, dll menggunakan masukan filter. Pengguna juga dapat menyesuaikan durasi data yang ditampilkan graph dengan menyesuaikan filter waktu.

### Navigating transaction pages

Klik tombol “Transaction” untuk pindah ke halaman Transaction. Pada halaman ini ditampilkan statistik tambahan seperti status code, daftar endpoint, dll.

![](/img/bigenvelope/images/image18.png)

Gambar 19. Halaman Transaction Service

Klik salah satu endpoint untuk melihat statistik spesifik untuk endpoint tersebut. Halaman ini menampilkan statistik latency, status code, throughput, dan juga tracing dari sample request endpoint tersebut. Melalui tracing sample, pengguna dapat melihat metadata seperti waktu transaksi, IP, dan masih banyak lagi

![](/img/bigenvelope/images/image2.png)

Gambar 20. Halaman detail spesifik endpoint

## Monitoring machine metrics

### Navigating service pages

![](/img/bigenvelope/images/image5.png)

Gambar 21. Halaman Daftar Service

Setelah melakukan login ke halaman monitoring. Klik service “BigEnvelopeJs” untuk masuk ke dashboard monitoring service BigEnvelope.

![](/img/bigenvelope/images/image9.png)

Gambar 22. Halaman Overview Service

Pada menu overview, pengguna dapat melihat summary latency, throughput, error rate, instances, dan statistik lain dari semua api yang dihandle oleh service BigEnvelope. Pengguna dapat melakukan filtering api id, consumer, ip, dll menggunakan masukan filter. Pengguna juga dapat menyesuaikan durasi data yang ditampilkan graph dengan menyesuaikan filter waktu.

### Navigating Metrics page

Klik tombol metrics untuk melihat graph resource mesin yang digunakan oleh service BigEnvelope. Resource yang ditampilkan adalah representasi penggunaan CPU dan memory oleh mesin.

![](/img/bigenvelope/images/image1.png)

Gambar 23. Halaman Metric Service
