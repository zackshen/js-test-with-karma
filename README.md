# Install Guide

## 1. node

</br>
### 1. get node
	wget -c http://nodejs.org/dist/v0.10.15/node-v0.10.15-linux-x64.tar.gz

</br>
### 2. uncompress
	tar -zxvf node-v0.10.15-linux-x64.tar.gz -C /usr/local/

</br>
### 3. export to env
	export PATH=$PATH:/usr/local/node/bin/

</br>
</br>
## 3. phantomjs
</br>
### 1. get phantomjs
	wget -c https://phantomjs.googlecode.com/files/phantomjs-1.9.1-linux-x86_64.tar.bz2
</br>
###	2. install
	bunzip2 phantomjs-1.9.1-linux-x86_64.tar.bz2 && tar xvf phantomjs-1.9.1-linux-x86_64.tar -C /usr/local/
</br>
###	3. export PHANTOMJS_BIN
	export PHANTOMJS_BIN=/usr/local/phantomjs/bin/phantomjs

</br>
</br>
## 2. karma
</br>
### Global installation
	npm install -g karma
</br>
### Local installation
	npm install karma

</br>
</br>
# How to run
</br>
##	1. Generate config with karma
	cd project-with-js-test/config && karma init

</br>
###	2. Step by Step choose

</br>
### 3. Manually config karma.conf.js
* I put a sample config in the folder, you can copy it as karma.conf.js

</br>
### 4. Run test
there are some sample test code in the unit folder, run it directly.
after test finished, the test result would be found in the result folder.

	# karma start config/karma.conf.js

	INFO [karma]: Karma server started at http://localhost:9876/
	INFO [launcher]: Starting browser PhantomJS
	INFO [PhantomJS 1.9 (Linux)]: Connected on socket id NWw9paZdn_1nAT5P6eV2
	 PhantomJS 1.9 (Linux): Executed 2 of 2 SUCCESS (0.087 secs / 0.002 secs)
	.
	PhantomJS 1.9 (Linux): Executed 2 of 2 SUCCESS (0.087 secs / 0.002 secs)
