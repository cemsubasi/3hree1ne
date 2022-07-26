FROM node:14-slim
WORKDIR /opt/31/client
COPY . .
RUN npm i
RUN  npm i -g serve
RUN  npm run build
CMD serve -s -l 8003 build/
