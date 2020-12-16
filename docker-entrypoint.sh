#!/usr/bin/env bash

set -Eeo pipefail

WORKDIR=/opt/taltech-donald-frontend/

cd $WORKDIR

/usr/bin/env npm run ng serve --host 0.0.0.0
