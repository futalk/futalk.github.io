---
title: Windows基础
date: 2022-06-29 08:26:35
tags:
---

# windows版本
个人/普通用户: winxp、win7、win8、win10 win10 等
企业/公司: winserver03、winserver08、winserver12 winserver16 等
# windows常见目录
```
C:\Windows\System32\drivers\etc\hosts    域名解析ip地址  
```
Hosts是一个没有扩展名的系统文件，可以用记事本等工具打开，其作用就是将一些常用的网址域名与其对应的IP地址建立一个关联“数据库”，当用户在浏览器中输入一个需要登录的网址时，系统会首先自动从Hosts文件中寻找对应的IP地址，一旦找到，系统会立即打开对应网页，如果没有找到，则系统会再将网址提交DNS域名解析服务器进行IP地址的解析。</br>
需要注意的是，Hosts文件配置的映射是静态的，如果网络上的计算机更改了请及时更新IP地址，否则将不能访问,也就是说Hosts的请求级别比DNS高。
刷新dns命令：ipconfig/flushdns
```
C:\Program Files                         一般是安装64位程序的文件存放的位置
C:\Program Files (x86)                   32位应用程序的默认安装文件夹
C:\ProgramData                           系统文件夹，都是用来存放一些setting文件、缓存文件的（是一个隐藏文件夹，win7打开路     径：组织-文件夹和搜索选项-查看-显示隐藏的文件、文件夹和驱动器）
C:\Windows                               系统配置文件安装目录
C:\Windows\System32\config\SAM           存储账号和密码，运行状态下是无法打开的。
perfLogs是windows7的日志信息，如磁盘扫描 错误信息，删掉可以，但不建议删，删掉反而会降低系统速度，PerfLogs是系统自动生成的。
```
### mimikatz读取用户密码
mimikatz下载地址:
```
https://github.com/gentilkiwi/mimikatz
```
使用管理员权限（system）运行脚本：
* privilege::debug     提升权限     
* sekurlsa::logonPasswords       就是抓取密码
# 计算机服务
## 常见的服务
```
web服务、dns服务、dhcp服务、邮件服务、telnet服务、ssh服务、ftp服务、smb服务
```
telnet和ssh的区别： ssh是一种加密的，需要交换密钥，但是telnet是明文传输的，不安全。
## 计算机端口  

* 端口的作用是用来区分服务
* 端口不可以重复使用
* 端口范围是从1-65535
* 知名端口（well-known ports）  0-1023 分给了系统自带的一些服务
* 动态端口（dynamic ports） 动态端口的范围从1024到65535  

netstat命令的功能是显示网络连接、路由表和网络接口信息，可以让用户得知目前都有哪些网络连接正在运作。  

根据端口，我们可以探测计算机开放的服务、操作系统、网络角色。
### 常见端口
```
HTTP协议代理服务器常用端口号：80/8080/3128/8081/9080
FTP（文件传输）协议代理服务器常用端口号：21
Telnet（远程登录）协议代理服务器常用端口：23
TFTP（Trivial File Transfer Protocol ），默认的端口号为69/udp；
SSH（安全登录）、SCP（文件传输）、端口重定向，默认的端口号为22/tcp；
SMTP Simple Mail Transfer Protocol (E-mail)，默认的端口号为25/tcp（木马Antigen、Email
Password Sender、Haebu Coceda、Shtrilitz Stealth、WinPC、WinSpy都开放这个端口）；
POP3 Post Office Protocol (E-mail) ，默认的端口号为110/tcp；
TOMCAT，默认的端口号为8080；
WIN2003远程登陆，默认的端口号为3389；
Oracle 数据库，默认的端口号为1521；
MS SQL*SERVER数据库server，默认的端口号为1433/tcp 1433/udp；
QQ，默认的端口号为1080/udp
```
# 注册表
注册表是windows操作系统中的一个核心数据库，其中存放着各种参数，直接控制着windows的启动、硬件驱动程序的装载以及一些windows应用程序的运行，从而在整个系统中起着核心作用。这些作用包括了软、硬件的相关配置和状态信息，比如注册表中保存有应用程序和资源管理器外壳的初始条件、首选项和卸载数据等，联网计算机的整个系统的设置和各种许可，文件扩展名与应用程序的关联，硬件部件的描述、状态和属性，性能记录和其他底层的系统状态信息，以及其他数据等。  
## 注册表结构

win+r--cmd--regedit  

```
HKEY_CLASSES_ROOT
 管理文件系统。根据在Windows 中安装的应用程序的扩展名,该根键指明其文件类型的名称，相应打开该文件所要调用的程序等等信息。
HKEY_CURRENT_USER
 管理系统当前的用户信息。在这个根键中保存了本地计算机中存放的当前登录的用户信息,包括用户登录用户名和暂存的密码。在用     户登录Windows 98时，其信息从HKEY_USERS中相应的项拷贝到HKEY_CURRENT_USER中。
HKEY_LOCAL_MACHINE
 管理当前系统硬件配置。在根键这个中保存了本地计算机硬件配置数据,此根键下的子关键字包括在SYSTEM.DAT中,用来提供HKEY_LOCAL_MACHINE所需的信息,或者在远程计算机中可访问的一组键中。
这个根键里面的许多子键与System.ini文件中设置项类似。
HKEY_USERS
 管理系统的用户信息。在这个根键中保存了存放在本地计算机口令列表中的用户标识和密码列表。同时每个用户的预配置信息都存储在HKEY_USERS根键中。HKEY_USERS是远程计算机中访问的根键之一。
HKEY_CURRENT_CONFIG
 管理当前用户的系统配置。在这个根键中保存着定义当前用户桌面配置(如显示器等等)的数据,该用户使用过的文档列表（MRU），应用程序配置和其他有关当前用户的Windows 98中文版的安装的信息。
```
## 注册表的使用
* 查询开机启动程序
* 克隆账号密码权限
* 读取服务密码
* 隐藏后门
# POWERSHELL 
Powershell 是运行在windows机器上实现系统和应用程序管理自动化的命令行脚本环境
## POWERSHELL常用命令
```
Get-command  获取命令
Get-help  get-service  获取命令使用说明
获取PowerShell版本信息
Get-Host或$PSVersionTable
获取当前PowerShell环境包含的Module
Get-Module
Get-server   获取计算机服务
```
# DOS命令
上一篇文章
```
https://putdown.top/2022/05/12/Windows%E5%91%BD%E4%BB%A4/
```
# BAT文件
bat文件是dos下的批处理文件。批处理文件是无格式的文本文件，它包含一条或多条命令。它的文件扩展名为 .bat 或 .cmd。在命令提示下输入批处理文件的名称，或者双击该批处理文件，系统就会调用cmd.exe按照该文件中各个命令出现的顺序来逐个运行它们。使用批处理文件（也被称为批处理程序或脚本），可以简化日常或重复性任务。
