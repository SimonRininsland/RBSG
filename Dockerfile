FROM "node:8"
RUN apt-get update && apt-get upgrade -y && apt-get install -y mongodb