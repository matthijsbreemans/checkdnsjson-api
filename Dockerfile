FROM ubuntu:16.04

# Fetch Node and install it, along with the other system tools
RUN apt-get update && apt-get -y install \
    curl \
    bash      

RUN curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -

RUN apt-get -y install \
    nodejs \
    git

EXPOSE 3000

WORKDIR /dns

RUN git clone https://github.com/matthijsbreemans/checkdnsjson-api.git .

RUN npm install

CMD ["node", "server"]