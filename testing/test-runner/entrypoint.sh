#!/usr/bin/env sh

cp -R /lib/foodkeeper-api-0.1.0.yaml /tmp/foodkeeper-api-0.1.0.yaml
echo "servers:" >> /tmp/foodkeeper-api-0.1.0.yaml
echo "  - url: '${SUT_BASE_URL}'" >> /tmp/foodkeeper-api-0.1.0.yaml

node ./node_modules/mocha/bin/mocha -C
