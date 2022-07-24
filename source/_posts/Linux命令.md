---
title: Linux基础操作
date: 2022-06-27 09:01:41
tags:
---
Linux 一些基础知识

# Linux常见发行版本
* RedHat Linux
* SuSE Linux
* Ubuntu Linux
* Mandrake Linux
* Caldera Linux
* Turbolinux
* Debian GNU/Linux
* Gentoo Linux
* Linpus Linux
##　Linux的优点
开源　免费　稳定　安全　高性能
# Linux内核版本
Linux 的版本号分为两部分，即内核版本与发行版本。内核版本号由3个数字组成：A.B.C
```
A：内核主版本号。这是很少发生变化，只有当发生重大变化的代码和内核发生才会发生。
B：内核次版本号。是指一些重大修改的内核。偶数表示稳定版本；奇数表示开发中版本。
C：内核修订版本号。是指轻微修订的内核。这个数字当有安全补丁,bug修复，新的功能或驱动程序，内核便会有变化。
```
# 磁盘分区表示
Linux中将硬盘、分区等设备均表示为文件  

以 /dev/hda5 为例

```
dev:硬件设备文件所在的目录
hd: hd 表示IDE设备;sd 表示SCSI设备
a: 硬盘的顺序号，以字母a、b、c……表示
5: 分区的顺序号，以数字1、2、3……表示
```
# 文件系统类型
## Linux中默认使用的文件系统类型
* EXT4， 第3代扩展（Extended）文件系统
* SWAP，交换文件系统
## Linux支持的其它文件系统类型
* FAT16、FAT32、NTFS
* XFS、JFS  

# Linux 系统启动过程
* 内核的引导。
* 运行 init。
* 系统初始化。
* 建立终端 。
* 用户登录系统。
# Linux系统目录结构
![](https://cdn.jsdelivr.net/gh/futalk/tuchuang/img/202206280722861.webp)

/bin : 系统命令    
(/usr/bin、/usr/local/bin)：是Binary的缩写，这个⽬录存放最经常使⽤的命令。

/sbin: 存放系统管理员命令   
（/usr/sbin、/usr/localsbin）：s就是Super User的意思，这⾥存放的是系统管理员的系统管理程序。

/home: 普通用户的家目录    
存放普通⽤户的主⽬录，在Linux中每个⽤户都有⼀个⾃⼰的⽬录，⼀般该⽬录是以⽤户的账号命令的。

/root: 管理员家目录    
该⽬录为系统管理员，也称作超级管理员的主⽬录。

/boot: linux系统启动文件   
存放的是启动Linux时使⽤的⼀些核⼼⽂件，包括⼀些链接⽂件以及镜像⽂件。

/proc: 关联系统虚拟设备     
这个⽬录是⼀个虚拟⽬录，它是系统内存的映射，访问这个⽬录来获取系统信息。

/srv : 该⽬录存放⼀些服务启动之后需要提取的数据。    
service缩写，该⽬录存放⼀些服务启动之后需要提取的数据。

/tmp : Linux系统的垃圾桶    
这个⽬录⽤来存放⼀些临时⽂件。

/dev：类似于windows的设备管理器，把所有的硬件⽤⽂件的形式存储。

/media: 多媒体目录
linux系统会⾃动识别⼀些设备，⾃动识别⼀些设备，例如：U盘、光驱等。

/mnt : 挂载一些硬件设备的目录
系统提供该⽬录是为了让⽤户临时挂载别的⽂件系统

/opt : 下载文件常用目录
这是给主机额外安装软件所摆放的⽬录。

/usr : 存放系统安装软件的目录
这是另⼀个给主机额外安装软件所安装的⽬录。⼀般是通过编译源代码的⽅式安装程序。

/var : 存放系统日志
这个⽬录中存放着不断扩充的东⻄，习惯将经常被修改的⽬录放在这个⽬录下。

/etc : 系统配置目录

/run : 存放系统运行临时数据目录

# Linux系统常用命令  
### Linux命令的分类
Linux命令
* 用于实现某一类功能的指令或程序 
* 命令的执行依赖于解释器程序（例如：/bin/bash）
Linux命令的分类
* 内部命令：属于Shell解释器的一部分
* 外部命令：独立于Shell解释器之外的程序文件
### Linux命令行格式
* 命令字  [选项]  [参数]
* 选项及参数含义
* 选项：用于调节命令的具体功能
* 以 “-”引导短格式选项（单个字符），例如“-l”
* 以“--”引导长格式选项（多个字符），例如“--color”
* 多个短格式选项可以写在一起，只用一个“-”引导，例如“-al”
* 参数：命令操作的对象，如文件、目录名等
# Linux系统命令
### 获得命令帮助
* 内部命令help
* 查看Bash内部命令的帮助信息
* 命令的“--help”选项
* 适用于大多数外部命令 
* 使用man命令阅读手册页
* 使用方向键滚动文本
* 使用Page Up和Page Down键翻页 
* 按Q或q键退出阅读环境、按“/”键后查找内容
### Linux系统命令
* uname       查看系统内核信息 -r查看内核版本号 -a  显示详细信息
* hostname    查看或临时修改主机名称
* ifconfig    查看系统ip信息
* cat /proc/cpuinfo    查看系统cpu信息
* cat /proc/meminfo    查看系统内存信息
* halt        关机
* reboot      重启
* pwd	    查看工作目录
* cd	    切换目录
* du	    统计目录及文件空间占用情况 -sh统计目录大小
### 目录操作命令 - ls
* ls命令
* 用途：列表（List）显示目录内容 
* 格式：ls  [选项]...  [目录或文件名]
* 常用命令选项
* -l ：以长格式显示
* -a：显示所有子目录和文件的信息，包括隐藏文件
* -A：类似于“-a”，但不显示“.”和“..”目录的信息
* -d：显示目录本身的属性
* -h：以更易读的字节单位（K、M等）显示信息
* -R：递归显示内容
* --color：以颜色区分不同类型文件
### 权限设置命令
* Chmod 
* U 是所有者用户  g 是组 o其他人 a所有人
* R读  w写 x可执行
* 用法
* Chmod u+w  给所有者用户添加写入权限
* Chmod g-r     给所在分组去掉读取权限
* 权限用数字代替
* R=4    w=2  x=1     权限值等于每个权限数字相加
* Chmod 777     给所有权限设置为可读可写可执行
* Chown  设置所有者和所在分组用户
* Chown  Apache:Apache    test   登录吧test目录所有者和所组设置为Apache用户
### 文件管理
* touch       创建文件或跟新文件时间标记
* mkdir       创建目录命令   -p递归创建目录
* cp	    复制文件或目录  -r递归复制  -f强制覆盖 -p保持源文件属性不变
* -i覆盖文件目录提醒
* rm 	    删除文件或目录  -r递归删除  -f 强制删除不提醒  -i 删除时用户提醒
* mv          移动文件或目录
* wc	    统计文件中出现的单词数量字节数量和行数
* Cat       查看文件内容命令
### 文件或目录查找命令
* find命令
    用途：用于查找文件或目录
    格式：find  [查找范围]  [查找条件]
* 常用查找条件
-name：按文件名称查找 
-size：按文件大小查找
-user：按文件属主查找
-type：按文件类型查找
### 压缩命令  gzip  bzip2 
gzip命令不仅能压缩文件也能实现文件的解压操作，利用gzip命令可以将普通文件压缩成.gz为后缀 的压缩文件，压缩成功后原始文件消失。且可指定压缩机别，该命令的压缩级别范围是1~9级，默认为6，1的压缩比最差，速度最快；9的压缩比最好，速度较慢。  

* 加压：gzip -q [文件名] (或gzip [文件名])
* 解压：gzip -d [文件名]  

利用bzip2命令可以将普通文件压缩成.bz2为后缀 的压缩文件，压缩成功后原始文件消失。
* 加压：bzip2 -q[文件名]
* 解压：bzip2 -d [文件名]
* bzip2需要下载才能使用
### 归档命令  tar
* tar  归档命令  释放归档文件  没有压缩功能
  格式 tar  选项  归档文件名   源文件或目录  
* -c  创建归档文件           扩展名为.tar
* -v 输出详细信息       -f   表示使用归档文件   如 -cvf  创建归档文件
* tar  -cvf  4.tar 1 2 3   将文件1 2 3 打包归档为4.tar
* tar  -xvf  4.tar         解包归档文件4.tar            -xvf  解包归档文件
* -x  解开归档文件    -t  列表查看包内的文件（不释放解包）
* tar -tvf 4.tar   -r   追加TAR文件至归档结尾
* tar -rvf 4.tar 5 把5加入4.tar
* -p   解包时保留原始文件及目录的权限
*  -C （大）   解包时指定释放的目标文件夹
*  -z  调用gzip 程序   进行解压或压缩  -j  调用bzip2  程序进行压缩或解压
* tar -cvzf  test.tar.gz   被压缩的文件1  被压缩的文件2   创建归档压缩文件 后缀为gz
* tar -cvjf  test.tar.bz2  被压缩的文件1  被压缩的文件2   创建归档压缩文件 后缀为bz2
* tar -xvzf  test.tar.gz  -C  /usr/src  解压释放归档到 /usr/src 里面
* tar -xvjf  test.tar.bz2 -C  /usr/src  解压释放归档到 /usr/src 里面
### 添加用户账号
* useradd命令
* 格式：useradd  [选项]...  用户名
* 常用命令选项
* -u：指定 UID 标记号
* -d：指定宿主目录，缺省为 /home/用户名
* -e：指定帐号失效时间
* -g：指定用户的基本组名（或UID号）
* -G：指定用户的附加组名（或GID号）
* -M：不为用户建立并初始化宿主目录
* -s：指定用户的登录Shell
```
[root@localhost ~]# useradd -d /ftphome/mike -g mike -G ftpuser -s /sbin/nologin mike 
```
### 删除用户账号——userdel
* userdel命令
* 格式：userdel  [-r]  用户名
* 添加 -r 选项时，表示连用户的宿主目录一并删除
```
[root@localhost ~]# userdel -r stu01
[root@localhost ~]# ls -ld /home/stu01/
```
### 查看进程
* Ps  -aux  查看系统进程
* Top          动态查看系统进程
* Kill   1234   杀死进程1234
### 网络配置
* Ifconfig  eth0  192.168.1.20/24   临时修改eth0 网卡ip
* Route –n  查看系统路由信息
* Netstat    查看网络连接情况
* netstat命令
* 查看系统的网络连接状态、路由表、接口统计等信息
* 格式：netstat [选项]
* 常用选项：
* -a：显示所有活动连接
* -n：以数字形式显示
* -p：显示进程信息
* -t：查看TCP协议相关信息
* -u：查看UDP协议相关信息
* -r：显示路由表信息
* ### 网络接口配置文件

* /etc/sysconfig/network-scripts/目录下的
* ifcfg-eth0：第1块以太网卡的配置文件
* ifcfg-eth1：第2块以太网卡的配置文件

修改了配置文件要重启网络服务: 

```
Service  network restart
```

```
[root@localhost ~]# ls /etc/sysconfig/network-scripts/ifcfg-*
/etc/sysconfig/network-scripts/ifcfg-eth0
/etc/sysconfig/network-scripts/ifcfg-lo  
```
```
[root@localhost ~]#vim /etc/sysconfig/network-scripts/ifcfg-eth0
DEVICE=eth0
ONBOOT=yes
BOOTPROTO=static
IPADDR=192.168.4.1
NETMASK=255.255.255.0
GATEWAY=192.168.4.2
```

### 域名解析配置文件
/etc/resolv.conf
用途：保存本机需要使用的DNS服务器的IP地址  
```
[root@localhost ~]# vi /etc/resolv.conf
search localdomain
nameserver 1.1.1.1
nameserver 8.8.8.8
```

# Linux vi/vim
Vim 是从 vi 发展出来的一个文本编辑器。代码补全、编译及错误跳转等方便编程的功能特别丰富，在程序员中被广泛使用。
简单的来说， vi 是老式的字处理器，不过功能已经很齐全了，但是还是有可以进步的地方。 vim 则可以说是程序开发者的一项很好用的工具。
![](https://cdn.jsdelivr.net/gh/futalk/tuchuang/img/202206271013800.gif)

vi/vim 的使用
基本上 vi/vim 共分为三种模式，分别是命令模式（Command mode），输入模式（Insert mode）和底线命令模式（Last line mode）。 这三种模式的作用分别是：  

命令模式：
用户刚刚启动 vi/vim，便进入了命令模式。
此状态下敲击键盘动作会被Vim识别为命令，而非输入字符。比如我们此时按下i，并不会输入一个字符，i被当作了一个命令。
以下是常用的几个命令：
* i 切换到输入模式，以输入字符。
* x 删除当前光标所在处的字符。
* : 切换到底线命令模式，以在最底一行输入命令。
* 若想要编辑文本：启动Vim，进入了命令模式，按下i，切换到输入模式。
* 命令模式只有一些最基本的命令，因此仍要依靠底线命令模式输入更多命令。  

输入模式
在命令模式下按下i就进入了输入模式。
在输入模式中，可以使用以下按键：
* 字符按键以及Shift组合，输入字符
* ENTER，回车键，换行
* BACK SPACE，退格键，删除光标前一个字符
* DEL，删除键，删除光标后一个字符
* 方向键，在文本中移动光标
* HOME/END，移动光标到行首/行尾
* Page Up/Page Down，上/下翻页
* Insert，切换光标为输入/替换模式，光标将变成竖线/下划线
* ESC，退出输入模式，切换到命令模式  

底线命令模式
在命令模式下按下:（英文冒号）就进入了底线命令模式。
底线命令模式可以输入单个或多个字符的命令，可用的命令非常多。
* q 退出程序
* w 保存文件
* wq 保存并退出
* 按ESC键可随时退出底线命令模式。
# Linux yum 命令
yum（ Yellow dog Updater, Modified）是一个在 Fedora 和 RedHat 以及 SUSE 中的 Shell 前端软件包管理器。
基于 RPM 包管理，能够从指定的服务器自动下载 RPM 包并且安装，可以自动处理依赖性关系，并且一次安装所有依赖的软件包，无须繁琐地一次次下载、安装。
yum 提供了查找、安装、删除某一个、一组甚至全部软件包的命令。  
## yum常用命令
* 列出所有可更新的软件清单命令：
```
yum check-update
```
* 更新所有软件命令：
```
yum update
```
* 仅安装指定的软件命令：
```
yum install <package_name>
```
* 仅更新指定的软件命令：
```
yum update <package_name>
```
* 列出所有可安裝的软件清单命令：
```
yum list
```
* 删除软件包命令：
```
yum remove <package_name>
```
* 查找软件包命令：
```
yum search <keyword>
```
* 清除缓存命令:
```
yum clean packages: 清除缓存目录下的软件包             
yum clean headers: 清除缓存目录下的 headers            
yum clean oldheaders: 清除缓存目录下旧的 headers 
yum clean, yum clean all (= yum clean packages; yum clean oldheaders) :清除缓存目录下的软件包及旧的 headers
```

## Linux apt 命令
* apt（Advanced Packaging Tool）是一个在 Debian 和 Ubuntu 中的 Shell 前端软件包管理器。
* apt 命令提供了查找、安装、升级、删除某一个、一组甚至全部软件包的命令，而且命令简洁而又好记。
* apt 命令执行需要超级管理员权限(root)。
## apt 常用命令
* 列出所有可更新的软件清单命令：
```
sudo apt update
```
* 升级软件包：
```
sudo apt upgrade
```
* 列出可更新的软件包及版本信息：
```
apt list --upgradeable
```
* 升级软件包，升级前先删除需要更新软件包：
```
sudo apt full-upgrade
```
* 安装指定的软件命令：
```
sudo apt install <package_name>
```
* 安装多个软件包：
```
sudo apt install <package_1> <package_2> <package_3>
```
* 更新指定的软件命令：
```
sudo apt update <package_name>
```
* 显示软件包具体信息,例如：版本号，安装大小，依赖关系等等：
```
sudo apt show <package_name>
```
* 删除软件包命令：
```
sudo apt remove <package_name>
```
* 清理不再使用的依赖和库文件: 
```
sudo apt autoremove
```
* 移除软件包及配置文件: 
```
sudo apt purge <package_name>
```
* 查找软件包命令： 
```
sudo apt search <keyword>
```
* 列出所有已安装的包：
```
apt list --installed
```
* 列出所有已安装的包的版本信息：
```
apt list --all-versions
```
