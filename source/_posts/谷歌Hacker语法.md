---
title: 谷歌Hacker语法
date: 2022-06-25 11:49:42
tags:
---
#　在信息收集中常用谷歌Hacker语法
## Intext:      
查找网页中含有xx关键字的网站                         
## Intitle：  
查找某个标题                                    
## allintitle:
用法和intitle类似，只不过可以指定多个词               
## Filetype： 
查找某个文件类型的文件                          
## Inurl:  
查找url中带有某字段的网站  inurl:?id=1                           
## allinurl:
用法和inurl类似，只不过可以指定多个词                
## Site：       
在某域名中查找信息                                 
## filetype:
指定访问的文件类型                                   
## link:
指定链接的网页                                    
## related:
相似类型的网页,相似指的是网页的布局相似                    
## cache:
网页快照，谷歌将返回给你他存储下来的历史页面
## info:
返回站点的指定信息
## define:
返回某个词语的定义
## phonebook:
电话簿查询美国街道地址和电话号码信息

# 一些组合命令
## 查找网站后台
```
site:http://xx.com intext:管理
site:http://xx.com inurl:login
site:http://xx.com intitle:后台
```

## 查看服务器使用的程序
```
site:http://xx.com filetype:asp
site:http://xx.com filetype:php
site:http://xx.com filetype:jsp
site:http://xx.com filetype:aspx
```

## 查看上传漏洞
```
site:http://xx.com inurl:file
site:http://xx.com inurl:load
```