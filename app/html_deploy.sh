#!/bin/bash

html_dir=html
dist_bak=dist_bak
dd=`date +%Y%m%d%H%M%S`
number=5
dirname=dist

echo '##########START##########'

if [ $# -ne 1 ]; then
  echo "参数错误: $0 传参必须为需要部署的.zip文件！"
  exit 1
else
  zipname="$1"
fi

if [ ! -f ${zipname} ]; then
  echo "文件错误"
  echo "-f filename 如果 filename为常规文件，则为真"
  exit 1
fi

echo
echo '1. unzip dist.zip...'
unzip $zipname

echo
echo
echo '#########################'
echo
echo "2. mv dist/* html/..."

if [ ! -d $html_dir ]; 
then
    mkdir -p $html_dir; 
fi

if [ ! -d $dist_bak ]; 
then
    mkdir -p $dist_bak; 
fi

if [ ! -d $dist_bak/log ]; 
then
    mkdir -p $dist_bak/log; 
fi

rm -rf $html_dir/*

mv $dirname/* $html_dir/


echo '###########dist_bak###########'

rm -rf $dirname

mv $zipname $dist_bak/$dd.zip

delfile=`ls -l -crt  $dist_bak/*.zip | awk '{print $9 }' | head -1`

count=`ls -l -crt  $dist_bak/*.zip | awk '{print $9 }' | wc -l`

if [ $count -gt $number ]
then
  rm -rf $delfile
  echo "delete $delfile" >> $dist_bak/log/log_rm-$dd.txt
fi

echo '###########END###########'

