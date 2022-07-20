---
sidebar_position: 1
---

# About BigSpider

## BIGSPIDER

### Operasional BigSpider

#### Login

1. Akses link/IP address http://172.30.101.63/bigspider/

2. Masukkan username dan password beserta captcha kemudian klik sign in.

![](/img/bigspider/images/image14.png)

<center>
Gambar 1.1
</center>

Pilih Menu Big Spider

![](/img/bigspider/images/image22.png)

#### Media

![](/img/bigspider/images/image18.png)

#### Crawl

Menu crawl menampilkan list media yang telah dilakukan pengaturan untuk pengambilan data public (crawling).

![](/img/bigspider/images/image8.png)

#### Taxonomy

![](/img/bigspider/images/image17.png)

### Menu Media

#### Penambahan Media

1. Ketika meng-input media baru sebagai source pangambilan data, langkah pertama tentunya harus mengetahui alamat tujuan (url) media tersebut. Klik button add pada sisi kanan dan mengisi requirement, lalu klik button save untuk menyimpan data media yang akan ditambahkan.

![](/img/bigspider/images/image28.png)

2. Pada requirement isian, ada beberapa data yang akan diisi sebagai berikut :

- Media Name
- Media Short Name
- Media Url
- Media Type
- Jenis
- Language
- Update Routine
- Logo

3. Tampilan pengaturan media existing

![](/img/bigspider/images/image30.png)

4. Media type, ada 4 pilihan pengaturan yaitu national, local, internasional dan targetted website.

![](/img/bigspider/images/image29.png)

5. Pada pengaturan jenis, akan mengelompokkan media yang akan ditambahkan masuk ke dalam kategori pada BigSocial yaitu news, forums dan blogs.

![](/img/bigspider/images/image26.png)

6. Pengaturan language sama halnya dengan pemilihan bahasa pada umumnya. Bahasa yang akan di crawling oleh BigSpider terhadap media yang akan ditambahkan.

![](/img/bigspider/images/image25.png)

7. Ketika melakukan pengambilan data (crawling), pengaturan waktu pengambilan data dapat diatur dengan menyesuaikan kebutuhan.

![](/img/bigspider/images/image20.png)

8. Melengkapi pengaturan penambahan media, dapat dilakukan dengan menambahkan logo dari media terkait.

![](/img/bigspider/images/image11.png)

#### Searching

Fitur searching dapat digunakan untuk pencarian media.

![](/img/bigspider/images/image12.png)

#### Actions

Manajemen list media BigSpider, ada dua fitur yang dapat digunakan dalam pengaturan media yaitu melakukan edit media dan menghapus list media existing.

![](/img/bigspider/images/image1.png)

### Menu Crawl

#### Penambahan List Crawl

1. Ketika melakukan crawling, ada beberapa pengaturan yang harus dilakukan yang dimana harus membutuhkan pengetahuan terkait HTML dan CSS. Klik button add pada sisi kanan dan mengisi requirement isian, lalu klik button submit untuk menyimpan pengaturan.

![](/img/bigspider/images/image19.png)

2. Beberapa isian data yang harus dilengkapi, sebagai berikut :

- Url index, yang harus dilengkapi yaitu alamat website dari media terkait (url)
- Tag index dilakukan dengan membaca code dari url media terkait (inspecting)
- Server crawler, alamat IP server yang digunakan untuk melakukan crawling
- Nama Media, nama media yang akan di crawling
- Status, untuk mengaktifkan pengaturan yang akan ditambahkan
- Batas Baris, parameter untuk mengambil jumlah berita

Berikut ini, contoh pengaturan media yang akan di crawling.

![](/img/bigspider/images/image2.png)

3. Menampilkan data agar lebih detail perlu mengisi requirement isian data yang berada pada menu tag dengan menyesuaikan code pada halaman website media terkait.

- Judul, untuk menampilkan judul berita/post dari media.
- Penulis, untuk menampilkan penulis berita/post.
- Topik, untuk menampilkan topik berita/post.
- Gambar/icon, untuk menampilkan gambar berita/post.
- Isi, untuk menampilkan konten berita/post.
- Format tanggal, menentukan format penulisan tanggal kemudian disesuaikan dengan penulisan yang ada pada BigSpider.
- Tanggal, untuk menampilkan keterangan tanggal yang ada pada berita/post.

Berikut ini, contoh pengaturan yang telah dilakukan.

![](/img/bigspider/images/image21.png)

![](/img/bigspider/images/image32.png)

4. Setelah requirement isian data telah diisi, untuk memastikan pengaturan yang telah berjalan dengan benar dapat dilakukan pengujian tes hasil. Klik button tes yang berada pada sisi bawah, maka secara otomatis sistem akan mengambil data sesuai dengan pengaturan.

![](/img/bigspider/images/image27.png)

Berikut ini, hasil tes dari pengaturan yang telah dilakukan.

![](/img/bigspider/images/image31.png)

![](/img/bigspider/images/image24.png)

#### Searching

Fitur searching dapat digunakan untuk pencarian media

![](/img/bigspider/images/image10.png)

#### Actions

Manajemen list media BigSpider, ada dua fitur yang dapat digunakan dalam pengaturan media yaitu melakukan Edit Media dan menghapus list Media existing.

![](/img/bigspider/images/image1.png)

### Menu Taxonomy

#### Penambahan Keyword

1. Pengambilan data yang dilakukan oleh BigSpider berdasarkan topik yang telah ditentukan. Ketika menambahkan topik dalam pengambilan data klik button new keyword yang berada pada sisi kanan atas.

![](/img/bigspider/images/image3.png)

2. Isi requirement, lalu klik button submit untuk menyimpan pengaturan. Requirement isian data yang harus dilengkapi, sebagai berikut :

- Multiple input, jika ingin langsung menambahkan beberapa topik/keyword secara langsung dengan cara menggeser/mengklik indikatornya.
- Keyword, nama topik yang akan diambil datanya.
- Type, ada dua pilihan yaitu keyword dan account. Selain mengambil data berdasarkan keyword/topik bisa juga dengan menambahkan username account yang akan diambil datanya.
- Input to, menentukan sumber pengambilan data dari social media.

Berikut ini, contoh pengaturan yang telah dilakukan menggunakan type keyword, type account dan multiple input.

- Type Keyword

![](/img/bigspider/images/image15.png)

- Type Account

![](/img/bigspider/images/image9.png)

- Multiple Input

![](/img/bigspider/images/image13.png)

#### Search dan Filter

Fitur search dan filter dapat digunakan untuk pencarian topic/keyword.

![](/img/bigspider/images/image3.png)

#### Actions

Dalam manajemen topic/keyword, ada dua fitur yang dapat digunakan dalam pengaturan yaitu melakukan edit topic/keyword dan menghapus list topic/keyword existing.

![](/img/bigspider/images/image1.png)

### Refinement Features

#### Pagination

1. Melihat tampilan data dengan beralih ke page selanjutnya. Berada pada sisi kiri bagian bawah.

![](/img/bigspider/images/image7.png)

2. Tampilan pagination

![](/img/bigspider/images/image4.png)

#### Auto Scroll Up

1. Scrolling secara otomatis ke posisi atas dengan mengklik button arrow yang berada pada sisi kanan bagian bawah.

![](/img/bigspider/images/image5.png)

2. Tampilan auto scroll up

![](/img/bigspider/images/image16.png)

#### Merubah Displaying

1. Menampilkan jumlah data yang akan ditampilkan dengan mengklik button angka displaying.

![](/img/bigspider/images/image23.png)

2. Tampilan displaying

![](/img/bigspider/images/image6.png)
