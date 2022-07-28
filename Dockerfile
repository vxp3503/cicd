FROM node

RUN mkdir -p /home/api_accelerator/accelerator_engine_ui
WORKDIR /api_accelerator/accelerator_engine_ui

ARG host_name
ENV REACT_APP_HOST_IP_ADDRESS = ""
# ENV REACT_APP_HOST_ENV_URL=${ENV_URL}
# RUN echo ${ENV_URL}

ADD src src
ADD public public
ADD package.json package.json
ADD package-lock.json package-lock.json
ADD server.js server.js

# RUN groupadd -g 999 appuser && useradd -r -u 999 -g appuser -m appuser
# RUN dpkg -r --force-all apt apt-get && dpkg -r --force-all debconf dpkg
# RUN rm -rf /var/lib/apt/lists/*

# RUN chown -R appuser:appuser /home/api_accelerator/accelerator_engine_ui
# RUN chmod -R 776 /home/api_accelerator/accelerator_engine_ui

RUN npm install
RUN npm run build

RUN rm -r node_modules

EXPOSE 3030

USER appuser

CMD ["npm", "start"]
