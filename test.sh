
mongoimport -d highspot -c collection --file "mixtape-data.json"

mongo localhost:27017/highspot changes.js

(mongoexport -d highspot -c collection) > output.json
