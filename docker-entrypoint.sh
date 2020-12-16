#!/usr/bin/env bash

set -Eeo pipefail

WORKDIR=/opt/taltech-donald-frontend/

cd $WORKDIR

/usr/bin/env npm build ng serve
