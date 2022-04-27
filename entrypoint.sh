#!/usr/bin/env sh

# Support deprecated HOST_BASE_URL.
if [ -n "${HOST_BASE_URL}" ] ; then
    if [ -z "${BASE_URL}" ] ; then
        export BASE_URL="${HOST_BASE_URL}"
    fi
fi

# Inject BASE_URL into servers section of OpenApi specification.
if [ -n "${BASE_URL}" ] ; then
    echo "servers:" >> lib/foodkeeper-api-0.1.0.yaml
    echo "  - url: '${BASE_URL}'" >> lib/foodkeeper-api-0.1.0.yaml
fi

if [ -n "${1}" ] ; then
    "${@}"
else
    cd src && npm run dev-server
fi
