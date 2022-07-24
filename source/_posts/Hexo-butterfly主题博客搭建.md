---
title: HEXO+butterfly主题博客搭建
date: 2022-06-20 08:39:47
tags:
---

个人在Windows10系统下搭建hexo博客框架+butterfly主题的一些过程和遇到的一些问题

## 安装软件环境
### 安装Nodejs 官网下载地址如下
```
https://nodejs.org/en/download/
```
#### 查看node版本
```
node -v
```
#### 查看npm版本
```
npm -v
```
### 安装Git 官网下载地址如下
```
https://git-scm.com/
```

<b><font size=5>以下命令行内容都可以用Git Bash运行</font></b>

## 安装淘宝的cnpm 管理器
由于npmjs.org的服务器在国外，很多“包”的下载速度极慢，在这种环境下阿里巴巴推出了淘宝镜像(即cnpm)，它把npm官方的“包”全部搬到国内，供广大开发者使用。
```
npm install -g cnpm --registry=http://registry.npm.taobao.org
```
#### 查看cnpm版本
```
cnpm -v
```
## 安装hexo框架
```
cnpm install -g hexo-cli
```
#### 查看hexo版本
```
hexo -v
```
## 创建blog目录
```
mkdir C:\blog   #在c盘目录下创建名为blog文件夹（根据自己的实际情况创建），在winsows也可以直接右键新建文件夹
```
#### 进入blog目录
```
cd blog 
```
#### 生成博客
在blog文件夹下生成hexo博客框架，删除hexo框架直接删除blog文件夹即可，备份迁移同理。
```
hexo init
```
#### 启动本地博客服务
```
hexo s
```
#### 本地访问地址
在浏览器地址框输入

```
http://localhost:4000/
```
#### 创建新的文章 
```
hexo n "我的第一篇文章"
```
创建的新文章在C:\blog\source\_posts目录下.md的文件格式。

#### 返回blog目录
##### 清理
```
hexo clean
```
##### 生成
```
hexo g
```
## Github创建一个新的仓库 YourGithubName.github.io
'YourGithubName'是你自己注册的github的名字，名字一定要正确不能有空格。

####　适用于Hexo的Git部署程序插件
```
cnpm install --save hexo-deployer-git
```
###　配置　_config.yml
blog目录下找到_config.yml记事本打开，在最下面找到　# Deployment

```
# Deployment
## Docs: https://hexo.io/docs/one-command-deployment
deploy:
  type: git
  repo: git@github.com:YourGithubName/YourGithubName.github.io.git　#这个链接是你自己YourGithubName.github.io仓库的的SSH的链接
  branch: main
```
按照上面的格式填写，把YourGithubName改成自己注册的名字，也可以在GitHub复制这个仓库的SSH的链接

## Windows 环境配置Github 的SSH key

<b><font size=3>以下命令行内容用Git Bash运行</font></b>

### 先设置GitHub的user name和email
```
git config --global user.name "Git账号"
```
```
git config --global user.email "Git邮箱"
```
### 使用Git Bash，生成一个新的SSH密钥
打开 Git Bash，输入如下命令，然后连续按三个回车即可
```
ssh-keygen -t rsa -C "your_email@example.com"
```
### 使用GitBash 将SSH私钥添加到 ssh-agent
打开 Git Bash，在控制台输入如下指令，实现后台启动 ssh-agent
```
eval $(ssh-agent -s)
```
将SSH私钥添加到 ssh-agent
```
ssh-add /c/Users/Administrator/.ssh/id_rsa
```
### 将SSH公钥添加到GitHub账户
1.打开 Git Bash，在控制台输入如下指令,复制SSH公钥的完整内容
```
clip < /c/Users/Administrator/.ssh/id_rsa.pub
```
2、进入GitHub的设置页面（登录GitHub，在右上角）
3、点击左部侧边栏的 SSH keys 选项
4、点击 NEW SSH key 按钮
5、在Title输入框内，为你的新key取个名字，在Key输入框内，粘贴前面复制好的公钥内容，然后点击 Add key 按钮即可。
### 测试连接 
```
ssh -T git@github.com
```
## windows10环境下要在在 hexo d 之前敲
打开 Git Bash，在控制台输入如下指令

```
git config --global user.email "you@example.com"
```
```
git config --global user.name "YourName"
```
把you@example.com；YourName改成自己的

## 部署到Github仓库里
```
hexo d
```
### 安装Butterfly主题
在你的blog目录下
```
git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly
```
### 修改hexo根目录下的 _config.yml 文件
theme: butterfly
```
# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: butterfly
```
### 安裝butterfly的插件
```
npm install hexo-renderer-pug hexo-renderer-stylus --save
```
### 配置主题
butterfly主题的官网，里面有配置文档，按照需求跟着配置即可
```
https://butterfly.js.org/
```
### 访问这个地址可以查看博客
```
https://YourGithubName.github.io/
```
## github的短域名用自己的域名解析
### DNS修改
你购买域名的管理后台中，打开域名控制台->基本管理->DNS修改
### 域名添加 DNS 解析
github官网提供的两个主机ip地址：192.30.252.153 和 192.30.252.153， 将这两个作为主机地址，给域名的DNS解析添加两个 A记录，然后再添加一个 GNAME记录 主机地址填的是我们原本用来访问github博客的地址： githubname.github.io
### 创建 GNAME 文件
在hexo本地目录 source 目录下面新建一个文件，取名为 GNAME (无后缀)，内容就是自己买的域名，以我的为例
```
putdown.top
```
### 域名绑定
打开博客在Github中的地址，然后切换到 Settings页，设置Custom domain内容为我们自己的域名值（例如：我的域名是putdown.top），点击Save按钮保存

### 博客有修改要使用命令重新启动，常用组合命令如下
清理 生产 启动本地服务
```
hexo clean && hexo g && hexo s
```
清理 生产 上传github

```
hexo clean && hexo g && hexo d
```