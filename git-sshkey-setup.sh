#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )" 

echo "Creating keypair"
ssh-keygen -t rsa -b 4096 -C "german.gonzalez@zumba.com"
vim ~/.ssh/id_rsa.pub
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
echo "Copies the contents of the id_rsa.pub file to your clipboard"
echo "In the upper-right corner of any page, click your profile photo, then click Settings."
echo "In the user settings sidebar, click SSH and GPG keys."
echo "Click New SSH key or Add SSH key."
echo "go to https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/"
echo "And follow the instructions"

