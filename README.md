#Niramai

## Run - npm install to install node modules
## Run - node app.js to run the application

# API's :

1) http://localhost:3000/api/post-data => It retrives data from the url https://clinicalapi-cptac.esacinc.com/api/tcia/clinical_data/tumor_code/CCRCC
 and stores it on mongoDB.
 
2) http://localhost:3000/api/get-data => It gives the total data  stored on mongoDB.

3) http://localhost:3000/api/single-tumor/:case_id => Put the case_id value in place of :case_id , it retrieves the specific tumor data matching with its case_id from the database.

.env has the mongodb url
