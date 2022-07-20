# BigAction

Data Extraction as a Service

User Guide

# BIGACTION STREAM

## Operational BigAction

### Login

1.  Akses link/IP address [https://172.30.101.64:8080/nifi/](https://www.google.com/url?q=https://172.30.101.64:8080/nifi/&sa=D&source=editors&ust=1657621415537491&usg=AOvVaw1hW0UxqViqwCNXDj8O1q1Z)
1.  Masukkan User dan Password lalu klik Log In.

![](/img/bigaction/images/image13.png)

### Pengenalan

BigAction adalah perangkat lunak sumber terbuka (open source) untuk mengotomatisasi dan mengelola aliran data antar system berbasis Apache Nifi. Sangat handal dalam memproses dan mendistribusikan data. Penggunaannya lebih mudah karena disediakan Antarmuka Pengguna berbasis web untuk membuat, memantau, dan mengendalikan aliran data.

Ada beberapa istilah kunci yang harus dipahami.

FlowFile: Setiap bagian dari "Data Pengguna" (yaitu, data yang dibawa pengguna untuk diproses dan didistribusikan) disebut sebagai FlowFile. FlowFile terdiri dari dua bagian: Atribut dan Konten. Konten adalah Data Pengguna itu sendiri. Atribut adalah pasangan nilai kunci yang terkait dengan Data Pengguna.

Prosesor: Prosesor adalah komponen NiFi yang bertanggung jawab untuk membuat, mengirim, menerima, mengubah, merutekan, memisahkan, menggabungkan, dan memproses FlowFiles. Ini adalah blok bangunan terpenting yang tersedia bagi pengguna NiFi untuk membangun aliran data.

### Memasuki Canvas

![](/img/bigaction/images/image60.png)

BigAction UI memiliki beberapa alat untuk membuat dan mengelola aliran data:

![](/img/bigaction/images/image31.png)

Global Menu berisi opsi berikut:

![](/img/bigaction/images/image42.png)

Dengan UI yang sangat interaktif menyediakan berbagai macam informasi, seperti

yang ditunjukkan pada gambar di bawah, pengguna dapat mengakses informasi

tentang atribut berikut :

![](/img/bigaction/images/image29.png)

1.  Active Threads
2.  Total queued data
3.  Transmitting Remote Process Groups
4.  Not Transmitting Remote Process Groups
5.  Running Components
6.  Stopped Components
7.  Invalid Components
8.  Disabled Components
9.  Up to date Versioned Process Groups
10. Locally modified Versioned Process Groups
11. Stale Versioned Process Groups
12. Locally modified and Stale Versioned Process Groups
13. Sync failure Versioned Process Groups
14. Last refresh

### Komponen BigAction

16. Processors

Pengguna dapat menarik icon processor ke atas canvas dan memilih processor yang akan dipakai untuk data flow.

#### ![Processor Icon](/img/bigaction/images/image23.jpg)

#### ![](/img/bigaction/images/image11.png)

#### Input port

Input port dapat digunakan untuk mengambil data dari sebuah prosesor, yang tidak terdapat di dalam proses group tersebut atau diluar proses group.

![Input Port](/img/bigaction/images/image16.jpg)

Setelah icon ditarik, akan muncul dialog pertanyaan untuk mengisikan nama port,

setelah itu input port akan ditambahkan ke dalam canvas.

#### Output port

Output port digunakan untuk melakukan transfer data ke sebuah processor, yang tidak ada di dalam process group atau diluar process group.

![Output Port](/img/bigaction/images/image54.jpg)

Setelah icon ditarik, akan muncul dialog pertanyaan untuk menginput nama Output

port, setelah itu akan ditambahkan ke dalam canvas.

#### Process Group

![Gruop Icon](/img/bigaction/images/image39.jpg)

Setelah icon ditarik, user akan diminta untuk menginput nama Process Group lalu setelahnya akan ditambahkan ke dalam canvas.

#### Remote Process Group

Digunakan untuk menambahkan Remote Process Group ke dalam canvas.

![Remote Process Group](/img/bigaction/images/image27.jpg)

#### Funnel

Funnel digunakan untuk mentransfer output dari sebuah processor ke multiple processor

![Funnel Icon](/img/bigaction/images/image20.jpg)

#### Template

Icon dibawah untuk menambahkan template data flow ke dalam canvas. Membantu untuk menggunakan ulang data flow yang sama ke dalam instance BigAction yang berbeda.

![Template Icon](/img/bigaction/images/image5.jpg)

Setelah ditarik, user dapat memilih template yang sudah ditambahkan ke BigAction

#### Label

Komponen ini digunakan untuk menambahkan text dalam canvas. Dengan pilihan warna yang beragam untuk menambah estetik.

![Label Icon](/img/bigaction/images/image17.jpg)

### Menambahkan Processors

Processors adalah blok dasar dari pembuatan data flow. Setiap processor mempunyai fungsionalitas masing-masing, yang berkontribusi dalam pembuatan dari flowfile akhir.

Dataflow dibawah menggambarkan aliran data untuk mengambil file dari satu direktori menggunakan processor GetFile dan menyimpan di direktori lainnya menggunakan processor PutFile.

![](/img/bigaction/images/image33.png)

Mari kita mulai membuat aliran data dengan menambahkan sebuah Prosesor ke canvas. Untuk melakukan ini, seret ikon Prosesor dari kiri atas layar ke tengah canvas (seperti kertas latar belakang grafik) dan letakkan di sana. Ini akan memberi kita dialog yang memungkinkan kita untuk memilih prosesor yang akan

kita tambahan :

![](/img/bigaction/images/image8.png)

#### GetFile

GetFile digunakan untuk mengambil file-file dari format tertentu dari direktori tertentu. Terdapat juga opsi lain untuk dapat lebih mengontrol proses waktu penarikan file.

![](/img/bigaction/images/image52.png)

##### Pengaturan GetFile

Berikut ini adalah pengaturan yang berbeda dari prosesor GetFile:

- Name

Dalam pengaturan Nama, pengguna dapat menentukan nama apa pun untuk prosesor baik sesuai dengan proyek atau membuat nama yang lebih bermakna.

- Enable

Pengguna dapat mengaktifkan atau menonaktifkan prosesor menggunakan pengaturan ini.

- Penalty Duration

Pengaturan ini memungkinkan pengguna untuk menambahkan durasi waktu penalti, jika terjadi kegagalan flowfile.

- Yield Duration

Pengaturan ini digunakan untuk menentukan waktu hasil untuk prosesor. Dalam durasi ini, proses tidak dijadwalkan lagi.

- Bulletin Level

Pengaturan ini digunakan untuk menentukan tingkat log prosesor tersebut.

- Automatically Terminate Relationships

Ini memiliki daftar semua hubungan yang tersedia dari proses tertentu. Dengan mencentang kotak, pengguna dapat memprogram prosesor untuk menghentikan flowfile pada kejadian itu dan tidak mengirimkannya lebih jauh ke dalam aliran.

![](/img/bigaction/images/image3.png)

##### GetFile Scheduling

Ini adalah opsi penjadwalan berikut yang ditawarkan oleh prosesor GetFile:

- Schedule Strategy

Anda dapat menjadwalkan proses berdasarkan waktu dengan memilih time driven atau string CRON tertentu dengan memilih opsi driver CRON.

- Concurrent Tasks

Opsi ini digunakan untuk menentukan jumlah task yang dijalankan secara bersamaan untuk prosesor ini.

- Execution

Pengguna dapat menentukan apakah akan menjalankan prosesor di semua node atau hanya di node utama dengan menggunakan opsi ini.

- Run Schedule

Ini digunakan untuk menentukan waktu untuk strategi yang digerakkan oleh waktu atau ekspresi CRON untuk strategi yang digerakkan oleh CRON.

![](/img/bigaction/images/image46.png)

##### GetFile Properties

GetFile menawarkan beberapa properti seperti yang ditunjukkan pada gambar di bawah mulai dari properti wajib seperti direktori Input dan filter file, sampai ke properti opsional seperti Path Filter dan Ukuran file Maksimum. Seorang pengguna dapat mengelola proses pengambilan file menggunakan properti ini.

![](/img/bigaction/images/image4.png)

##### GetFile Comments

Bagian ini digunakan untuk menentukan informasi apapun tentang prosesor.

![](/img/bigaction/images/image58.png)

#### PutFile

Prosesor PutFile digunakan untuk menyimpan file dari aliran data ke lokasi tertentu.

![](/img/bigaction/images/image22.png)

##### Konfigurasi PutFile

Prosesor PutFile memiliki pengaturan berikut:

- Name

Dalam pengaturan Nama, pengguna dapat menentukan nama apa pun untuk prosesor baik sesuai dengan proyek atau membuat nama yang lebih bermakna.

- Enable

Pengguna dapat mengaktifkan atau menonaktifkan prosesor menggunakan pengaturan ini.

- Penalty Duration

Pengaturan ini memungkinkan pengguna untuk menambahkan durasi waktu penalti, jika terjadi kegagalan flowfile.

- Yield Duration

Pengaturan ini digunakan untuk menentukan waktu hasil untuk prosesor. Dalam durasi ini, proses tidak dijadwalkan lagi.

- Bulletin Level

Pengaturan ini digunakan untuk menentukan tingkat log prosesor tersebut.

- Automatically Terminate Relationships

Ini memiliki daftar semua hubungan yang tersedia dari proses tertentu. Dengan mencentang kotak, pengguna dapat memprogram prosesor untuk menghentikan flowfile pada kejadian itu dan tidak mengirimkannya lebih jauh ke dalam aliran.

##### PutFile Scheduling

Ini adalah opsi penjadwalan berikut yang ditawarkan oleh prosesor GetFile:

- Schedule Strategy

Anda dapat menjadwalkan proses berdasarkan waktu dengan memilih time driven atau string CRON tertentu dengan memilih opsi driver CRON.

- Concurrent Tasks

Opsi ini digunakan untuk menentukan jumlah task yang dijalankan secara bersamaan untuk prosesor ini.

- Execution

Pengguna dapat menentukan apakah akan menjalankan prosesor di semua node atau hanya di node utama dengan menggunakan opsi ini.

- Run Schedule

Ini digunakan untuk menentukan waktu untuk strategi yang digerakkan oleh waktu atau ekspresi CRON untuk strategi yang digerakkan oleh CRON.

##### PutFile Properties

Prosesor PutFile menyediakan properti seperti Direktori untuk menentukan direktori keluaran untuk tujuan transfer file dan lainnya untuk mengelola transfer seperti yang ditunjukkan pada gambar di bawah.

![](/img/bigaction/images/image19.png)

##### PutFile Comments

Bagian ini digunakan untuk menentukan informasi apapun tentang prosesor.

### Menghubungkan Processors

Setiap Prosesor memiliki seperangkat "Hubungan" yang ditentukan yang dapat digunakan untuk mengirim data. Ketika Prosesor selesai menangani FlowFile, hal itu mentransfernya ke salah satu Hubungan ini. Memungkinkan pengguna untuk mengonfigurasi cara menangani FlowFiles berdasarkan hasil Pemrosesan. Misalnya, banyak Prosesor mendefinisikan dua Hubungan: sukses dan gagal. Pengguna kemudian dapat mengonfigurasi data untuk dirutekan melalui aliran satu arah jika Prosesor berhasil memproses data dan merutekan data melalui aliran dengan cara yang sama sekali berbeda jika Prosesor tidak dapat memproses data karena alasan tertentu. Atau, tergantung pada use case, mungkin hanya mengarahkan kedua hubungan ke rute yang sama melalui aliran.

Sekarang setelah kita menambahkan dan mengonfigurasi prosesor GetFile dan menerapkan konfigurasi, kita dapat melihat di sudut kiri atas Prosesor sebuah ikon Alert (![](/img/bigaction/images/image32.png)) yang menandakan bahwa Prosesor tidak dalam status valid. Melayang di atas ikon ini, kita dapat melihat bahwa hubungan sukses belum ditentukan. Ini berarti bahwa kita belum memberi tahu apa yang harus dilakukan dengan data yang ditransfer oleh Prosesor ke hubungan yang sukses.

Kita sekarang dapat mengirim output dari GetFile Processor ke PutFile Processor.

Arahkan kursor ke Prosesor GetFile dengan mouse dan Ikon Koneksi (![](/img/bigaction/images/image44.png)) akan muncul di tengah Prosesor. Kita dapat menyeret ikon ini dari Prosesor GetFile ke Prosesor PutFile. Ini memberi kita dialog untuk memilih hubungan mana yang ingin kita sertakan untuk koneksi ini. Karena GetFile hanya memiliki satu hubungan, sukses, itu secara otomatis dipilih.

Mengklik pada tab Pengaturan menyediakan beberapa opsi untuk mengkonfigurasi

Bagaimana seharusnya koneksi ini berperilaku:

![](/img/bigaction/images/image55.png)

Kita bisa memberi nama Connection, jika kita mau. Jika tidak, nama Koneksi akan didasarkan pada hubungan yang dipilih. Kita juga dapat mengatur kedaluwarsa untuk data. Secara default, ini diatur ke "0 detik" yang menunjukkan bahwa data tidak boleh kedaluwarsa. Namun, kita bisa berubah nilai sehingga ketika data dalam Koneksi ini mencapai usia tertentu, itu akan dihapus secara otomatis (dan event EXPIRE Provenance yang sesuai akan dibuat).

Ambang batas tekanan balik (back pressure) memungkinkan kita untuk menentukan seberapa penuh antrian yang diizinkan sebelum Prosesor sumber tidak lagi dijadwalkan untuk dijalankan. Hal ini memungkinkan kami untuk menangani kasus di mana satu Prosesor mampu menghasilkan data lebih cepat daripada Prosesor berikutnya yang mampu mengkonsumsi data tersebut. Jika tekanan balik dikonfigurasi untuk setiap koneksi di sepanjang jalan, Prosesor yang membawa data ke dalam sistem pada akhirnya akan mengalami tekanan balik dan berhenti membawa data baru sehingga sistem memiliki kemampuan untuk pulih.

Akhirnya, kita mempunyai prioritas di sisi kanan. Ini memungkinkan kita untuk mengontrol bagaimana data dalam antrian ini diurutkan. Kami dapat menyeret Prioritas dari daftar "Available prioritizers" ke daftar "Selected prioritizer" untuk mengaktifkan prioritas. Jika beberapa prioritas diaktifkan, mereka akan dievaluasi sedemikian rupa sehingga Prioritas yang terdaftar pertama akan dievaluasi terlebih dahulu dan jika dua FlowFiles ditentukan sama menurut Prioritas itu, Prioritas yang kedua akan digunakan.

Kita cukup mengklik Tambah untuk menambahkan Koneksi ke grafik kita. Kita sekarang akan melihat bahwa ikon Peringatan telah berubah menjadi ikon Berhenti (![](/img/bigaction/images/image15.png)). Namun, Pemroses PutFile sekarang tidak valid karena hubungan sukse dan failure belum terhubung kemanapun. Mari kita atasi ini dengan memberi sinyal bahwa data yang dirutekan untuk sukses oleh PutFile harus "Automatically Terminated Relationship," yang berarti bahwa NiFi harus mempertimbangkan pemrosesan FlowFile selesai dan "buang" data. Untuk melakukan ini, kami mengkonfigurasi Prosesor PutFile. Pada tab Setting, di sebelah kanan kita bisa mencentang kotak di sebelah success dan failure Relationship to Auto Terminate data. Mengklik OK akan menutup dialog dan menunjukkan bahwa kedua Prosesor sekarang berhenti.

### Memulai dan Menghentikan Processor

Pada titik ini, kita memiliki dua Prosesor pada kanvas, tetapi tidak ada yang terjadi. Untuk memulai Prosesor, kita dapat mengklik masing-masing satu per satu dan kemudian klik kanan dan pilih item menu Start. Atau, kita dapat memilih Prosesor pertama, lalu tahan tombol Shift kunci saat memilih Prosesor lain untuk memilih keduanya. Kemudian, kita dapat mengklik kanan dan memilih item menu Start. Sebagai alternatif untuk menggunakan menu konteks, kita dapat memilih Prosesor dan kemudian klik ikon Start di palet Operate.

Setelah dimulai, ikon di sudut kiri atas Prosesor akan berubah dari ikon stopped menjadi ikon running. Kita kemudian dapat menghentikan Prosesor dengan menggunakan ikon Stop di palet Operate atau item menu Stop.

Setelah Prosesor dimulai, kita tidak dapat mengkonfigurasinya lagi. Sebaliknya, ketika kita mengklik kanan pada Processor, kita diberikan pilihan untuk melihat konfigurasi saat ini. Untuk mengkonfigurasi Prosesor, pertama-tama kita harus menghentikan Prosesor dan menunggu tugas apa pun yang mungkin dijalankan selesai. Jumlah tugas yang sedang dijalankan ditampilkan di dekat sudut kanan atas Prosesor, tetapi tidak ada yang ditampilkan di sana jika saat ini tidak ada tugas.

### Mendapatkan Info Lebih Lanjut untuk Prosesor

Dengan setiap Prosesor yang memiliki kemampuan untuk mengekspos beberapa properti dan hubungan yang berbeda, mungkin sulit untuk mengingat bagaimana semua bagian yang berbeda bekerja untuk setiap Prosesor. Untuk mengatasi ini, kita dapat mengklik kanan pada Prosesor dan memilih item menu Usage. Ini akan memberi informasi penggunaan Processor, seperti deskripsi Processor, hubungan berbeda yang tersedia, saat hubungan berbeda digunakan, Properti yang diekspos oleh Processor dan dokumentasinya, serta Atribut FlowFile (jika ada).

## Prosesor Apa yang Tersedia

Untuk membuat aliran data yang efektif, pengguna harus memahami jenis Prosesor apa yang tersedia. NiFi berisi banyak Prosesor yang berbeda tersedia. Prosesor ini menyediakan kemampuan untuk menyerap data dari berbagai sistem, rute, transformasi, proses, split, dan data agregat, dan mendistribusikan data ke banyak sistem. Jumlah Prosesor yang tersedia meningkat di hampir setiap rilis NiFi. Oleh karena itu, kami tidak akan mencoba menyebutkan setiap Prosesor yang tersedia, tetapi kami akan menyoroti beberapa Prosesor yang paling sering digunakan, mengkategorikannya berdasarkan fungsi.

### Data Transformation

- CompressContent: Compress atau Decompress Content
- ConvertCharacterSet: Ubah set karakter yang digunakan untuk menyandikan konten dari satu set karakter ke yang lain
- EncryptContent: Encrypt atau Decrypt Content
- ReplaceText: Gunakan Regular Expressions untuk modifikasi text
- TransformXml: Gunakan XSLT transform menjadi XML Content
- JoltTransformJSON: Gunakan JOLT specification untuk mentransform JSON Content

### Routing and Mediation

- ControlRate: Kurangi kecepatan aliran data melalui satu bagian aliran
- DetectDuplicate: Memantau FlowFiles duplikat, berdasarkan beberapa kriteria yang ditentukan pengguna. Sering digunakan bersama dengan HashContent
- DistributeLoad: Load balance atau sampel data dengan hanya mendistribusikan sebagian data ke setiap Hubungan yang ditentukan pengguna
- MonitorActivity: Mengirim pemberitahuan ketika periode waktu yang ditentukan pengguna berlalu tanpa setiap data yang datang melalui titik tertentu dalam aliran. Secara opsional, kirim pemberitahuan saat aliran data dilanjutkan.
- RouteOnAttribute: Route FlowFile berdasarkan atribut yang dikandungnya.
- ScanAttribute: menyimpan set Atribut yang ditentukan pengguna pada FlowFile, memeriksa untuk melihat apakah salah satu Atribut cocok dengan istilah yang ditemukan dalam kamus yang ditentukan pengguna.
- RouteOnContent: Cari Konten FlowFile untuk melihat apakah itu cocok dengan yang ditentukan pengguna Ekspresi Reguler. Jika demikian, FlowFile dirutekan ke hubungan yang dikonfigurasi.
- ScanContent: Cari Konten FlowFile untuk istilah yang ada dalam definisi pengguna

kamus dan rute berdasarkan ada tidaknya istilah tersebut. Kamus dapat terdiri dari entri tekstual atau entri biner.

- ValidateXml: Validasi Konten XML terhadap Skema XML; rute FlowFile berdasarkan

apakah Konten FlowFile valid atau tidak menurut XML yang ditentukan pengguna

Skema.

### Database Access

- ConvertJSONToSQL: Ubah dokumen JSON menjadi perintah SQL INSERT atau UPDATE yang kemudian dapat diteruskan ke Prosesor PutSQL
- ExecuteSQL: Menjalankan perintah SQL SELECT yang ditentukan pengguna, menulis hasilnya ke FlowFile dalam format Avro
- PutSQL: Memperbarui database dengan menjalankan pernyataan SQL DDM yang ditentukan oleh konten FlowFile
- SelectHiveQL: Menjalankan perintah HiveQL SELECT yang ditentukan pengguna terhadap database Apache Hive, menulis hasilnya ke FlowFile dalam format Avro atau CSV
- PutHiveQL: Memperbarui database Hive dengan menjalankan pernyataan DDM HiveQL yang ditentukan oleh konten FlowFile

### Attribute Extraction

- EvaluateJsonPath: Pengguna memasok Ekspresi JSONPath (Mirip dengan XPath, yang digunakan untuk parsing/ekstraksi XML), dan Ekspresi ini kemudian dinilai terhadap Konten JSON untuk menggantikan Konten FlowFile atau mengekstrak nilai ke dalam Atribut user-named.
- EvaluateXPath: Pengguna memasok Ekspresi XPath, dan Ekspresi ini kemudian dievaluasi terhadap Konten XML untuk mengganti Konten FlowFile atau mengekstrak nilai ke dalam Atribut user-named
- EvaluateXQuery: Pengguna memasok kueri XQuery, dan kueri ini kemudian dievaluasi terhadap Konten XML untuk mengganti Konten FlowFile atau mengekstrak nilai ke dalam Atribut user-named
- ExtractText: Pengguna memasok satu atau lebih Ekspresi Reguler yang kemudian dievaluasi terhadap konten tekstual FlowFile, dan nilai yang diekstraksi kemudian ditambahkan sebagai atribut user-named.
- HashAttribute: Melakukan fungsi hashing terhadap penggabungan daftar Atribut user-named.
- HashContent: Melakukan fungsi hashing terhadap konten FlowFile dan menambahkan nilai hash sebagai Atribut.
- IdentifyMimeType: Mengevaluasi konten FlowFile untuk menentukan jenis file apa yang dienkapsulasi FlowFile. Prosesor ini mampu mendeteksi berbagai Jenis MIME, seperti gambar, dokumen pengolah kata, teks, dan format kompresi.
- UpdateAttribute: Menambahkan atau memperbarui sejumlah Atribut yang ditentukan pengguna ke FlowFile. Ini berguna untuk menambahkan nilai yang dikonfigurasi secara statis, serta menurunkan nilai Atribut secara dinamis dengan menggunakan Bahasa Ekspresi. Prosesor ini juga menyediakan "Antarmuka Pengguna Tingkat Lanjut," yang memungkinkan pengguna memperbarui Atribut secara kondisional, berdasarkan yang di definisikan user-supplied-rules.

### System Interaction

- ExecuteProcess: Menjalankan perintah Sistem Operasi yang ditentukan pengguna. StdOut Proses diarahkan sedemikian rupa sehingga konten yang ditulis ke StdOut menjadi konten FlowFile keluar. Prosesor ini adalah Prosesor Sumber - outputnya diharapkan menghasilkan FlowFile baru, dan panggilan sistem diharapkan tidak menerima input. Untuk memberikan masukan ke proses, gunakan Prosesor ExecuteStreamCommand.

- ExecuteStreamCommand: Menjalankan perintah Sistem Operasi yang ditentukan pengguna. Isi FlowFile secara opsional dialirkan ke StdIn proses. Konten yang ditulis ke StdOut menjadi konten FlowFile keluar hte. Prosesor ini tidak dapat digunakan sebagai prosesor Sumber - prosesor ini harus diumpankan ke FlowFiles yang masuk untuk melakukan pekerjaannya. Untuk melakukan jenis fungsionalitas yang sama dengan Prosesor Sumber, lihat Prosesor ExecuteProcess. Untuk list lengkap dan keterangan detail processor yang ada bisa dilihat di Global Menu submenu Help.

### Data Ingestion

- GetFile
- GetFTP
- GetSFTP
- GetJMSQueue
- GetJMSTopic
- GetHTTP
- ListenHTTP
- ListenUDP
- GetHDFS
- ListHDFS / FetchHDFS
- FetchS3Object
- GetKafka
- GetMongo
- GetTwitter

### Data Egress / Sending Data

- PutEmail
- PutFile
- PutFTP
- PutSFTP
- PutJMS
- PutSQL
- PutKafka
- PutMongo

### Splitting and Aggregation

- SplitText
- SplitJson
- SplitXml
- UnpackContent
- MergeContent
- SegmentContent
- SplitContent

### HTTP

- GetHTTP
- ListenHTTP
- InvokeHTTP
- PostHTTP
- HandleHttpRequest / HandleHttpResponse

### Amazon Web Services

- FetchS3Object
- PutS3Object
- PutSNS
- GetSQ:
- PutSQS
- DeleteSQS

## Mengolah Attribute

Setiap FlowFile dibuat dengan beberapa Atribut, dan Atribut ini akan berubah selama masa hidup FlowFile. Konsep FlowFile sangat kuat dan memberikan tiga manfaat utama. Pertama, memungkinkan pengguna untuk membuat keputusan perutean dalam aliran sehingga FlowFiles yang memenuhi beberapa kriteria dapat ditangani secara berbeda dari FlowFiles lainnya. Ini dilakukan dengan menggunakan RouteOnAttribute dan Prosesor serupa.

Kedua, Atribut digunakan untuk mengkonfigurasi Prosesor sedemikian rupa sehingga konfigurasi Prosesor bergantung pada data itu sendiri. Misalnya, Prosesor PutFile dapat menggunakan Atribut untuk mengetahui di mana harus menyimpan setiap FlowFile, sementara direktori dan nama file Atribut mungkin berbeda untuk setiap FlowFile.

Terakhir, Atribut memberikan konteks yang sangat berharga tentang data. Ini berguna saat meninjau data Asal untuk FlowFile. Ini memungkinkan pengguna untuk mencari data Provenance yang cocok dengan kriteria tertentu, dan juga memungkinkan pengguna untuk melihat konteks ini saat memeriksa detail Provenance Event. Dengan melakukan ini, pengguna kemudian dapat memperoleh wawasan berharga tentang mengapa data diproses dengan satu atau lain cara, hanya dengan melirik konteks yang dibawa bersama dengan konten.

### Attribute Umum

Setiap FlowFile memiliki set Atribut minimum:

- filename: Nama file yang dapat digunakan untuk menyimpan data ke sistem file lokal atau jauh.
- path: Nama direktori yang dapat digunakan untuk menyimpan data ke sistem file lokal atau jauh.
- uuid: Pengidentifikasi Unik Universal yang membedakan FlowFile dari FlowFile lain dalam sistem.
- entryDate: Tanggal dan waktu saat FlowFile memasuki sistem (yaitu, dibuat). Nilai atribut ini adalah angka yang mewakili jumlah milidetik sejak tengah malam, 1 Januari 1970 (UTC).
- lineageStartDate: Setiap kali FlowFile dikloning, digabungkan, atau dipisah, ini menghasilkan FlowFile "anak" yang dibuat. Ketika anak-anak itu kemudian dikloning, digabungkan, atau dipecah, rantai leluhur pun dibangun. Nilai ini mewakili tanggal dan waktu di mana nenek moyang tertua memasuki sistem. Cara lain untuk memikirkan hal ini adalah bahwa atribut ini mewakili latensi FlowFile melalui sistem. Nilai adalah angka yang mewakili jumlah milidetik sejak tengah malam, 1 Januari 1970 (UTC).
- fileSize: Atribut ini mewakili jumlah byte yang diambil oleh Konten FlowFile.

Perhatikan bahwa atribut uuid, entryDate, lineageStartDate, dan fileSize dibuat oleh sistem dan tidak dapat diubah.

## Memonitor BigAction

Saat data mengalir melalui aliran data di BigAction, penting untuk memahami seberapa baik kinerja sistem untuk menilai apakah akan memerlukan lebih banyak sumber daya dan untuk menilai kesehatan sumber daya saat ini. BigAction menyediakan beberapa mekanisme untuk memantau sistem.

### Status Bar

Di dekat bagian atas layar BigAction dibawah Component Toolbar adalah bilah yang disebut sebagai Status Toolbar. Ini berisi beberapa statistik penting tentang kesehatan sistem saat ini. Jumlah proses Aktif dapat menunjukkan seberapa keras BigAction saat ini bekerja, dan stat Antrian menunjukkan berapa banyak FlowFiles yang saat ini antri di seluruh aliran, serta ukuran total FlowFiles tersebut.

Jika instance BigAction berada dalam sebuah cluster, kita juga akan melihat indikator di sini yang memberi tahu kita berapa banyak node dalam cluster dan berapa banyak yang saat ini terhubung. Dalam hal ini, jumlah proses aktif dan ukuran antrian merupakan indikasi dari semua jumlah semua node yang saat ini terhubung.

### Komponen Statistik

Setiap Processor, Process Group, dan Remote Process Group di kanvas menyediakan beberapa statistik tentang berapa banyak data yang telah diproses oleh komponen. Statistik ini memberikan informasi tentang berapa banyak data yang telah diproses dalam lima menit terakhir. Ini adalah jendela bergulir dan memungkinkan kita untuk melihat hal-hal seperti jumlah FlowFiles yang telah dikonsumsi oleh Prosesor, serta jumlah FlowFiles yang telah dipancarkan oleh Prosesor. Koneksi antara Prosesor juga mengekspos jumlah item yang sedang antri. Mungkin juga bermanfaat untuk melihat nilai historis untuk metrik ini dan, jika dikelompokkan, bagaimana node yang berbeda dibandingkan satu sama lain. Untuk melihat informasi ini, kita dapat mengklik kanan pada komponen dan memilih item menu View status history.

![](/img/bigaction/images/image57.png)

Ini akan menunjukkan kepada kita grafik yang mencakup waktu sejak BigAction dimulai, atau hingga 24 jam, mana yang lebih sedikit. Jumlah waktu yang ditampilkan di sini dapat diperpanjang atau dikurangi dengan mengubah konfigurasi di file properti.

Di pojok kanan atas dialog ini terdapat drop-down yang memungkinkan pengguna memilih metrik mana yang mereka lihat. Grafik di bagian bawah memungkinkan pengguna untuk memilih bagian grafik yang lebih kecil untuk memperbesar.

![](/img/bigaction/images/image35.png)

### Bulletin

Selain statistik yang disediakan oleh setiap komponen, pengguna akan ingin mengetahui jika ada masalah yang terjadi. Meskipun kita dapat memantau log untuk hal-hal yang menarik, akan lebih mudah jika notifikasi muncul di layar. Jika Prosesor mencatat sesuatu sebagai WARNING atau ERROR, kita akan melihat "Indikator Buletin" muncul di sudut kanan atas Prosesor. Indikator ini terlihat seperti sticky note dan akan ditampilkan selama lima menit setelah event terjadi. Mengarahkan kursor ke buletin memberikan informasi tentang apa yang terjadi sehingga pengguna tidak perlu menyaring pesan log untuk menemukannya. Jika dalam sebuah cluster, buletin juga akan menunjukkan node mana dalam cluster yang mengeluarkan buletin. Kita juga dapat mengubah tingkat log di mana buletin akan muncul di tab Pengaturan dari Dialog Konfigurasi untuk Prosesor.

![](/img/bigaction/images/image41.png)

## Data Provenance

Nifi menjaga tingkat detail yang sangat terperinci tentang setiap bagian data yang diserapnya. Saat data diproses melalui sistem dan diubah, diarahkan, dibagi, dikumpulkan, dan didistribusikan ke titik akhir lainnya, semua informasi ini disimpan dalam Repository Provenance. Untuk mencari dan melihat informasi ini, kita dapat memilih Data Provenance dari Menu Global. Ini akan memberi kami tabel yang mencantumkan event Provenance yang dicari :

![](/img/bigaction/images/image14.png)

Awalnya, tabel ini diisi dengan 1.000 provenance event terbaru yang telah terjadi (meskipun mungkin perlu beberapa detik untuk memproses informasi setelah peristiwa terjadi). Dari dialog ini, ada tombol Cari yang memungkinkan pengguna untuk mencari event yang terjadi oleh Prosesor tertentu, untuk FlowFile tertentu dengan nama file atau UUID, atau beberapa field lainnya. File nifi.properties menyediakan kemampuan untuk mengonfigurasi properti mana yang diindeks, atau dibuat dapat dicari. Selain itu, file properti juga memungkinkan Anda untuk memilih Atribut FlowFile tertentu yang akan diindeks. Akibatnya, Anda dapat memilih Atribut mana yang penting bagi aliran data spesifik Anda dan membuat Atribut tersebut dapat dicari.

### Event Details

Setelah melakukan pencarian, tabel akan diisi hanya dengan event yang cocok dengan kriteria pencarian. Dari sini, kita dapat memilih ikon Info (![](/img/bigaction/images/image9.png)) di sisi kiri tabel untuk melihat detail event tersebut:

![](/img/bigaction/images/image47.png)

Dari sini, kita dapat melihat dengan tepat kapan peristiwa itu terjadi, FlowFile mana yang terpengaruh peristiwa itu, komponen mana (Prosesor, dll.) yang melakukan peristiwa itu, berapa lama peristiwa itu berlangsung, dan waktu keseluruhan data itu ada di NiFi saat peristiwa itu terjadi (total latensi). Tab berikutnya memberikan daftar semua Atribut yang ada di FlowFile pada saat itu peristiwa itu terjadi:

![](/img/bigaction/images/image26.png)

Dari sini, kita dapat melihat semua Atribut yang ada pada FlowFile saat peristiwa terjadi, serta nilai sebelumnya untuk Atribut tersebut. Ini memungkinkan kami mengetahui Atribut mana yang berubah sebagai akibat dari peristiwa ini dan bagaimana atribut tersebut berubah. Selain itu, di sudut kanan adalah kotak centang yang memungkinkan pengguna untuk melihat hanya Atribut yang berubah. Ini mungkin tidak terlalu berguna jika FlowFile hanya memiliki sedikit Atribut, tetapi bisa sangat membantu ketika FlowFile memiliki ratusan Atribut.

Ini sangat penting karena memungkinkan pengguna untuk memahami konteks yang tepat di mana FlowFile diproses. Sangat membantu untuk memahami mengapa FlowFile diproses seperti itu, terutama ketika Prosesor dikonfigurasi menggunakan Bahasa Expression. Terakhir adalah tab Content:

![](/img/bigaction/images/image49.png)

Tab ini memberi informasi tentang di mana dalam Content Repositori FlowFile konten disimpan. Jika peristiwa tersebut mengubah konten FlowFile, kita akan melihat klaim konten sebelum (input) dan sesudah (output). Kita kemudian diberi opsi untuk Mengunduh konten atau untuk Melihat konten di dalam NiFi itu sendiri, jika format datanya adalah salah satu yang NiFi pahami cara rendernya.

Selain itu, di bagian Replay tab, ada tombol Putar Ulang yang memungkinkan pengguna untuk memasukkan kembali FlowFile ke dalam aliran dan memprosesnya kembali dari titik di mana peristiwa itu terjadi. Ini menyediakan mekanisme yang sangat kuat, karena dapat memodifikasi aliran secara real time, memproses ulang FlowFile, dan kemudian melihat hasilnya. Jika tidak seperti yang diharapkan, kita dapat memodifikasi alur lagi, dan memproses ulang FlowFile lagi. Kita dapat melakukan pengembangan berulang aliran ini hingga memproses data persis seperti disengaja.

### Graph Lineage

Selain melihat detail Provenance event, juga dapat lihat lineage FlowFile yang terlibat dengan mengklik Ikon Lineage (![](/img/bigaction/images/image7.png)) dari tampilan tabel. Ini memberi kita representasi grafis tentang apa yang terjadi pada bagian data itu saat melintasi sistem:

![](/img/bigaction/images/image59.png)

Dari sini, kita dapat mengklik kanan pada salah satu event yang diwakili dan mengklik item menu Lihat Detail untuk melihat Detail Event. Representasi grafis ini menunjukkan kepada kita peristiwa mana yang terjadi pada data. Ada beberapa jenis event "khusus" yang harus diperhatikan. Jika kita melihat event JOIN, FORK, atau CLONE, kita bisa klik kanan dan pilih Find Parents atau Expand. Ini memungkinkan kita untuk melihat lineage FlowFiles induk dan FlowFiles anak-anak yang dibuat juga.

Slider di sudut kiri bawah memungkinkan kita untuk melihat waktu di mana peristiwa ini terjadi. Dengan menggesernya ke kiri dan kanan, kita dapat melihat peristiwa mana yang memasukkan latensi ke dalam sistem sehingga kita memiliki pemahaman yang sangat baik tentang di mana dalam sistem kita, kita mungkin perlu menyediakan lebih banyak sumber daya, seperti jumlah Task Bersamaan untuk Prosesor. Atau mungkin mengungkapkan, misalnya, bahwa sebagian besar latensi dikarenakan oleh event GABUNG, di mana menunggu lebih banyak FlowFile untuk bergabung bersama. Dalam kedua kasus, kemampuan untuk dengan mudah melihat di mana ini terjadi adalah fitur yang sangat kuat yang akan membantu pengguna untuk memahami bagaimana proses beroperasi.

# BIGACTION BATCH

## Operasional BigAction Batch

### Login

1.  Akses link/IP address  http://172.30.101.63/bigbox/
1.  Masukkan username dan password beserta captcha kemudian klik sign in.

![](/img/bigaction/images/image37.png)

Klik Apps dan Pilih Menu Big Action yang selanjutnya akan di direct ke halaman utama BigAction http://172.30.101.63/bigbox/bigaction/list

![](/img/bigaction/images/image6.png)

## Halaman BigAction Batch

BigAction Batch adalah bagian dari platform BIGBOX yang berfungsi menjalankan aksi-aksi secara otomatis dan berbentuk workflow untuk tujuan-tujuan tertentu, yakni berupa pengelolaan data maupun pengelolaan proses. Setiap aksi dibangun oleh elemen-elemen kecil berupa task maupun processor dengan konsep aliran input atau pun output. BigAction berfungsi merangkai rangkaian task dan processor menjadi sebuah workflow process. Proses yang dijalankan dibedakan kedalam 2 jenis, pertama berupa proses data, dan yang kedua berupa form atau halaman aplikasi. Proses data dibedakan kedalam 2 tipe dalam hal running-process yakni secara batch (BigAction Batch) dan secara stream (BigAction Stream). Pada aplikasi kali ini yang akan dibahas merupakan tipe running-process secara batch (BigAction Batch).

User akan masuk pada dashboard awal menu Action Discovery, berupa tabel yang isinya terdiri dari daftar actionID, actionName, Cron, Class dan Action.

![](/img/bigaction/images/image10.png)Pada kolom actions, terdiri dari beberapa yang berisi button perintah seperti;

![](/img/bigaction/images/image36.png)

### Edit

Edit merupakan fungsi action untuk mengubah Nama Action dan Type Action pada daftar Cron ID yang sudah dibuat sebelumnya, kemudian klik Submit untuk menyimpan atau klik Cancel untuk membatalkan.

![](/img/bigaction/images/image43.png)

### View

View: merupakan fungsi action untuk melihat workflow yang sudah dibuat atau sudah diedit sebelumnya.

![](/img/bigaction/images/image48.png)

### Delete

Delete: merupakan fungsi action untuk menghapus daftar Cron yang sudah dibuat. Ketika di klik, akan muncul pop-up notification sebagai konfirmasi akan di hapus atau tidak.

![](/img/bigaction/images/image12.png)

### Clone

Clone: merupakan fungsi action untuk membuat workflow yang sama persis atau mirip dengan struktur komponen prosesor-prosesornya.

Ketika di klik, akan muncul pop-up notification sebagai konfirmasi akan kloning cron atau tidak,

![](/img/bigaction/images/image56.png)

Setelah di klik button action ![](/img/bigaction/images/image63.png)maka halaman akan dialihkan ke halaman canvas area, kemudian pada langkah selanjutnya, berikan garis alur untuk menghubungkan alur dari awal “Start of Action” hingga akhir “End of Action” pada tabel task lalu pilih Draw Line.

![](/img/bigaction/images/image50.png)

### Freeze/Unfreeze

Freeze/Unfreeze: merupakan fungsi action untuk membuat proses workflow pada canvas area tidak bisa diedit.

Untuk menambah Job baru, klik Add Action  ![](/img/bigaction/images/image53.png)yang terdapat di bagian kanan atas tabel, yang selanjutnya user akan diarahkan menuju halaman [http://172.30.101.63/bigbox/bigaction/addaction](https://www.google.com/url?q=http://172.17.xx.xxx/bigbox/bigaction/addaction&sa=D&source=editors&ust=1657621415576098&usg=AOvVaw1t2UhlAVbM7b4nc_4SEe__)

![](/img/bigaction/images/image62.png)

Isi filed Action Name, Action Type, Description dan Var Input (separated by comma) kemudian klik Submit untuk menyimpan atau klik Cancel untuk membatalkan. Setelah di-submit dan sukses akan muncul notification “Success! Action has been created” seperti di bawah ini,

![](/img/bigaction/images/image21.png)

Selanjutnya akan di arahkan secara otomatis ke halaman canvas Action Builder untuk memulai pembuatan otomatisasi workflow process.

![](/img/bigaction/images/image45.png)

Klik kanan pada area canvas kosong kemudian pilih “New Operator”, selanjutnya akan muncul tabel task “Operator” berwarna kuning seperti di bawah ini

![](/img/bigaction/images/image38.png)Setelah muncul tabel operator, klik kanan pada tabel task Operator untuk memilih jenis operator. Didalamnya terdapat beberapa jenis task Operator;

- Merger All

Fungsi tipe operator ini adalah untuk menggabungkan task dari dua operator

![](/img/bigaction/images/image30.png)

- Branch

Fungsi tipe operator ini adalah untuk pemilihan, pengkondisian suatu task yang dipisahkan dengan warna garis / line. Saat memilih tipe ini, user akan diminta mengisi pada form, sebagai berikut;

![](/img/bigaction/images/image1.png)Setelah selesai klik Save, maka pada tabel operator akan berisi logic seperti ini;

![](/img/bigaction/images/image34.png)

- Map

Fungsi tipe operator ini untuk me-mapping data yang sama namun menggunakan nama Variable yang berbeda. Misal, Task A menggunakan nama Variable Tanggal, dan di Task B menggunakan nama Date, namun data di task A masih dibutuhkan pada Task B, maka diantara dua task tersebut dijembatani dengan operator Map. Pada saat memilih tipe ini, user akan diminta untuk memasukan from dan To, untuk mengisi kolom tersebut, isi dengan task A untuk From, dan Task B untuk To. Kemudian klik Save.

![](/img/bigaction/images/image25.png)

Maka akan muncul pada tabel operator, seperti di bawah ini;

![](/img/bigaction/images/image24.png)

- Start Looping & End Looping

Fungsi tipe operator Start Looping adalah untuk mengulang task, dan End Looping untuk memberhentikan task yang diulang tersebut.

![](/img/bigaction/images/image18.png)

- Custom

Pada type operator ini user memilih untuk mengcustom atau menentukan sendiri task yang akan dimunculkan pada operator untuk memanggil script yang sudah dibuat pada proses backend. Pada kategori Class/Model terdapat modul-modul utama dan model-model (data script) yang terdapat 2 kriteria, model (data script) yang boleh di publish atau di hidden.

![](/img/bigaction/images/image28.png)

Ketika user telah memasukan data sesuai fieldnya, selanjutnya klik button action Save, kemudian akan muncul pada canvas area, sebagai berikut;

![](/img/bigaction/images/image40.png)

Berikan garis alur untuk menghubungkan alur dari awal hingga akhir dengan cara klik kanan pada tabel task, lalu pilih Draw Line.

- Set Initial Value

Fungsi tipe operator Set Initial Value adalah untuk memasukan variable sementara, untuk diolah lebih lanjut. Biasanya Set Initial Value akan disimpan di langkah pertama, seperti gambar berikut;

![](/img/bigaction/images/image2.png)

- Set Return

Fungsi tipe operator Set Return adalah untuk memberikan feedback dari hasil task. Misal, apabila user sudah melakukan Task A maka pada halaman tersebut akan muncul keterangan

Berhasil atau Gagal. Pada saat akan menggunakan Operator ini, user akan diminta untuk memasukan kata yang ingin dimasukan, dengan contoh sebagai berikut;

![](/img/bigaction/images/image51.png)

Apabila telah selesai membuat Action task, klik Run yang terdapat pada bagian atas canvas untuk menjalankan fungsi actionnya.

## Halaman Background Management

Halaman Background Management merupakan menu yang mengatur proses “cron” atau penjadwalan secara otomatis.

![](/img/bigaction/images/image61.png)

Jendela Background Management berisi tabel daftar CRON ID, Created Date, Interval, Status Active dan Action, terdapat juga action button seperti; Add New, dan Refresh. Untuk menambahkan dokumen, klik Add New yang berada di kanan atas tabel, kemudian user akan diarahkan menuju halaman berikut;

Lengkapi field Machine Name, Type, Range dan Routine Job (Every), jika sudah dilengkapi semua klik Submit untuk menyimpan, atau klik Cancel untuk membatalkan.

---
