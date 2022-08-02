#!/usr/bin/env sh

set -e 

npm run build 

cd dist

git add .

git commit -am "updateing deploy"

git push -f https://github.com/RyanQ96/RyanQ96.github.io.git master:gh-pages

cd -