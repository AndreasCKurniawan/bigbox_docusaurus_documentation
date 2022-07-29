---
sidebar_position: 2
---

# Creating API From Data Source

## Creating API from Data Sources

BigEnvelope allows admins to be able to create APIs from data sources in the form of databases without having to write code.

### Creating Connection to Data Source

Admins must first ensure that the database connection is registered before they can create an API. This can be done on the Connection page

![](/img/bigenvelope/images/en/image4.png)

Image 8. Connection Page

If the connection to the database is already registered, proceed to step 2.1.2. If not, register a connection to the database by pressing the "Add New" button.

![](/img/bigenvelope/images/en/image5.png)

Image 9. Create New Connection Page

You will be presented with a connection form to the database. Please enter the connection name, adapter, host, port, database name, username, and password. Then turn on the connection status to the "ON" position.

To test that BigEnvelope can connect with the given input, press the “Test Connection” button. When filling is complete, press the "Submit" button.

### API Settings

To create a new API, go to the API menu and then press the "Add new API" button.

![](/img/bigenvelope/images/en/image17.png)

Image 10. Add New API

Fill in the form by inputting the API name, and the desired cache time (default is no cache). Leave the API type in the “Common SQL” position.

On the Connection form, select the connection to the desired database.

![](/img/bigenvelope/images/en/image18.png)

Image 11. Select Database

To facilitate query creation without writing code, BigEnvelope provides a UI in the form of a Query Builder that allows admins to create queries based on table name input, join, select, where, etc.

![](/img/bigenvelope/images/en/image8.png)

Image 12. Create Query

BigEnvelope also facilitates manual SQL query writing. The query can also accept parameter input by calling the ":" character before the parameter name. This parameter will be the input parameter of the API that will be created.

To test the query, the admin can press the "Test API" button. When finished, the admin can press the "Save" button.

### Creating Consumer Profile

To create a consumer profile that will use the API, the admin can do so on the Consumer page and press the "Add API User" button.

![](/img/bigenvelope/images/en/image20.png)

Image 13. Add API User

Admin can fill out a form containing the consumer's name, IP consumer, and the allowed rate limit for that consumer. For IP input also supports CIDR notation to enter multiple IP ranges at once.

### Giving Consumer permission

To give the consumer permission to use the API, the admin can enter the access control page of the consumer in question.

![](/img/bigenvelope/images/en/image11.png)

Image 14. List API Consumer

To give access to Consumers, admins only need to press the "Access API" checklist of the API in question.

![](/img/bigenvelope/images/en/image19.png)

Image 15. Checklist in Access API
