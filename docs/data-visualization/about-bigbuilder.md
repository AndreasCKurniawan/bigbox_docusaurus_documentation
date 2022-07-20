---
sidebar_position: 1
---

# About BigBuilder

Data Visualization as a Service

## Introduction

Dokumen User Guide BigBuilder ini berisi semua informasi penting bagi pengguna sehingga dapat memudahkan pengguna dalam menggunakan BigBuilder .

### Overview BigBuilder

Bigbuilder adalah sebuah Data Visualization as a Service yang membantu pengguna dalam menghubungkan ke berbagai sumber data dalam format yang sesuai dan melakukan visualisasi dari data yang dimiliki dengan berbagai macam grafik dan berbagai macam kustomisasi sesuai keinginan pengguna.

![](/img/bigbuilder/images/image12.png)

<center>
Gambar 1. Tampilan Home Page
</center>

Pada bagian Home page akan menunjukan berbagai macam component

1. Berbagai menu yang bisa dipilih pengguna dalam melakukan pembuatan sebuah page:
   1. Home
   2. Connection
   3. Data Virtualization
   4. Portlet
   5. Page
   6. Extraction
   7. Extraction Mapping
2. Pengguna bisa langsung memulai membuat sebuah visualisasi dari membuat sebuah Portlet terlebih dahulu
3. Pengguna bisa membuat sebuah pages dari berbagai portlet sehingga bisa membuat sebuah visualisasi sesuai keinginan
4. Fitur search yang akan membantu pengguna dalam mencari sebuah page ataupun sebuah portlet.

## Data Builder

Memungkinkan pengguna untuk melakukan eksplorasi terhadap sumber data yang akan digunakan dalam melakukan visualisasi seperti menghubungkan ke sumber data mengubah field type sesuai dengan keinginan, dan menampilkan data yang dihubungkan

### Koneksi

Berisi list sumber data yang sudah berhasil dihubungkan dengan berbagai menu yang bisa dipilih

![](/img/bigbuilder/images/image115.png)

<center>
Gambar 2. Halaman Connection
</center>

1. Tombol ![](/img/bigbuilder/images/image107.png) digunakan untuk menuju ke halaman add connection sehingga pengguna bisa menambahkan sumber data yang diinginkan
2. Pengguna bisa melakukan pencarian berdasarkan nama connection yang sudah didaftarkan Data Virtualization
3. Pengguna bisa melakukan pencarian berdasarkan adapter, host, dbName sesuai dengan connection yang sudah didaftarkan
4. Berisi list connection yang berhasil didaftarkan oleh pengguna sebelumnya
5. Tombol “Edit” digunakan untuk melakukan perubahan konfigurasi terhadap connection yang sudah pernah dibuat
6. Tombol “Hapus” digunakan untuk menghapus connection yang sudah tidak digunakan
7. Tombol “View Table” untuk melakukan eksplorasi terhadap suatu data dari sumber data yang sudah dihubungkan

#### Add Connection

Pengguna bisa menambahkan berbagai macam sumber data dibagian “Add Connection” sehingga data yang akan dieksplorasi bisa dihubungkan dengan BigBuilder.

![](/img/bigbuilder/images/image71.png)

<center>
Gambar 3. Halaman Add Connection
</center>

Pada halaman ini akan disediakan berbagai macam form yang untuk mendaftarkan sebuah sumber data ke BigBuilder sehingga bisa dihubungkan .

Ada berbagai macam adapter yang bisa digunakan untuk menghubungkan sumber data dengan BigBuilder .

- MySQL
- Oracle
- PDO_OCI
- PDO_MySQL
- Hive

![](/img/bigbuilder/images/image68.png)

Setelah semua form terisi sesuai dengan sumber data yang akan dihubungkan, pengguna bisa menekan tombol ![](/img/bigbuilder/images/image72.png) untuk melakukan test koneksi terhadap sumber data yang akan dihubungkan , apakah berhasil atau tidak.

Setelah test koneksi sudah berhasil bisa langsung menekan ![](/img/bigbuilder/images/image18.png) untuk melakukan penyimpanan terhadap sumber data yang sudah didaftarkan .

#### Edit Connection

Ketika pengguna akan melakukan perubahan terhadap sebuah koneksi yang sudah didaftarkan bisa menggunakan “Edit Connection “.

Pada bagian ini akan disediakan form yang bisa dilakukan perubahan terhadap koneksi tersebut, dan juga disediakan tombol ![](/img/bigbuilder/images/image98.png) ketika ingin melakukan tes terhadap koneksi yang sudah dilakukan perubahan.

![](/img/bigbuilder/images/image66.png)

<center>
Gambar 4. Halaman Edit Connection
</center>

Kemudian tekan tombol ![](/img/bigbuilder/images/image92.png) ketika perubahan tersebut sudah selesai dilakukan dan hasil test connection sudah berhasil.

#### View Tables

Setelah sumber data sudah berhasil dihubungkan , ketika ingin melihat table yang terdapat pada sumber data tersebut bisa menggunakan “View Tables”

![](/img/bigbuilder/images/image89.png)

<center>
Gambar 5. Halaman View Tables
</center>

Pada bagian ini akan ditampilkan list tables yang terdapat pada sebuah sumber data yang dipilih

![](/img/bigbuilder/images/image24.png)

<center>
Gambar 6. Kolom Search
</center>

Disediakan “Search” yang digunakan untuk melakukan pencarian terhadap sebuah tables yang terdapat pada sebuah sumber data .

![](/img/bigbuilder/images/image9.png)

Pada setiap list tables terdapat ikon ![](/img/bigbuilder/images/image36.png) yang digunakan untuk melihat lebih detail dari setiap tables yang ada, untuk melihat Column apa saja yang terdapat pada tables tersebut.

Pada detail tables akan ditampilkan lebih detail terkait dengan tables yang dipilih

![](/img/bigbuilder/images/image69.png)

<center>
Gambar 8. Rincian Column
</center>

Akan ditampilkan juga data type dari masing masing column yang terdapat pada tables tersebut.

![](/img/bigbuilder/images/image19.png)

Terdapat fitur search yang digunakan untuk melakukan pencarian terhadap column yang terdapat pada tables .

### Data Virtualization

Ketika akan membuat sebuah data baru yang diperoleh dari melakukan “JOIN” sumber data yang berbeda beda bisa menggunakan “Data Virtualization”

![](/img/bigbuilder/images/image10.png)

<center>
Gambar 9. Halaman Data Virtualization
</center>

Pada halaman awal akan di tampilkan daftar “Virtual Table” yang sudah pernah di bentuk. Tekan ![](/img/bigbuilder/images/image6.png) untuk membuat “Virtual Table” yang baru sehingga bisa mendapatkan insight yang lebih mendalam dari berbagai sumber data yang berbeda dan akan lebih simple dalam melakukan “JOIN” antar data dari sumber data yang berbeda format.

#### Create Virtual Table

Pengguna akan ditampilkan sebuah halaman yang digunakan untuk membuat sebuah “Virtual Table” baru yang bisa digunakan sebagai sumber data baru untuk dicari sebuah insight data nya.

![](/img/bigbuilder/images/image23.png)

<center>
Gambar 10. Halaman Create Virtual Table
</center>

Tekan tombol ![](/img/bigbuilder/images/image35.png) untuk menambahkan table table mana saja yang akan dilakukan “JOIN”sehingga bisa didapatkan sebuah data baru dari sumber data yang berbeda format.

![](/img/bigbuilder/images/image62.png)

<center>
Gambar 11. Pilih Sumber Data
</center>

Pilih pada form “Choose Connection” untuk memilih sebuah database yang akan menjadi sumber dari data yang akan digunakan dalam pembentukan “Virtual Table” tersebut, dan Pilih pada form “Choose Server” untuk memilih sebuah server dimana data yang akan kita gunakan tersimpan di server tersebut.

![](/img/bigbuilder/images/image45.png)

Checklist table mana saja yang akan digunakan , bisa memilih lebih dari satu tabel, untuk dicari sebuah insight data baru .Kemudian tekan tombol ![](/img/bigbuilder/images/image58.png) ketika selesai memilih tabel yang akan digunakan.

![](/img/bigbuilder/images/image22.png)

<center>
Gambar 13. Tampilan Informasi Tiap Table dan Column
</center>

Setelah muncul halaman seperti ini, terlihat berbagai table dan column beserta data type dari yang kita pilih pada tahap sebelumnya, selanjutnya kita hubungkan dari berbagai macam tabel tersebut, column mana yang akan menjadi “key” sehingga ketiga tabel tersebut bisa menjadi satu data.

![](/img/bigbuilder/images/image44.png)

<center>
Gambar 14. Memilih “key” untuk Menyatukan Data
</center>

Kemudian kita pilih column mana saja yang akan dijadikan sebagai “Virtual table” (data baru) dari ketiga table yang sudah digabungkan dengan melakukan “JOIN” . Selanjutnya tekan tombol “Create Table Virtual”, maka kita akan bisa melihat data baru yang dibentuk dari penggabungan ketiga table yang berbeda format dan berbeda sumber data nya.

![](/img/bigbuilder/images/image20.png)

<center>
Gambar 15. Tampilan Data Baru
</center>

Dengan menggunakan Data Virtualization kita akan lebih mudah dalam melakukan penggabungan data yang berbeda format dan berbeda source database.

## Dashboard Builder

Memungkinkan pengguna untuk melakukan visualisasi terhadap sumber data yang akan digunakan, dalam melakukan visualisasi seperti menampilkan data berupa chart sesuai dengan keinginan dan kebutuhan dengan mudah.

### Portlet

Portlet merupakan bagian paling kecil dari sebuah dashboard.

![](/img/bigbuilder/images/image81.png)

<center>
Gambar 16. Daftar Visualisasi Portlet
</center>

Berisi list data yang sudah berhasil divisualisasikan dalam bentuk bar chart, pie chart, line chart, table, dll. dengan berbagai menu tombol yang bisa dipilih , terdapat berbagai macam simbol yang menggambarkan dari setiap Portlet yang sudah dibuat :

![](/img/bigbuilder/images/image34.png) Portlet berjenis editor dengan Bar Chart

![](/img/bigbuilder/images/image5.png) Portlet berjenis editor dengan Line Chart

![](/img/bigbuilder/images/image13.png) Portlet berjenis editor dengan Area Chart

![](/img/bigbuilder/images/image1.png) Portlet berjenis editor dengan Pie Chart

![](/img/bigbuilder/images/image28.png) Portlet berjenis editor dengan Datatable

![](/img/bigbuilder/images/image55.png) Portlet berjenis editor dengan Progress Bar

![](/img/bigbuilder/images/image84.png) Portlet berjenis editor dengan Number

![](/img/bigbuilder/images/image53.png) Portlet dibuat dari BigQuery

![](/img/bigbuilder/images/image103.png) Portlet dibuat dari Custom View

Terdapat bermacam jenis portlet yang bisa dibuat sehingga membuat pengguna bisa lebih fleksibel dan lebih mudah ketika membuat sebuah portlet yang sesuai keinginan.

Dalam memudahkan pengguna ketika akan mencari portlet bisa menggunakan fitur “Search”

![](/img/bigbuilder/images/image4.png)

Pada setiap portlet akan disediakan dua tombol action ![](/img/bigbuilder/images/image113.png) yang berguna untuk melakukan edit pada portlet yang sudah pernah dibuat, dan juga akan menghapus portlet yang sudah tidak digunakan.

![](/img/bigbuilder/images/image75.png)

Tekan tombol ![](/img/bigbuilder/images/image104.png) untuk membuat sebuah portlet baru .

#### Membuat Portlet

Pengguna akan disediakan sebuah modal pop up yang berisi sebuah form ketika akan membuat sebuah portlet

![](/img/bigbuilder/images/image108.png)

<center>
Gambar 17. Formulir Create New Portlet
</center>

Tulis nama portlet sesuai dengan chart atau portlet yang akan dibuat, kemudian ada Title sebagai Nama yang akan ditampilkan pada sebuah page , kemudian ada pilihan Type, Type portlet apa yang akan kita buat:

- BigQuery : Sebuah fitur yang digunakan untuk mempermudah dalam melakukan integrasi chart/portlet yang berasal dari BigQuery dengan BigBuilder.
- Editor : Pengguna akan diberi keleluasaan dalam membuat sebuah portlet dari memilih sumber data sendiri kemudian visualisasi apa yang digunakan dan juga bagaimana data itu akan ditampilkan dengan lebih mudah
- Custom View : Fitur ini digunakan untuk pengguna advance sehingga bisa melakukan kustomisasi dengan lebih leluasa lagi dan UI yang bisa disesuaikan dengan keinginan pengguna

##### BigQuery

Disediakan form yang digunakan untuk mendaftarkan konfigurasi dari BigQuery yang sudah dipublish, dengan informasi seperti Host, Secret Key, Type (Question/Dashboard), id Question

![](/img/bigbuilder/images/image38.png)

<center>
Gambar 18. Tampilan Demo BigQuery
</center>

##### Editor

Disediakan berbagai macam kustomisasi dalam pembuatan sebuah portlet, yang memungkinkan pengguna membuat portlet sesuai dengan keinginan dan menggunakan sumber data yang sudah didaftarkan sebelumnya.

![](/img/bigbuilder/images/image110.png)

<center>
Gambar 19. Tampilan Editor
</center>

Tekan tombol ![](/img/bigbuilder/images/image88.png) untuk melakukan konfigurasi terhadap portlet yang akan dibuat oleh pengguna, disediakan berbagai macam form yang bisa dilengkapi.

![](/img/bigbuilder/images/image21.png)

<center>
Gambar 20. Pilih Datasource
</center>

Pilih datasource yang akan digunakan dalam membuat portlet tersebut, list datasource ini berasal dari database database yang sudah didaftarkan sebelumnya pada menu Connection dan juga “Virtual table” yang dibuat pada Data Virtualization.

![](/img/bigbuilder/images/image26.png)

<center>
Gambar 21. Setting Pengaturan Portlet
</center>

Setelah memilih data source yang digunakan, akan muncul berbagai form seperti:

- Filter : untuk memfilter data di level portlet
- Dimension : untuk memilih column/field yang berisi informasi kualitatif dan kategoris sebagai dimensi
- Measure : untuk memilih column/field merupakan variabel yang bisa dilakukan perhitungan dari satu atau lebih dimensi
- Sort : untuk melakukan penyortiran data di level portlet.

Disediakan juga berbagai macam chart yang bisa digunakan dalam pembuatan portlet tersebut:

- Table
- Number
- Progress
- Line
- Area
- Bar
- Pie

Tekan ![](/img/bigbuilder/images/image50.png) untuk melakukan perubahan tambahan berupa visualisasi tambahan atau warna dari portlet

![](/img/bigbuilder/images/image82.png)

<center>
Gambar 22. Pengaturan Line.
</center>

Tekan tombol ![](/img/bigbuilder/images/image51.png) untuk melakukan sharing atau embedding portlet yang sudah dibuat ke platform lain , dan bisa dibagikan dengan mudah.

![](/img/bigbuilder/images/image86.png)

<center>
Gambar 23. Pilihan Menu Lain
</center>

Tekan ![](/img/bigbuilder/images/image3.png) untuk melihat menu lain yang bisa dipilih seperti

- Revision History : Untuk melihat setiap perubahan yang dilakukan pada portlet tersebut
- Archive : Untuk melakukan arsip terhadap portlet yang tidak digunakan tetapi tidak ingin di hapus

##### Custom View

Memungkinkan pengguna untuk melakukan pembuatan portlet dengan lebih leluasa, karena dilakukan dengan menggunakan “kode program”

![](/img/bigbuilder/images/image79.png)

<center>
Gambar 24  Tampilan Custom View
</center>

Tekan ![](/img/bigbuilder/images/image17.png) untuk melakukan pemrograman terhadap Portlet yang akan dibuat sesuai dengan keinginan

![](/img/bigbuilder/images/image97.png)

<center>
Gambar 25. Pemrograman Portlet
</center>

Disediakan berbagai macam editor yang bisa digunakan dalam melakukan pembuatan portlet dengan custom view tersebut, terdapat

- Editor Html : untuk melakukan kode program untuk file html
- Editor CSS : untuk melakukan kode program untuk file css
- Editor Javascript : untuk melakukan kode program untuk file javascript

![](/img/bigbuilder/images/image33.png)

<center>
Gambar 26. Third Party yang Tersedia
</center>

Disediakan juga berbagai macam third party yang bisa digunakan dalam pembuatan portlet tersebut.

#### Edit Portlet

Ketika user sudah membuat sebuah portlet akan tetapi perlu dilakukan perubahan lagi pada portlet tersebut , pengguna bisa melakukan edit portlet

![](/img/bigbuilder/images/image83.png)

<center>
Gambar 27. Tampilan Edit Portlet
</center>

### Page

Setelah membuat sebuah portlet, langkah selanjutnya yaitu menyusun berbagai macam portlet yang sudah dibuat dari berbagai macam cara ke dalam satu Page/ Dashboard dengan mudah

![](/img/bigbuilder/images/image87.png)

<center>
Gambar 28. Daftar Halaman yang Pernah Dibuat
</center>

Pada bagian awal page akan ditampilkan list Pages yang sudah pernah dibuat, dengan berbagai keterangan seperti nama, tanggal pembuatan, terakhir diubah, dan berbagai tombol aksi yang bisa digunakan

![](/img/bigbuilder/images/image4.png)

Dalam memudahkan pengguna ketika akan mencari page bisa menggunakan fitur “Search” .

![](/img/bigbuilder/images/image70.png)

Pada setiap page akan disediakan tiga tombol action yang berguna untuk melakukan edit pada page yang sudah pernah dibuat, ada juga yang berguna untuk melihat page yang sudah pernah dilihat dan juga akan menghapus page yang sudah tidak digunakan.

Tekan tombol ![](/img/bigbuilder/images/image85.png) untuk membuat sebuah page baru .

#### Create New Page

Disediakan form yang bisa diisi ketika akan membuat sebuah Page seperti Nama, Title, Type. Terdapat 2 macam Type page yang bisa dibuat:

- Editor
- Custom View

![](/img/bigbuilder/images/image16.png)

<center>
Gambar 29. Tampilan Menu Create New Page
</center>

Ketika akan membuat sebuah page, pengguna akan ditampilkan sebuah canvas kosong yang bisa digunakan dalam pembuatan sebuah page, terdapat tombol yang akan mendukung dalam pembuatan sebuah pages.

![](/img/bigbuilder/images/image14.png)

<center>
Gambar 30. Halaman Kanvas
</center>

Tekan ![](/img/bigbuilder/images/image91.png) untuk mengubah tampilan menjadi mode “edit” sehingga memungkinkan pengguna melakukan kustomisasi beragam pada page yang akan dibuat

![](/img/bigbuilder/images/image40.png)

<center>
Gambar 31. Edit Mode 
</center>

Tekan pada ![](/img/bigbuilder/images/image2.png) untuk melihat list portlet yang bisa digunakan dalam pembuatan page.

![](/img/bigbuilder/images/image42.png)

<center>
Gambar 32. Daftar Portlet yang Bisa Digunakan
</center>

Pengguna tinggal melakukan “drag & drop” pada portlet mana yang akan dimasukan pada page yang akan dibuat.

![](/img/bigbuilder/images/image90.png)

<center>
Gambar 33. Tampilan Canvas
</center>

Drop pada kanvas yang sudah disediakan yang menggunakan background grid

![](/img/bigbuilder/images/image111.png)

<center>
Gambar 34. Tampilan Setelah Memasang Template Portlet
</center>

Pengguna bisa melakukan pengaturan terhadap portlet yang sudah diletakan pada kanvas seperti :

- ![](/img/bigbuilder/images/image29.png) melakukan sizing terhadap portlet yang sudah dimasukan.
- ![](/img/bigbuilder/images/image54.png) Mengatur posisi portlet sesuai dengan keinginan dengan melakukan “drag & drop”.
- Melakukan beberapa perubahan konfigurasi pada portlet dan akan diarahkan ke halaman portlet editor.
- Melakukan perubahan portlet yang dipilih.
- Melakukan duplikat pada portlet yang sudah dibuat.
- Melakukan remove portlet yang tidak sesuai pada page yang akan dibuat.

#### Edit Page

Ketika user sudah membuat sebuah page akan tetapi perlu dilakukan perubahan lagi pada page tersebut , pengguna bisa melakukan edit page.

![](/img/bigbuilder/images/image96.png)

<center>
Gambar 35. Halaman Edit
</center>

#### View Page

Ketika user sudah membuat sebuah page dan ingin melihat page yang telah dibuat, pengguna bisa melakukan view page.

![](/img/bigbuilder/images/image76.png)

<center>
Gambar 36. Halaman View
</center>

## Mapping Parser

Memungkinkan pengguna untuk merubah data dari xlsx, pdf, dan docx menjadi sebuah data.

### Template

Setelah memiliki data xlsx, pdf, dan docs langkah selanjutnya yaitu merubah data file tersebut ke data table.

![](/img/bigbuilder/images/image101.png)

<center>
Gambar 37. Daftar Template yang Pernah Dibuat
</center>

Pada bagian awal page akan ditampilkan list Template yang sudah pernah dibuat, dengan berbagai keterangan seperti template nama, terakhir diubah, user yang membuat, type template dan berbagai tombol aksi yang bisa digunakan:

![](/img/bigbuilder/images/image4.png)

Dalam memudahkan pengguna ketika akan mencari template bisa menggunakan fitur “Search” .

![](/img/bigbuilder/images/image106.png)

Pada setiap template akan disediakan dua tombol action yang berguna untuk melakukan edit pada template yang sudah pernah dibuat, dan juga akan menghapus template yang sudah tidak digunakan.

![](/img/bigbuilder/images/image73.png)

Tekan tombol ![](/img/bigbuilder/images/image73.png) untuk membuat sebuah template baru maka akan muncul dua pilihan yaitu membuat template dengan type table extraction atau ocr.

#### Create Template

Disediakan form wizard yang bisa diisi ketika akan membuat sebuah Template. Dalam form wizard ini memiliki 3 tahap yaitu Upload sample file, Set area and column, dan Download result sample.

##### Upload Berkas Sampel

![](/img/bigbuilder/images/image41.png)

<center>
Gambar 38. Upload File Sampel
</center>

Pada tahap ini pengguna memilih file yang ingin diubah menjadi data table. Jika sudah tarik file atau klik pada column ini

![](/img/bigbuilder/images/image15.png)

<center>
Gambar 39. Kolom Upload File
</center>

Apabila file sesuai dengan syarat maka akan muncul tampilan seperti ini:

![](/img/bigbuilder/images/image48.png)

<center>
Gambar 40. File Sesuai dan dalam Proses Upload
</center>

Apabila file tidak sesuai dengan yang syarat maka akan muncul tampilan sebagai berikut:

![](/img/bigbuilder/images/image25.png)

<center>
Gambar 41. File Tidak Sesuai dan Proses Upload Gagal
</center>

Apabila file sudah sesuai dengan syarat maka klik tombol ![](/img/bigbuilder/images/image57.png) untuk melanjutkan ke tahap berikutnya.

##### Atur Area dan Kolom

Pada tahap ini data dari file pengguna masukan akan muncul tampilan sebagai berikut

![](/img/bigbuilder/images/image8.png)

<center>
Gambar 42. Mengatur Area dan Kolom
</center>

Ketika sudah muncul data dari file yang dipilih, pilih column dan row yang ingin dimasukan ke dalam data table dengan cara memilih dengan kursor atau dengan menggunakan form.

![](/img/bigbuilder/images/image63.png)

<center>
Gambar 43. Kolom untuk Memasukkan Input
</center>

Ketika sudah memilih column atau row yang ingin ditampilkan maka akan muncul tampilan sebagai berikut:

![](/img/bigbuilder/images/image99.png)

<center>
Gambar 44. Masukan Nama Kolom
</center>

Ketika sudah memilih column dan row selanjutnya masukan nama kolom sesuai dengan keinginan pengguna. Apabila ingin mereset column, row, dan nama column yang sudah ditentukan dapat menggunakan tombol ![](/img/bigbuilder/images/image105.png) maka semua column, row dan nama column yang sudah di setting sebelumnya akan ke reset ke awal.

Di bawah list data terdapat dropdown Advance config yang berisi dua checkbox yaitu checkbox Remove duplicate dan To EOF dan memiliki tampilan sebagai berikut

![](/img/bigbuilder/images/image37.png)

<center>
Gambar 45. Pilihan Pengaturan Lebih Lanjut
</center>

- Remove Duplicate : digunakan untuk menghapus row yang isinya sama
- To EOF : digunakan untuk mengambil semua data table

Setelah selesai lanjutkan dengan mengklik tombol ![](/img/bigbuilder/images/image57.png) dan tombol ![](/img/bigbuilder/images/image64.png) untuk kembali ke halaman sebelumnya.

##### Download Hasil Sample

![](/img/bigbuilder/images/image78.png)

<center>
Gambar 46. Tampilan Halaman Download Result Sample
</center>

Pada tahap ini pengguna memasukan nama template yang akan di save dan ketika sudah mengisi form template name selanjutnya menekan tombol ![](/img/bigbuilder/images/image67.png) untuk menyimpan data table yang telah dibuat dan menggunakan tombol ![](/img/bigbuilder/images/image64.png) untuk kembali ke tahapan sebelumnya.

#### Edit Template

Ketika user sudah membuat sebuah template akan tetapi perlu dilakukan perubahan lagi pada template tersebut , pengguna bisa melakukan edit template.

![](/img/bigbuilder/images/image47.png)

<center>
Gambar 47. Tampilan EdIt Template
</center>

### Mapping Pd-Parser-Server

Setelah membuat template langkah selanjutnya yaitu mendaftarkan template ke dalam connection dan database.

![](/img/bigbuilder/images/image77.png)

<center>
Gambar 48. Tampilan Mapping Pd-Parser-Server
</center>

Pada bagian awal page akan ditampilkan list Mapping Pd-Parser-Server yang sudah dibuat, dengan berbagai keterangan seperti server, absolute path, template name, target dan berbagai tombol aksi yang bisa digunakan:

![](/img/bigbuilder/images/image109.png)

Pada setiap Mapping Pd-Parser-Server akan disediakan satu tombol action yang berguna untuk melakukan edit pada Mapping Pd-Parser-Server yang sudah pernah dibuat.

Tekan tombol ![](/img/bigbuilder/images/image52.png) untuk membuat sebuah Mapping Pd-Parser-Server baru.

#### Create Mapping Parser

Disediakan form wizard yang bisa diisi ketika akan membuat sebuah Mapping Parser. Dalam form wizard ini memiliki 4 tahap yaitu Server Connection, Directory Path, Template dan Database.

##### Server Connection

![](/img/bigbuilder/images/image112.png)

<center>
Gambar 49. Halaman Server Connection
</center>

Pada tahap ini pengguna memilih template yang sudah dibuat ingin didaftarkan ke dalam connection mana. apabila kita belum mendaftarkan connection kita dapat mengklik tombol ![](/img/bigbuilder/images/image65.png). Ketika mengklik tombol ini maka tampilan yang di atas akan berubah dengan tampilan sebagai berikut:

![](/img/bigbuilder/images/image31.png)

<center>
Gambar 50. Tampilan Add Server Connection
</center>

Pada halaman ini kita mengisi form untuk mendaftarkan connection yang belum didaftarkan, dengan form sebagai berikut:

- connection
- server
- port
- username
- password

Apabila kita belum mendaftar server kita dapat mendaftarkan server yang baru dengan mengklik tombol ![](/img/bigbuilder/images/image94.png) ,maka akan muncul form sebagai berikut

![](/img/bigbuilder/images/image102.png)

<center>
Gambar 51. Formulir Kustomisasi Penambahan Server Baru
</center>

Apabila pengguna tidak jadi menambahkan server baru dapat mengklik tombol ![](/img/bigbuilder/images/image39.png) untuk kembali seperti awal dan apabila pengguna tidak jadi menambahkan connection baru dapat mengklik tombol ![](/img/bigbuilder/images/image30.png) untuk kembali ke halaman connection yang awal. Ketika sudah memilih connection apabila pengguna ingin melanjutkan ke tahap berikutnya pengguna dapat mengklik tombol ini ![](/img/bigbuilder/images/image59.png) dan tombol ![](/img/bigbuilder/images/image74.png) untuk kembali ke halaman list.

##### Directory Path

![](/img/bigbuilder/images/image7.png)

<center>
Gambar 52. Tampilan Pengaturan Directory Path
</center>

Pada tahap ini pengguna memasukan nama directory dimana ingin menyimpan file yang sudah diubah menjadi template dan memasukan file sesuai file yang sudah didaftarkan di template. Ketika sudah mengisi form dan memasukan file apabila pengguna ingin melanjutkan ke tahap berikutnya pengguna dapat mengklik tombol ini ![](/img/bigbuilder/images/image59.png),tombol ![](/img/bigbuilder/images/image43.png) untuk kembali ke tahap sebelumnya dan tombol ![](/img/bigbuilder/images/image74.png) untuk kembali ke halaman list.

##### Template

![](/img/bigbuilder/images/image32.png)

<center>
Gambar 53. Tampilan Pengaturan Template
</center>

Pada tahap ini pengguna memilih template yang sudah didaftarkan atau memasukan baru template. Apabila ingin menambahkan template baru pilih tombol select dengan pilihan “add template” maka tampilan akan berubah sebagai berikut:

![](/img/bigbuilder/images/image46.png)

<center>
Gambar 54. Add Template
</center>

Pada tampilan ini kita bisa memilih icon seperti

- ![](/img/bigbuilder/images/image93.png) untuk menambahkan file jpg
- ![](/img/bigbuilder/images/image11.png) untuk menambahkan file xls
- ![](/img/bigbuilder/images/image27.png) untuk menambahkan file pdf
- ![](/img/bigbuilder/images/image100.png) untuk menambahkan file docs
- ![](/img/bigbuilder/images/image61.png) untuk menambahkan file ppt

Ketika mengklik icon diatas maka akan membuka tab baru dan membuka halaman template. ketika sudah menambahkan template baru pengguna dapat mengklik tombol untuk ![](/img/bigbuilder/images/image80.png) mengupdate select template. Ketika sudah refresh pilih template yang ingin digunakan pada tombol select. Ketika sudah memilih template apabila pengguna ingin melanjutkan ke tahap berikutnya pengguna dapat mengklik tombol ini ![](/img/bigbuilder/images/image59.png) ,tombol ![](/img/bigbuilder/images/image43.png) untuk kembali ke tahap sebelumnya dan tombol ![](/img/bigbuilder/images/image74.png) untuk kembali ke halaman list.

##### Database

![](/img/bigbuilder/images/image114.png)

<center>
Gambar 55. Pengaturan Database
</center>

Pada tahap ini pengguna mengisi nama tabel dan memilih database untuk menyimpan data table dari template. Apabila belum memiliki database pengguna dapat mengklik tombol ![](/img/bigbuilder/images/image60.png) maka tampilan akan berubah sebagai berikut

![](/img/bigbuilder/images/image56.png)

<center>
Gambar 56. Formulir Pendaftaran Database Baru
</center>

Pada halaman ini kita mengisi form untuk mendaftarkan database yang belum didaftarkan, dengan form sebagai berikut

- Adapter
- Connection Name
- Host
- Port
- Database
- Username
- Password

Apabila pengguna tidak jadi menambahkan database baru dapat mengklik tombol ![](/img/bigbuilder/images/image30.png) untuk kembali ke halaman database yang awal. Ketika sudah memilih connection, mengisi directory path, memilih template, mengisi table name dan memilih database apabila pengguna ingin menyimpan pengguna dapat mengklik tombol ini ![](/img/bigbuilder/images/image49.png) ,tombol ![](/img/bigbuilder/images/image43.png) untuk kembali ke tahap sebelumnya dan tombol ![](/img/bigbuilder/images/image74.png) untuk kembali ke halaman list.

#### Edit Mapping Parser

Ketika user sudah membuat sebuah mapping parser akan tetapi perlu dilakukan perubahan lagi pada mapping parser tersebut , pengguna bisa melakukan edit mapping parser.

![](/img/bigbuilder/images/image95.png)

<center>
Gambar 57. Pengaturan Source dan Target
</center>
