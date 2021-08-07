

## docker-compose 部署前后端项目

###  安装docker、 docker-compose

~~~shell
cd ./soft

sh install-docker.sh docker-18.09.9.tgz

sh install-docker-compose.sh docker-compose

# 检查是否安装成功
docker -v
docker-compose -v
~~~



### 创建镜像

```shell
# docker save [options] images [images...]
# 示例
# docker save -o nginx.tar nginx:latest
# 或
# docker save > nginx.tar nginx:latest
# 其中-o 和>表示输出到文件，nginx.tar 为目标文件，nginx:latest 是源镜像名（name:tag）

# docker load [options]
# 示例
# docker load -i nginx.tar
# 或
# docker load < nginx.tar
# 其中-i 和<表示从文件输入。会成功导入镜像及相关元数据，包括 tag 信息

# 下面为准备好的镜像，也可以自己制作镜像
# 使用 docker images 来列出本地主机上的镜像
docker load -i nginx.tar
docker load -i app.tar
docker load -i minio.tar
docker load -i mysql.tar
docker load -i redis.tar

# 如果我们想预先下载这个镜像，我们可以使用 docker pull 命令来下载它
docker pull nginx
# 使用当前目录的 Dockerfile 创建镜像，标签为 app:v1
docker build -t app:v1 .
```



### 部署项目

~~~shell
cd ./app
# 配置项目，根据实际情况修改
vim docker-compose.yml

# 打包文件 data为后端项目，html目录为前端项目
# app_deploy.sh html_deploy.sh 可根据实际情况修改，注意文件名写死了
sh app_deploy.sh
sh html_deploy.sh

# 构建项目
docker-compost up -d

#查看日志
docker-compose logs -t -f --tail=30 app


~~~

