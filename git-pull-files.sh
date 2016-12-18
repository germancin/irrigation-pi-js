#!/bin/bash

git init 
git config --global user.email "german.gonzalez@zumba.com"
git config --global user.name "German Gonzalez"
git remote add origin git@github.com:germancin/irrigation-pi-js.git
git pull origin master
git config branch.master.remote origin
git config branch.master.merge refs/heads/master