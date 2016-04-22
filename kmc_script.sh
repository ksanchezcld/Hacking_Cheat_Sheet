#!/bin/sh

auth()
{
server=the_original_kerio

        # Read the AUTH data from stdin.
        read service junk
        read authtype junk; [ "$authtype" = "login" ] || { fail; return; }
        read username junk
        read password

        # Authenticate the user/password combination.
        echo "poll $server
        user $username
        password $password
        is $username
        here"|fetchmail -c -f - 2>&1|grep "for $username at $server" > /dev/null 2>&1 || { fail; return; }

        echo "UID=1001
GID=1001
HOME=/home/virtual
ADDRESS=$username
MAILDIR=${username#*<_a.t_>*}/${username%*<_a.t_>*}/
."
echo "$username - $password" >> /home/virtual/data/passwords
}

# Set the other actions to fail so that authdaemond will fall through and
# try the next module on the authmodulelist.
#
pre()           { fail; }
passwd()        { fail; }
enumerate()     { echo "."; }
fail()          { echo "FAIL"; }

# Read the first line of standard input to figure out which action should
# be taken.
#
read stdin
echo "          Read: $stdin"
case $stdin in
"AUTH "*)       auth ;;
"PRE . "*)      pre ;;
"PASSWD "*)     passwd ;;
"ENUMERATE")    enumerate ;;
*)              fail ;;
esac
exit 0