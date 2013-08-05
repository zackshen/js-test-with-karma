#!/bin/sh

/usr/bin/env python -m SimpleHTTPServer 3000 &
karma start config/karma.conf.js
ps aux|grep python|grep -v grep|grep SimpleHTTPServer|awk '{print $2}'|xargs kill -9
