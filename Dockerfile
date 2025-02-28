FROM node:18.17.0 AS base

WORKDIR /m2projects
COPY .next/standalone ./

EXPOSE 3000

ENV PORT 3000
# set hostname to localhost
ENV HOSTNAME "0.0.0.0"

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD ["node", "apps/lang-learn/server.js"]