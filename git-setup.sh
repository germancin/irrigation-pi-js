#!/bin/bash

git init 
git remote add origin git@github.com:germancin/irrigation-pi-js.git
git pull origin master
git config branch.master.remote origin
git config branch.master.merge refs/heads/master