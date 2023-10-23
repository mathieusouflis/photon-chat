FROM node:18.17.1

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY . .

ENV MONGO_URI="mongodb+srv://Admin:76ml248mSQr@cluster0.gpptuyj.mongodb.net/?retryWrites=true&w=majority"
ENV JWT_SECRET="adcc7f28ce3fb75d0d728d7219a046f571827b1b032c26e0ceb84834e5d1ae29f2effc0f758ddf8323ae4f782d48909d836b33dc3be158e7c18230a177a081f5"
ENV JWT_SECRET_REFRESH="7adc61162468ddb2e75ac963b5e38f346a148ebcd08224f0a08be1a5911bd348e338c14ddb09a597416ce9116d4f1c90ac04482cab14201dc5813375bf00d0a6"
ENV PORT=3001

EXPOSE 3001

CMD [ "npm","run","start" ]