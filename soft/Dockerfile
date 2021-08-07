FROM openjdk:8-jdk-alpine
RUN apk add --update --no-cache ttf-dejavu fontconfig && rm -rf /var/cache/apk/*

LABEL maintainer=wjp
WORKDIR /app
ENTRYPOINT ["java","-jar","/app/app.jar","-Xmx1024m"]
EXPOSE 8809
RUN ln -snf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo Asia/Shanghai > /etc/timezone