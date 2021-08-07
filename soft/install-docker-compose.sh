#/bin/bash
DOCKERDIR=/usr/bin
DOCKERBIN=docker-compose
JSONPROXY=daemon.json
JSONDIR=/etc/docker
 
if [ $# -lt 1 ]
then
  echo "not docker-compose"
  exit 1
fi
FILETARGZ="$1"
 
echo "##unzip : tar xvpf ${FILETARGZ}"
tar -xvpf ${FILETARGZ}
echo
 
echo "##binary : ${DOCKERBIN} copy to ${DOCKERDIR}"
cp -p ${DOCKERBIN} ${DOCKERDIR} >/dev/null 2>&1
which ${DOCKERBIN}
 
echo "docker_json proxy"
cp ${JSONPROXY} ${JSONDIR} >/dev/null 2>&1
echo
 
echo "docker-compose install successful!!"
