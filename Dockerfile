# Pull base image
From tomcat:8-jre8

# Maintainer
MAINTAINER "placeportalfrontend abc@gmail.com">



# Copy to images tomcat path
ADD PlacementPortalFrontEnd.war /usr/local/tomcat/webapps/
