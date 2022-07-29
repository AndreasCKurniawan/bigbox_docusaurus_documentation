---
sidebar_position: 3
---

# Creating API From External API Service

BigEnvelope also allows admins to create APIs by wrapping existing external REST service APIs.

### Setting API

To create a new API, go to the API menu and then press the "Add new API" button.

![](/img/bigenvelope/images/en/image17.png)

Image 16. Create API Page

Fill in the form by inputting the API name, and the desired cache time (default is no cache). Enter the API type in the value "Rest API"

![](/img/bigenvelope/images/en/image6.png)

Image 17. Setting REST API

Fill in the rest API URL with the endpoint of the service you want to wrap. then select the method used by the service. If required, fill in the Authorization input with the required authorization type and value. When finished, the admin can press the "Save" button.

### Creating Consumer Profile

To create a consumer profile that will use the API, the admin can do it on the Consumer page and press the "Add API User" button.

![](/img/bigenvelope/images/en/image20.png)

Image 18. Create Consumer Profile

Admin can fill out a form containing the consumer's name, IP consumer, and the allowed rate limit for that consumer. For IP input also supports CIDR notation to enter multiple IP ranges at once.

### Giving Consumer permission

To give the consumer permission to use the API, the admin can enter the access control page of the consumer in question.

![](/img/bigenvelope/images/en/image11.png)

Image 19. Consumer Permission Setting

To give access to Consumers, admins only need to press the "Access API" checklist of the API in question.

![](/img/bigenvelope/images/en/image19.png)

Image 20. Access Control Page
