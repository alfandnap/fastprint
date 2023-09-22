**Fastprint**
----
**Endpoints**

List of Available Endpoints:

-GET /produks
-GET /produks/:id
-POST /produks
-PUT /produks/:id
-DELETE /products/:id
-GET /categories
-GET /statuses



**get all produk**
----
  fetch all data products.

***URL**

  https://localhost:3000/produks

***Method:**

  `GET`
  
***URL Params**

   **Required:**
 
   `None`

***Data Params**

  `None`

***Success Response:**

  ***Code:** 200 <br />
    **Content:** `{ get all products data}`


**get product by id**
----
  get a single specific product data by id.

***URL**

  https://localhost:3000/produks/:id

***Method:**

  `GET`
  
***URL Params**

   **Required:**
 
   `params: id`

***Data Params**

  `None`

***Success Response:**

  ***Code:** 200 <br/>
    **Content:** `{ a single product data }`


**create a new product**
----
  create a new product data.

***URL**

  https://localhost:3000/produks

***Method:**

  `POST`
  
***URL Params**

   **Required:**
 
   `None`

***Data Params**

  `nama_produk: string`
  `harga: integer`
  `kategori_id: integer`
  `status_id: integer`

***Success Response:**

  ***Code:** 201 <br />
    **Content:** `{ message: ${newProduct.nama_produk} success to update }`


**edit product data**
----
  edit a single product data.

***URL**

  https://localhost:3000/produks

***Method:**

  `PUT`
  
***URL Params**

   **Required:**
 
   `params: id`

***Data Params**

  `nama_produk: string`
  `harga: integer`
  `kategori_id: integer`
  `status_id: integer`

***Success Response:**

  ***Code:** 200 <br />
    **Content:** `{ message: success to update }`

  ***Code:** 404 <br />
    **Content:** `{ message: NOTFOUND }`


**delete product**
----
  deleting a single product data.

***URL**

  https://localhost:3000/produks

***Method:**

  `DELETE`
  
***URL Params**

   **Required:**
 
   `params: id`

***Data Params**

  `None`

***Success Response:**

  ***Code:** 200 <br />
    **Content:** `{ message: ${produk.nama_produk} success to delete }`



**get all categories**
----
  fetch all data categories.

***URL**

  https://localhost:3000/categories

***Method:**

  `GET`
  
***URL Params**

   **Required:**
 
   `None`

***Data Params**

  `None`

***Success Response:**

  ***Code:** 200 <br />
    **Content:** `{ get all categories data}`


**get all statuses**
----
  fetch all data statuses.

***URL**

  https://localhost:3000/statuses

***Method:**

  `GET`
  
***URL Params**

   **Required:**
 
   `None`

***Data Params**

  `None`

***Success Response:**

  ***Code:** 200 <br />
    **Content:** `{ get all statuses data}`

