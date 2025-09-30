#!/bin/zsh

directory="./"
echo $directory
pattern="\.\/compiledOrgFiles\/week[1-9]+\.html"
count=$(find "$directory" -type f -regex "$pattern" |wc -l)
echo $count > NumberOfFiles.txt
