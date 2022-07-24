---
title: Burp Suite 安装
date: 2022-07-22 16:08:45
tags:
---

# Burp Suite简介
Burp Suite是一个集成化的渗透测试工具，它集合了多种渗透测试组件，使我们自动化地或手工地能更好的完成对web应用的渗透测试和攻击,在渗透测试中，我们使用Burp Suite将使得测试工作变得更加容易和方便，即使在不需要娴熟的技巧的情况下，只有我们熟悉Burp Suite的使用，也使得渗透测试工作变得轻松和高效,Burp Suite是由Java语言编写而成，而Java自身的跨平台性，使得软件的学习和使用更加方便,Burp Suite不像其他的自动化测试工具，它需要你手工的去配置一些参数，触发一些自动化流程，然后它才会开始工作。

# 配置JAVA环境

因为burpsuite是在JAVA环境下运行的，所以首先应该配置好JAVA环境.
* 下载地址:
```
https://www.oracle.com/java/technologies/downloads/
```
1. 下载好后一直点下一步安装(记住安装目录).
2. 右键桌面上“我的电脑”>>“属性”，在弹出的页面上点击“高级系统设置”。
3. 在弹出的“系统属性”窗口中“高级”标签页下点击“环境变量”按钮。
4. 在弹出的“环境变量”窗口中，点击下方的“新建”按钮，在弹出的“新建系统变量”窗口中，新建一个名为“JAVA_HOME”的环境变量，变量值为Java的安装路径，本人为：```C:\Program Files\Java\jdk-13.0.2\bin```。
5. 设置Path环境变量，该变量已经存在，所以在列表中选择Path，点击下方的“编辑”按钮，在弹出的窗口中添加如下信息：``` %JAVA_HOME%\bin```;```%JAVA_HOME%\jre\bin```，然后点击“确认”按钮即可。
6. 和JAVA_HOME一样，新建一个名为```classpath```的环境变量，变量值为：```%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar```。
7. 在配置好环境变量后，可以进入cmd中检查Java是否安装正确，检查的命令为 ```java -version```  

# 二、安装Burpsuite  

## Burpsuite下载地址:
```
https://portswigger.net/burp/releases
```
建议下载```Professional.jar```版本
## 激活工具
```
https://github.com/h3110w0r1d-y/BurpLoaderKeygen/releases
```  

# 激活
1. 安装好后打开 Burp Suite 
2. 出现弹框,继续点击```I Accept```后
3. 打开激活工具
4. ``` ctrl + A```复制```Lisence```中的内容
5. ```LISENCE```复制的内容粘贴到弹出的框中,然后点击```Next```。
6. 点击```Manual activation```
7. 点击```Copy request```
8. 回到回到激活工具,把内容粘贴到```Activation Request:```
9. ```Activation Response```一栏会自动生成,``` ctrl + A```复制
10. 回到Burp Suite把复制的内容粘贴到```Paste response```
11. 然后点击```next```
12. 接着点击```finish```，进入到软件的页面
13. 点击```next```
14. 接着点击```start burp```
15. 结束
## 启动方式
第一种: 打开激活工具.点击```run```
第二中:网上有```bat```和```vbs```脚本,请自行百度查找.
# 各个板块简介
## 汉化版请自行查找甄别
![](https://cdn.jsdelivr.net/gh/futalk/tuchuang/img/202207221704359.png)
* dashboard：仪表盘，用于显示任务、日志信息
* Target: 提供显示目标目录结构的功能
* Proxy:拦截HTTP/s请求的代理服务器，作为web浏览器与服务器的中间人，允许拦截、修改数据流
* intruder：入侵模块，提供高精度的可配置工具，可进行爆破攻击、获取信息以及使用fuzzing技术探测漏洞等
* repeater：中继器，通过手动来触发单词HTTP请求，并分析应用程序的响应包
* sequence：会话模块，用于分析那些不可预知的应用程序会话令牌和重要数据的随机性的工具。
* decoder：解码器
* compare：对比模块，对数据进行差异化分析
* extender:拓展模块，可以加载BP拓展模块和第三方代码
* option：设置模块，可以设置项目、用户等信息。