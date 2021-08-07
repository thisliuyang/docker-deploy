#!/bin/bash

dd=`date +%Y%m%d%H%M%S`
number=5
work_home=./data
app_bak=$work_home/app_bak

echo '##########START##########'

if [ $# -ne 1 ]; then
  echo "参数错误: $0 传参必须为需要部署的jar文件！"

  exit 1
else
  jarname="$1"
fi

if [ ! -f ${jarname} ]; then
  echo "文件错误"
  echo "-f filename 如果 filename为常规文件，则为真"
  exit 1
fi

if [ ! -d $app_bak ]; 
then
    mkdir -p $app_bak; 
fi

if [ ! -d $app_bak/log ]; 
then
    mkdir -p $app_bak/log; 
fi

echo '###########app_bak###########'

mv $work_home/app.jar $app_bak/$dd.jar

mv $jarname $work_home/app.jar

delfile=`ls -l -crt  $app_bak/*.jar | awk '{print $9 }' | head -1`

count=`ls -l -crt  $app_bak/*.jar | awk '{print $9 }' | wc -l`

if [ $count -gt $number ]
then
  rm -rf $delfile
  echo "delete $delfile" >> $app_bak/log/log_rm-$dd.txt
fi

echo '###########restart###########'

docker-compose restart app

echo '###########END###########'

#查看日志
docker-compose logs -t -f --tail=30 app

