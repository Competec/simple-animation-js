#!/bin/bash
cd docs/simple-animation-js/
rm -rf current
DIR=`ls -td -- * | head -n 1`
mkdir current
cd $DIR
cp -r * ../current/
echo $DIR