#!/bin/bash

source /etc/profile
# source ~/.bash_profile

number=31

backup_dir=/mysql_bak

dd=`date +%Y%m%d%H%M%S`

username=root

password=root_password_metadata

database_name=new_contract_registration

if [ ! -d $backup_dir ]; 
then
    mkdir -p $backup_dir; 
fi

if [ ! -d $backup_dir/log ]; 
then
    mkdir -p $backup_dir/log; 
fi

echo "$dd--->start backup $backup_dir/$database_name-$dd.sql" >> $backup_dir/log/log-$dd.txt

docker exec f66f7892a07f mysqldump -u $username -p$password $database_name > $backup_dir/$database_name-$dd.sql
gzip $backup_dir/$database_name-$dd.sql

echo "$dd--->end backup $backup_dir/$database_name-$dd.sql" >> $backup_dir/log/log-$dd.txt

delfile=`ls -l -crt  $backup_dir/*.sql.gz | awk '{print $9 }' | head -1`

count=`ls -l -crt  $backup_dir/*.sql.gz | awk '{print $9 }' | wc -l`

if [ $count -gt $number ]
then
  rm -rf $delfile
  echo "delete $delfile" >> $backup_dir/log/log_rm-$dd.txt
fi

