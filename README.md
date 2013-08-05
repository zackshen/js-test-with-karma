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

# How to Run with fixtures
## Project directory
    test_js_with_karma
    ├── config
    │   ├── karma.conf.js
    │   └── karma.conf.js.sample
    ├── fixtures
    │   ├── html
    │   │   └── sample_component.html
    │   └── json
    │       └── sample_map.json
    ├── js
    │   └── utils.js
    ├── lib
    │   ├── jasmine-jquery.js
    │   └── jquery-1.7.1.min.js
    ├── README.md
    ├── results
    │   └── test-results.xml
    ├── test.sh
    └── units
        └── utilSpec.js

<br/>
## JSON example
### 1. add fixtures files in karma.conf.js
      {
          pattern: '../fixtures/json/*.json',
          watched: true,
          included: false,
          served: true
      }

### 2. add proxy config into karma.conf.js
    proxies = {
        '/': 'http://localhost:3000/'
    }

### 3. need to start a file proxy server, here i use python SimpleHTTPServer
    python -m SimpleHTTPServer 3000

### 4. start test
    karma start config/karma.conf.js

    Serving HTTP on 0.0.0.0 port 3000 ...
    [2013-08-02 17:44:04.569] [WARN] config - "/" is proxied, you should probably change urlRoot to avoid conflicts
    INFO [karma]: Karma server started at http://localhost:9876/
    INFO [launcher]: Starting browser PhantomJS
    INFO [PhantomJS 1.9 (Linux)]: Connected on socket id MuFBJ0E_6vnPptwvaaD9
    localhost - - [02/Aug/2013 17:44:05] "GET /fixtures/json/sample_map.json?_=1375436645848 HTTP/1.1" 200 -
    localhost - - [02/Aug/2013 17:44:05] "GET /fixtures/json/sample_map.json?_=1375436645865 HTTP/1.1" 200 -
    localhost - - [02/Aug/2013 17:44:05] "GET /fixtures/json/sample_map.json?_=1375436645876 HTTP/1.1" 200 -
    PhantomJS 1.9 (Linux): Executed 5 of 5 SUCCESS (0.115 secs / 0.051 secs)
    .
    PhantomJS 1.9 (Linux): Executed 5 of 5 SUCCESS (0.115 secs / 0.051 secs)

here i provide a test.sh to start test simplely.
<br/>
## HTML example
### 1. add fixtures files in karma.conf.js
      {
          pattern: '../fixtures/html/*.html',
          watched: true,
          included: false,
          served: true
      }

### 2. add proxy config into karma.conf.js
    proxies = {
        '/': 'http://localhost:3000/'
    }

### 3. need to start a file proxy server, here i use python SimpleHTTPServer
    python -m SimpleHTTPServer 3000

### 4. start test

    karma start config/karma.conf.js

    Serving HTTP on 0.0.0.0 port 3000 ...
    [2013-08-05 10:25:02.357] [WARN] config - "/" is proxied, you should probably change urlRoot to avoid conflicts
    INFO [karma]: Karma server started at http://localhost:9876/
    INFO [launcher]: Starting browser PhantomJS
    INFO [PhantomJS 1.9 (Linux)]: Connected on socket id ivnU9F8dlKMP9_6ISsGw
    localhost - - [05/Aug/2013 10:25:03] "GET /fixtures/json/sample_map.json?_=1375669503146 HTTP/1.1" 200 -
    localhost - - [05/Aug/2013 10:25:03] "GET /fixtures/json/sample_map.json?_=1375669503157 HTTP/1.1" 200 -
    localhost - - [05/Aug/2013 10:25:03] "GET /fixtures/json/sample_map.json?_=1375669503163 HTTP/1.1" 200 -
    localhost - - [05/Aug/2013 10:25:03] "GET /fixtures/html/sample_component.html?1375669503167 HTTP/1.1" 200 -
    PhantomJS 1.9 (Linux): Executed 8 of 8 SUCCESS (0.079 secs / 0.038 secs)
    .
    PhantomJS 1.9 (Linux): Executed 8 of 8 SUCCESS (0.079 secs / 0.038 secs)


# Code Coverage
## Install Istanbul
    npm install -g istanbul

## Config karma with coverage feature
    preprocessors = {
        '**/js/*.js': 'coverage'
    };

    reporters = [..., 'converage']

    coverageReporter = {
        type : 'html',
        dir : '../coverage/',
        file : 'coverage.html'
    }

## Test Result, new Project Tree
    .
    ├── config
    │   └── karma.conf.js
    ├── **coverage**
    │   ├── coverage-PhantomJS 1.9 (Linux)-20130805_110320.json
    │   └── PhantomJS 1.9 (Linux)
    │       ├── index.html
    │       ├── js
    │       │   ├── **index.html**
    │       │   └── **utils.js.html**
    │       ├── prettify.css
    │       └── prettify.js
    ├── fixtures
    │   ├── html
    │   │   └── sample_component.html
    │   └── json
    │       └── sample_map.json
    ├── js
    │   └── utils.js
    ├── lib
    │   ├── jasmine-jquery.js
    │   └── jquery-1.7.1.min.js
    ├── README.md
    ├── results
    │   └── test-results.xml
    ├── test.sh
    └── units
        └── utilSpec.js

# With Jenkins
![Image](../blob/master/snapshots/jenkins_1.jpg?raw=true)
![Image](../blob/master/snapshots/jenkins_2.jpg?raw=true)
![Image](../blob/master/snapshots/jenkins_3.jpg?raw=true)
![Image](../blob/master/snapshots/jenkins_4.jpg?raw=true)
![Image](../blob/master/snapshots/jenkins_5.jpg?raw=true)


# References

+ [Node](http://nodejs.org/)
+ [Karma](http://karma-runner.github.io/0.8/index.html)
+ [PhantomJS](http://phantomjs.org/)
+ [JQuery](http://jquery.com/)
+ [Jasmine](http://pivotal.github.io/jasmine/)
+ [Jasmine-JQuery](https://github.com/velesin/jasmine-jquery)
+ [Istanbul](https://github.com/yahoo/istanbul)
