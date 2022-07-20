---
sidebar_position: 1
---

# About BigOne

Data Extraction as a Service

## Introduction

Dokumen User Guide ini berisi tata cara penggunaan aplikasi Bigone, mulai dari navigasi, membuat template untuk ekstraksi data, membuat mapping, dan membuat workflow.

### Overview

Bigone adalah platform solusi data extraction dimana pengguna dapat dengan mudah mengekstrak data dari file seperti xlsx, docx, ppt, pdf, dan bahkan gambar menjadi data lakes. Bigone dapat melakukan ekstraksi menggunakan metode membaca tabel dalam file langsung atau menggunakan OCR. Penambahan, penghapusan, dan perubahan pada file akan secara otomatis tercermin ke data di dalam data lake.

### Navigation

Navigasi pada halaman admin Bigone dapat dilakukan dengan mudah menggunakan menu navigasi yang berada di sebelah kiri halaman. Melalui menu navigasi, admin dapat mengunjungi halaman seperti dashboards, templates, mappings, dan workflows.

![](/img/bigone/1.png)

<center>
Gambar 2. Menu navigasi di sebelah kiri halamam
</center>

#### Datasource

![](/img/bigone/2.png)

<center>
Gambar 3. Halaman Datasource
</center>

Pada halaman datasource, admin dapat melihat semua data source yang sudah terdaftar di Bigone.

#### Templates

![](/img/bigone/3.png)

<center>
Gambar 4. Halaman Templates
</center>

Pada halaman templates, admin dapat melihat daftar templates yang sudah terdaftar di BigOne. Admin juga dapat menambah, mengubah, atau menghapus template yang sudah ada.

#### Mapping

![](/img/bigone/4.png)

<center>
Gambar 5. Halaman Mapping
</center>

Pada halaman mapping, admin dapat melihat daftar Mapping yang sudah terdaftar dan dilakukan tracking oleh Bigone. Bigone akan melakukan tracking terhadap file yang berada di server dan direktori yang ditampilkan di sini.

#### Workflow

![](/img/bigone/5.png)

<center>
Gambar 6. Halaman Workflow
</center>

Pada halaman workflow, admin dapat membuat dan mengubah workflow pada daftar workflow. Workflow berguna untuk membuat alur kerja pemrosesan data lebih lanjut.

## Creating Templates

Tahap pertama dalam melakukan pengaturan dalam Bigone adalah membuat template ekstraksi data dari file. Ekstraksi data dapat dilakukan menggunakan 2 metode: Table Extraction dan OCR (Optical Character Recognition).

### Creating Table Extraction Template

Ekstraksi menggunakan Table Extraction dilakukan dengan cara membuka file dan melihat data yang sudah tersimpan dalam bentuk tabel. Oleh karena itu, Table Extraction hanya dapat dilakukan jika data tersimpan dalam file dalam bentuk tabel, bukan clipping gambar dsb. Table Extraction Template mendukung file xls, xlsx, docx, dan pptx.

Untuk memulai membuat template, masuk ke halaman Template, lalu klik tombol “Create Template(Table Extraction)”.

![](/img/bigone/6.png)

<center>
Gambar 7. Tombol Create Table Extraction Template
</center>

#### Uploading Sample File

Pada halaman pertama, User akan diarahkan untuk mengupload sample file yang akan dibaca oleh BigOne. Upload dapat dilakukan dengan melakukan “drag & drop” file sample, atau menekan area upload untuk membuka window pemilihan file. Jika file yang diupload tidak didukung, aplikasi akan mengeluarkan pesan error. Jika file sudah berhasil di-upload, tekan “Next”

![](/img/bigone/7.png)

<center>
Gambar 8. Halaman Upload File Sample
</center>

#### Template Studio

Di halaman template studio, user dapat menentukan area dari data yang ingin diambil dengan cara melakukan “Click and drag”. Selain itu user juga dapat mengubah area dengan cara memasukan row dan kolom secara manual. User juga perlu memasukan nama dari masing-masing kolom. Jika ada kolom yang tidak ingin dimasukkan, pengguna hanya perlu mengosongkan input nama dari kolom tersebut.

Pada pengaturan tambahan, pengguna dapat mengaktifkan “to EOF” dan “Remove Duplicate”. “Remove Duplicate” dapat dinyalakan jika pengguna ingin Bigone menyaring barisan yang dapat dinyatakan duplikat. “to EOF” dapat dinyalakan jika pengguna ingin membaca tabel hingga baris terakhir file.

Jika sudah selesai membuat template, tekan tombol “Next” untuk pergi ke halaman selanjutnya.

![](/img/bigone/8.png)

<center>
Gambar 9. Table Extraction Template Studio
</center>

#### Saving Template

Pada halaman terakhir, pengguna dapat memasukan nama template yang sudah dibuat. Jika sudah selesai, tekan tombol “Submit”.

![](/img/bigone/9.png)

<center>
Gambar 10. Save Table Extraction Template
</center>

### Creating OCR Extrantion Template

Ekstraksi menggunakan OCR dilakukan dengan cara melihat tabel yang ada pada file secara visual dan melakukan parsing untuk mengubahnya menjadi data text. Ekstraksi menggunakan OCR mendukung lebih banyak file dibanding Table Extraction karena data dapat tersimpan berupa gambar visual. OCT Template mendukung file PDF, DOC, DOCX, PPT, PPTX, dan file gambar seperti JPEG dan PNG.

Untuk memulai membuat template, masuk ke halaman Template, lalu klik tombol “Create Template(OCR)”.

![](/img/bigone/10.png)

<center>
Gambar 11. Tombol Create OCR Template
</center>

#### Uploading Sample File

Pada halaman pertama, User akan diarahkan untuk mengupload sample file yang akan dibaca oleh BigOne. Upload dapat dilakukan dengan melakukan “drag & drop” file sample, atau menekan area upload untuk membuka window pemilihan file. Jika file yang diupload tidak didukung, aplikasi akan mengeluarkan pesan error. Jika file sudah berhasil di-upload, tekan “Next”

![](/img/bigone/11.png)

<center>
Gambar 12. Halaman Upload File Sample
</center>

#### Template Studio

Di halaman template studio, user dapat menentukan area dari data yang ingin diambil dengan cara melakukan “Click and drag” atau dengan menarik pembatas area. Selain itu user juga dapat mengubah area dengan cara memasukan koordinat X dan Y secara manual.

User perlu menentukan pembatas antar kolom dengan menggunakan pembatas yang ada atau dengan menambahkan pembatas baru dengan menekan tombol “+”. Jika ada pembatas yang tidak diperlukan, pengguna dapat menekan tombol hapus pada pembatas yang dimaksud.. User juga perlu memasukan nama dari masing-masing kolom. Jika ada kolom yang tidak ingin dimasukkan, pengguna hanya perlu mengosongkan input nama dari kolom tersebut.

Pada pengaturan tambahan, pengguna dapat mengaktifkan “Remove Duplicate”. “Remove Duplicate” dapat dinyalakan jika pengguna ingin Bigone menyaring barisan yang dapat dinyatakan duplikat.

Jika sudah selesai membuat template, tekan tombol “Next” untuk pergi ke halaman selanjutnya.

![](/img/bigone/12.png)

<center>
Gambar 13. OCR Template Studio
</center>

#### Downloading sample result

Pada halaman terakhir, pengguna dapat mendownload terlebih dahulu contoh data hasil ekstraksi dari file yang sudah dikirimkan dengan menekan tombol download yang sudah disediakan. Data hasil ekstraksi ditampilkan dalam bentuk file XLSX.

![](/img/bigone/13.png)

<center>
Gambar 14. Tombol Dowload sample ekstraksi
</center>

#### Saving Template

Pada halaman terakhir juga pengguna dapat memasukan nama template yang sudah dibuat. Jika sudah selesai, tekan tombol “Submit”.

## Template to Database Mappings

Setelah membuat template, pengguna hanya perlu mendaftarkan server dan direktori tempat file disimpan, template yang dipakai, serta database tempat data akan disimpan, melalui menu mappings. Setelah mapping berhasil ditambahkan, sistem BigOne akan secara otomatis dan berkala mengecek file pada server dan direktori yang tersimpan, mengambil data berdasarkan template yang dipilih, dan menyimpannya pada database yang sudah dipilih. Penambahan, perubahan, dan penghapusan file pada direktori akan berdampak pada tabel yang sudah dibuat.

Untuk membuat mapping baru, pergi ke halaman mapping dan tekan tombol “Add New Mapping Parser”

![](/img/bigone/14.png)

<center>
Gambar 15. Tombol Add New Mapping Parser
</center>

### Server Connection

Pada halaman pertama, pengguna perlu menentukan server tempat file disimpan. Jika server sudah pernah terdaftar sebelumnya, pengguna dapat langsung memilih server melalui dropdown. Jika server belum pernah terdaftar sebelumnya pengguna perlu mendaftarkan koneksi server baru tersebut.

![](/img/bigone/15.png)

<center>
Gambar 16. Tombol Add New Mapping Parser
</center>

Koneksi server baru dapat didaftarkan dengan menekan tombol “Add New Server Connection”. Pengguna akan diarahkan untuk memasukan parameter tipe koneksi, server yang digunakan, port, username, dan password.

Jika koneksi server sudah terisi, tekan tombol “Next”.

### Directory

Pada halaman kedua, pengguna perlu menentukan direktori tempat file tersimpan. Jika direktori yang dimaksud masih belum berisi, pengguna dapat memasukan file langsung ke direktori dengan melakukan drag & drop file ke area upload file.

![](/img/bigone/16.png)

<center>
Gambar 17. Masukan Direktori File
</center>

Jika direktori sudah terisi, tekan tombol “Next”.

### Template

Pada halaman ketiga, pengguna perlu menentukan template yang ekstraksi data. Jika template sudah dibuat sebelumnya, pengguna hanya tinggal memilih satu dari daftar template yang disediakan.

![](/img/bigone/17.png)

<center>
Gambar 18. Pemilihan Template
</center>

Jika pengguna belum membuat template sebelumnya, pengguna hanya perlu mengklik salah satu tombol create template yang disediakan sesuai dengan jenis file.

Jika template sudah dipilih, tekan tombol “Next”.

### Database

Pada halaman terakhir, pengguna perlu menentukan database tempat data akan disimpan serta nama tabelnya. Nama tabel dapat dimasukkan pada input “Table*name”. Perlu diperhatikan bahwa nama tabel akan diberi prefix “bo*” untuk membedakan table buatan bigone. Database tempat menyimpan data bisa dipilih dari list database yang telah diberikan.

![](/img/bigone/18.png)

<center>
Gambar 19. Pemilihan Database
</center>

Jika database yang diinginkan belum ada di daftar, pengguna bisa menambahkan database baru dengan menekan tombol “Add new database”. Pengguna akan diarahkan untuk mengisi parameter-parameter database yang diperlukan, seperti tipe database, host, port, nama database, dan kredensial untuk mengaksesnya.

![](/img/bigone/19.png)

<center>
Gambar 20 Pemilihan Database
</center>

Jika pemilihan database sudah selesai pengguna dapat menekan tombol “Submit”. Setelah mapping berhasil ditambahkan, sistem BigOne akan secara otomatis dan berkala mengecek file pada server dan direktori yang tersimpan, mengambil data berdasarkan template yang dipilih, dan menyimpannya pada database yang sudah dipilih. Penambahan, perubahan, dan penghapusan file pada direktori akan berdampak pada tabel yang sudah dibuat.

## Further Data processing with Workflows

Setelah pengguna berhasil memasang ekstraksi data otomatis menggunakan BigOne, pengguna juga dapat membuat workflow untuk pemrosesan data lebih lanjut. Workflow memungkinkan pengguna untuk membuat alur pemrosesan data dengan melibatkan satu user atau lebih.

### Creating Workflows

Untuk membuat workflow, masuk ke halaman workflow dan tekan tombol “Add Workflow”.

#### Workflow parameters

![](/img/bigone/21.png)

<center>
Gambar 21. Pemilihan database
</center>

Pada halaman add workflow, pengguna perlu memberi nama dari workflow serta deskripsinya jika diperlukan. Setelah selesai, tekan tombol “Submit”

#### Creating Action Flow

Pada halaman daftar workflow, tekan tombol “View Action” untuk memulai membuat alur action dari workflow tersebut.

![](/img/bigone/21.png)

<center>
Gambar 22. Tombol View Action
</center>

Pengguna akan diarahkan ke halaman alur dari workflow. Pada halaman ini, pengguna dapat membuat alur action dari workflow, mulai dari “Start of Action” hingga “End of Action”. Pengguna dapat membuat Task dan Processor dengan cara klik kanan di ruang kosong.

![](/img/bigone/22.png)

<center>
Gambar 23. Alur Workflow
</center>

Untuk merubah parameter task, pengguna dapat melakukan klik kanan pada task. Modal berisi masukan untuk task akan terbuka. Pengguna dapat mengisi parameter seperti nama Task, Controller, pemberi approval, assignee, dsb. Jika sudah selesai. tekan tombol Submit.

![](/img/bigone/23.png)

<center>
Gambar 24. Alur Workflow
</center>

Untuk menyambungkan antar node, lakukan klik kanan pada salah satu node lalu tekan “Draw line”. Kemudian klik kiri pada node lain yang ingin disambungkan. Lakukan ini sampai “Start of Action” tersambung sampai “End of Action”.

![](/img/bigone/24.png)

<center>
Gambar 25. Penambahan Panah pada Alur
</center>

#### Edit Template

Ketika user sudah membuat sebuah template akan tetapi perlu dilakukan perubahan lagi pada template tersebut , pengguna bisa melakukan edit template.
