#Building for Server
* meteor build zephyrware
* cd zephyrware
* scp zephyrware.tar.gz user@IPADRESS:/home/

#Starting on Digital Ocean
* tar -xvzf leaderboard.tar.gz
* cd home/bundle/programs
* npm install
* go to /home/bundle/programs/server/node_modules
* remove fibers
* npm install fibers
* cd /home/yourapp/bundle/programs/server/npm/npm-bcrypt/node_modules/
* rm -rf bcrypt
* cd /home/yourapp/bundle/programs/server
* npm install bcrypt
* cp -r /home/bundle/programs/server/node_modules/bcrypt /home/bundle/programs/server/npm/npm-bcrypt/node_modules/bcrypt/
* export MONGO_URL=mongodb://localhost:27017
* export ROOT_URL="http://www.zephyr-ware.com"
* export export PORT=80
* Kill the other forevers (forever kill 0)
* forever start main.js