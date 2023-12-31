FROM node:18-alpine as dependencies
ARG CONTENFUL_SPACE_ID
ARG CONTENFUL_ACESS_TOKEN

ENV NEXT_PUBLIC_CONTENFUL_SPACE_ID ${CONTENFUL_SPACE_ID}
ENV NEXT_PUBLIC_CONTENFUL_ACESS_TOKEN ${CONTENFUL_ACESS_TOKEN}

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:18-alpine as builder
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN yarn build

FROM node:18-alpine as runner
WORKDIR /app
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]