#!/usr/bin/env sh

set -Eeo pipefail

WORKDIR=/opt/taltech-donald-frontend/

cd $WORKDIR

/usr/bin/env npm run build
