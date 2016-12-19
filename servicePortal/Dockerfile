FROM java:8
VOLUME /tmp
ADD target/servicePortal-1.0.jar servicePortal.jar
RUN bash -c 'touch /servicePortal.jar'
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/servicePortal.jar"]
