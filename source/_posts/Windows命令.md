---
title: 在windows中常用的DOS命令
date: 2022-05-12 14:57:16
tags:
---

# 在windows中常用的DOS命令

## 常用文件管理命令
```CMD 
ls 列出当前目录下所有文件
ls                               # 列出当前目录下所有文件，蓝色的是文件夹，白色的是普通文件，绿色的是可执行文件
ls -a                            # 显示隐藏文件
ls -l                            # 显示文件权限
ls -lh                           # 以人类易懂的单位显示大小
ls *.txt -l                      # 将所有 txt 文件显示出来  

pwd                             # 显示当前路径
pwd -P                          # 显示出确实的路径，而非使用连结 (link) 路径。(注意是大写的 P !!!)

cd XXX                          # 进入XXX目录下          
cd ..                           # 返回上层目录
cd                              # 不管到哪进行 cd ，都回到 用户主目录 目录下      ~目录
cd -                            # 回溯，返回上一个目录

cp XXX YYY                      # 将XXX文件复制成YYY，XXX和YYY可以是一个路径，比如../dir_c/a.txt，表示上层目录                                  下的dir_c文件夹下的文件a.txt
cp a/tmp.txt b/tmp2.txt         # 复制 + 粘贴 + 重命名
cp a b -r                       # 目录：复制整个目录（前提是 b 文件夹存在）
cp a c -r                       # 文件：将 a 文件复制一份到 当前文件 ，并命名为 c（前提是 c 文件夹不存在）
cp -i /root/install.sh /home    # 加上-i参数，增加覆盖询问


mkdir XXX                       # 创建目录 XXX
mkdir a/b/c -p                  # 递归创建文件夹
mkdir a b c                     # 同时创建多个文件夹
mkdir -m 711 test               # 配置文件的权限：创建权限为 rwx--x--x 的目录 test 

rmdir XXX                       # 删除空的目录，目录不为空无法删除！而 rm 能删除非空目录。
rmdir -p test1/test2/test3      # 连同上一级『空的』目录也一起删除！删除到最近不是空目录的目录！


rm XXX                          # 删除普通文件        rm 删除是无法返回的！
rm XXX -r                       # 删除文件夹
rm tmp1.txt tmp2.txt            # 同时删除多个文件
rm *.txt                        # 删除 txt 文件，支持正则表达式
rm a/*                          # 删除 a 文件夹下所有的东西
rm /* -rf                       # 删库        -f 是强行删除    -r 是递归删除        不要执行该语句！
rm -i install.sh                # 互动模式，在删除前会询问使用者是否动作 

mv XXX YYY                      # 将XXX文件移动到YYY，和cp命令一样，XXX和YYY可以是一个路径；重命名也是用这个命令
mv a/tmp.txt b/tmp1.txt         # 移动，剪切功能，当然也可以改名（cp是复制功能）
mv a s                          # 将文件夹改名，原来的文件夹没了
mv XXX YYY                      # -i ：若目标文件已经存在时，就会询问是否覆盖。如果不加，是默认覆盖的！

touch XXX                       # 创建一个文件

cat XXX                         # 展示文件 XXX 中的内容

tree                            # 目录以树状显示出来

man [命令]                      # 查看各个命令的使用文档
```

## 与其他系统账号聊天
```CMD 
Msg user “hello” 
```


## 查看系统信息
```CMD 
systeminfo  
```

## ipconfig
```CMD
ipconfig                         #显示每个已经配置了的接口的IP地址、子网掩码和缺省网关值
ipconfig/all                     #显示计算机网络连接情况，包括它的IP地址、DNS、DHCP、MAC地址等信息
```

## 针对进行DHCP服务器重新获取IP
```CMD
ipconfig /release                #释放ip
ipconfig /renew                  #重新获得ip
```


## 检测网络的连通情况和分析网络速度
```CMD
ping IP
ping 域名
ping 主机名
```

## arp 地址转换协议
```CMD
arp –a                          #用于查看高速缓存中的所有项目
arp -s IP                       #向ARP高速缓存中人工输入一个静态项目
arp -a IP                       #如果有多个网卡，只显示与该接口相关的ARP缓存项目
arp -d IP                       #使用本命令能够人工删除一个静态项目。
```

## traceroute
```CMD
tracert IP                      #用来查看网络在连接站点时经过的步骤或采取哪种路线
```

## route
```CMD
route print                     #显示路由表中的当前项目
route add                       #将路由项目添加进路由表
route change                    #使用此命令来修改数据的传输路由
route delete                    #从路由表中删除路由
```

## nslookup
```CMD
nslookup  查看本机的IP及域名服务器地址
>         输入域名/IP查看对应的IP地址或域名并回车即可
```

## netstat
```CMD
 netstat –a                    #显示所有的有效连接信息列表
 netstat –n                    #以点分十进制的形式列出IP地址
 netstat -e                    #用于显示关于以太网的统计数据
```

## net
```CMD
net help command              #在命令行获得net命令的语法帮助
net start                     #查看开启了哪些服务
net start 服务名               #开启服务
net stop 服务名                #停止某服务
net user 用户名 密码 /add      #建立用户
net user guest /active:yes    #激活guest用户
net user                      #查看有哪些用户 
net user                      #帐户名 查看帐户的属性 
net user guest 12345          #用guest用户登陆后用将密码改为12345 
net password 密码             #更改系统登陆密码 
net share                     #查看本地开启的共享
net view                      #查看局域网内其他计算机名称
```

## 启动工具
```CMD 
'win+r'键输入以下命令
calc                                       #启动计算器
charmap                                    #启动字符映射表
cleanmgr                                   #打开磁盘清理工具
cmd.exe                                    #查看cmd版本
chkdsk.exe                                 #盘检查
certmgr.msc                                #证书管理实用程序
dvdplayDVD                                 #播放器
diskmgmt.msc                               #磁盘管理
devmgmt.msc                                #设备管理器
dxdiag                                     #查DirexctX信息，即查看电脑信息
dcomcnfg                                   #打开系统组件服务
explorer                                   #打开文件管理
eventvwr                                   #事件查看器
eudcedit                                   #造字程序
fsmgmt.msc                                 #共享文件夹管理器
lusrmgr.msc                                #本机用户和组
msconfig.exe                               #系统配置程序
mspaint                                    #画图板
magnify                                    #放大镜，即win键+加号键
mmc                                        #打开控制台
mobsync                                    #打开同步命令
notepad                                    #打开记事本
net start messenger                        #开始信使服务
net stop messenger                         #停止信使服务
nslookup                                   #网络管理的工具向导、ip地址侦查器，即本机ip地址查询
nattator                                   #屏幕讲述人
netstat -an-(TC)                           #命令检查接口
osk                                        #打开屏幕键盘
odbcad32ODBC                               #数据源管理器
perfmon.msc                                #计算机性能检测程序
regsvr32/u .dll                            #停止dll文件运行（输入需要停止的dll文件名称）
regedt32（regedit.exe）                    #注册表编辑器
services.msc                               #本地服务设置
sigverif                                   #文件签名验证程序
shrpubw                                    #创建共享文件夹
sfc.exe                                    #系统文件检查器
sfc/scannowwindows                         #文件保护（扫描错误并复原）
utilman                                    #打开辅助设置
wmimgmt.msc                                #打开Windows管理体系结构（WMI）
wscript.exe                                #Windows脚本宿主设置
write                                      #写字板
wiaacmgr                                   #扫描仪和照相机向导
```