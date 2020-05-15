#!/bin/bash

log=log_file.txt
email=email.txt
 
# create log file or overrite if already present
printf "Log File - " > $log
 
# append git diff to log file
git diff branch >> $log 

# find H2 tag in diff
result=$(grep -n '##' "$log")
size=${#result}
  if [ $size > 0 ]
  then
    # append data to email
    printf '%s\n' "${result[@]}" > $email
    # send mail to email address
    node email.js
  else
    echo no data
  fi

