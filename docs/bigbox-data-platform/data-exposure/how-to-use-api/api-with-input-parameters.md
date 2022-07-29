---
sidebar_position: 1
---

# API With Input Parameters

## API with Input Parameters

If the created API accepts parameter input, the parameters can be passed into the URL to be a GET param query. For example, if the SQL query used to create the API is

```
  SELECT \*

  FROM nama_tabel
  WHERE kolom= :masukan
```

API menerima masukan parameter bernama “masukan”. Pemanggilan API dapat dilakukan dengan menambahkan query param dengan awalan “xin\_” menjadi “xin_masukan”, seperti berikut:

```
  {{BASE\_URL}}/bigenvelope/public/api/id/{{API\_ID}}?xin_masukan={{nilai masukan}}
```
