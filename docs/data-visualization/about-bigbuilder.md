---
sidebar_position: 1
---

# About BigBuilder

Data Visualization as a Service

## 1. Introduction

Dokumen User Guide BigBuilder ini berisi semua informasi penting bagi pengguna sehingga dapat memudahkan pengguna dalam menggunakan BigBuilder .

### 1.1 Overview BigBuilder

Bigbuilder adalah sebuah Data Visualization as a Service yang membantu pengguna dalam menghubungkan ke berbagai sumber data dalam format yang sesuai dan melakukan visualisasi dari data yang dimiliki dengan berbagai macam grafik dan berbagai macam kustomisasi sesuai keinginan pengguna.

![Test](https://lh4.googleusercontent.com/CoQSrD2f5gY2Tuw4KT-3TfLnSYcrFobrt9MjlTS7ck6yjvaJoh7JeZRwTU8M_JTiCYIFUWD6yi-IorhPBPKPlkCHtJy4SOeJ9DfI1jzb6nwpEyaQJEo3yxziY104ZMp3TvsT5La0)

<p style={{textAlign:"center"}}>Gambar 1.1 Tampilan Homepage</p>

Pada bagian Home Page akan menunjukan berbagai macam component

1. Berbagai menu yang bisa dipilih pengguna dalam melakukan pembuatan sebuah page :
   1. Home
   2. Connection
   3. Data
   4. Virtualization
   5. Portlet Page
   6. Extraction
   7. Extraction Mapping
2. Pengguna bisa langsung memulai membuat sebuah visualisasi dari membuat sebuah Portlet terlebih dahulu
3. Pengguna bisa membuat sebuah pages dari berbagai portlet sehingga bisa membuat sebuah visualisasi sesuai keinginan
4. Fitur search yang akan membantu pengguna dalam mencari sebuah page ataupun sebuah portlet.

## 2. Data Builder

Memungkinkan pengguna untuk melakukan eksplorasi terhadap sumber data yang akan digunakan dalam melakukan visualisasi seperti menghubungkan ke sumber data mengubah field type sesuai dengan keinginan, dan menampilkan data yang dihubungkan

### 2.1 Koneksi

Berisi list sumber data yang sudah berhasil dihubungkan dengan berbagai menu yang bisa dipilih

![Koneksi](https://lh3.googleusercontent.com/sCZKHdrJ4_dzHOG5j1VgUJoVtUGx8dHrj_CwKKxlRefjOZVDq16dohsFk7DAlFEQAFSzhP_52ZPTGES6U7uCOiB_0C350Z0JRwM2ogD1cpHiZ9RO3OHE8t9kRFL0YsGsf9K7ebf8)

1. Tombol ![](https://lh5.googleusercontent.com/GeDpit6Ogj45BiuTQZcSrz93_Q8xmRkD4Ttgvr5D3Fbxd9-0RwQl9_j-fo2JgEbipOkDL0SrINPSzE7XtqOdq99cyB5Ga_SaP4-1KRAGuhKG-Kc7BSct3gQ53agtUYyw2bLWH3MS) digunakan untuk menuju ke halaman add connection sehingga pengguna bisa menambahkan sumber data yang diinginkan
2. Pengguna bisa melakukan pencarian berdasarkan nama connection yang sudah didaftarkan Data Virtualization
3. Pengguna bisa melakukan pencarian berdasarkan adapter, host, dbName sesuai dengan connection yang sudah didaftarkan
4. Berisi list connection yang berhasil didaftarkan oleh pengguna sebelumnya
5. Tombol “Edit” digunakan untuk melakukan perubahan konfigurasi terhadap connection yang sudah pernah dibuat
6. Tombol “Hapus” digunakan untuk menghapus connection yang sudah tidak digunakan
7. Tombol “View Table” untuk melakukan eksplorasi terhadap suatu data dari sumber data yang sudah dihubungkan

#### 2.1.1 Add Connection

Pengguna bisa menambahkan berbagai macam sumber data dibagian “Add Connection” sehingga data yang akan dieksplorasi bisa dihubungkan dengan BigBuilder.

![Halaman Add Connection](https://lh4.googleusercontent.com/Huo8SBZ10yA9x9bHCTXCB7Y4DDACl0tmoaP2RGRw9c9n2OZNzDTP-Js3nS4g0l_0W0Aeceu1UD0OYzrjUYjdep9rQXe1Ynd52iEK62CSZ1F5mfpO-iJyp1YJO0Kwz511IKZeIM2S)

Pada halaman ini akan disediakan berbagai macam form yang untuk mendaftarkan sebuah sumber data ke BigBuilder sehingga bisa dihubungkan.

Ada berbagai macam adapter yang bisa digunakan untuk menghubungkan sumber data dengan BigBuilder.

- MySQL
- Oracle
- Pdo_oci
- Pdo_MySQL
- Hive

Setelah semua form terisi sesuai dengan sumber data yang akan dihubungkan, pengguna bisa menekan tombol ![Test Connection](https://lh3.googleusercontent.com/tt4ekjrr1Ci7WkVAYPaX58sV0Fgf1ZEMzTDZ5v5A1Gx3klA8UMMpY9PKvcgapkcb6u6mMSTDw-ekQFvY4ZYzwhwDfKmysNvnoQCuvyZY9xXumpuYTLjoKoic6higL7hW1JNsNjU9) untuk melakukan test koneksi terhadap sumber data yang akan dihubungkan , apakah berhasil atau tidak.

Setelah test koneksi sudah berhasil bisa langsung menekan ![save](https://lh5.googleusercontent.com/-RN8mmn8cyhyQKXp1-zOXGK9M-ISqY5GG8G62mkMXijcLHeB_83719ZHWz79BTdcWRjKDXh61RU8oM2pUZHyrLLYFZqICqM1g4w6xPgLaVbTQaeDahmEVo7L9IhYAUHvofAahYUl) untuk melakukan penyimpanan terhadap sumber data yang sudah didaftarkan.

#### 2.1.2 Edit Connection

Ketika pengguna akan melakukan perubahan terhadap sebuah koneksi yang sudah didaftarkan bisa menggunakan “Edit Connection “.

Pada bagian ini akan disediakan form yang bisa dilakukan perubahan terhadap koneksi tersebut, dan juga disediakan tombol ![Test Connection](https://lh3.googleusercontent.com/tt4ekjrr1Ci7WkVAYPaX58sV0Fgf1ZEMzTDZ5v5A1Gx3klA8UMMpY9PKvcgapkcb6u6mMSTDw-ekQFvY4ZYzwhwDfKmysNvnoQCuvyZY9xXumpuYTLjoKoic6higL7hW1JNsNjU9) ketika ingin melakukan tes terhadap koneksi yang sudah dilakukan perubahan.

![Edit Connection](https://lh4.googleusercontent.com/slNGPk7X-hdp5peik5IopotUUwJb7DFAt8ibL33vADDOUKyvbqhIkysYtJ9e5uBdVH-CYULtoH1BOHEEkWUV-YWUH5AylpsVmwhFX6ZqRGpcBogDrwk5Mu2hSXw2OLPNj5vp_pqr)

Kemudian tekan ![save](https://lh5.googleusercontent.com/-RN8mmn8cyhyQKXp1-zOXGK9M-ISqY5GG8G62mkMXijcLHeB_83719ZHWz79BTdcWRjKDXh61RU8oM2pUZHyrLLYFZqICqM1g4w6xPgLaVbTQaeDahmEVo7L9IhYAUHvofAahYUl) tombol ketika perubahan tersebut sudah selesai dilakukan dan hasil test connection sudah berhasil.

#### 2.1.3 View Tables

Setelah sumber data sudah berhasil dihubungkan , ketika ingin melihat table yang terdapat pada sumber data tersebut bisa menggunakan “View Tables”

![View Table](https://lh6.googleusercontent.com/rlY3V5rLsQ85W0kz_AVOkpX9sC7IdgMCxmUVOzVtonqtZdgHK0mfJmbv8UnvCkDHw40kTiEDkbnN_2WyZcpVEsaWiZFQ5rO0Gf2frAmFFFrwX6pKkjSTQn-a4eGYdNpRa7uV9G8C)

Pada bagian ini akan ditampilkan list tables yang terdapat pada sebuah sumber data yang dipilih

![Search](https://lh3.googleusercontent.com/22eGkF2W4thXAYsD6WA4zBwMfqOepe8GhJAzGvh6lwGO2IT9zeldO3cqWOktbOaRBXExz8jtN4oWfAeqvMbNI8KG4WIKBCZuQQXhQ-Cb6D3Wfqhbhb7Bh29Gdb6Alz4-oOUPRY4X)

Disediakan “Search” yang digunakan untuk melakukan pencarian terhadap sebuah tables yang terdapat pada sebuah sumber data.

<center>

![details](https://lh4.googleusercontent.com/xLUbfY2_t_EJXDlxEk3dzJo9C-hWkbYW23uzZWFG4GVoSoL9_MKubkQ0iNwzAkSrmtV7b5qAiQmF8Ko3qG5afPogtH7IcVSfrcpyoXg1h5Pj_q-GDdYXrUyvZQI8NmApjLRzjWKO)

</center>

Pada setiap list tables terdapat ikon <span> ![details2](https://lh4.googleusercontent.com/_0W1euAd2zHgZ7Qae8XsRMlnUUXU6cIevIoiTSG2k9GL5ubYm6zceKhCTX5OsbJls9wwY_TERf97JGlxN4V2U-3BJ_rZ6hK4ganvWGhUr7LOmGjcnE8FwywEBTrKhOZ_4AaeJV1u) </span> yang digunakan untuk melihat lebih detail dari setiap tables yang ada, untuk melihat Column apa saja yang terdapat pada tables tersebut. Pada detail tables akan ditampilkan lebih detail terkait dengan tables yang dipilih
