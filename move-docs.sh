#!/bin/bash
cd docs/simple-animation-js/
DIR=`ls -td -- * | head -n 1`
cd $DIR
mv * ../../
cd ../..
rm -rf simple-animation-js