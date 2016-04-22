#!/bin/bash


# Oh boy, let's do some scanning, and sorting. Yes I know my coding sux, deal with it. 
# If you don't like it write your own


Make the directories
mkdir -p /tmp/customerAudit/internal/scan/services/
mkdir -p /tmp/customerAudit/internal/scan/windows/
mkdir -p /tmp/customerAudit/internal/scan/sunrpc/
mkdir -p /tmp/customerAudit/internal/scan/telnet/
mkdir -p /tmp/customerAudit/internal/scan/printers/
mkdir -p /tmp/customerAudit/internal/scan/mssql_databases/
mkdir -p /tmp/customerAudit/internal/scan/oracle_databases/
mkdir -p /tmp/customerAudit/internal/scan/mysql_databases/

######################
# Find Windows Hosts #
######################
echo "Scanning for windows hosts."
WIN_COUNTER=0
         while [  $WIN_COUNTER -lt 254 ]; do
             propecia 10.6.$WIN_COUNTER 445 >> /tmp/customerAudit/internal/scan/services/windows_hosts
             let WIN_COUNTER=WIN_COUNTER+1
         done
echo "Done scanning for windows hosts. FTP is next."


##################
# Find FTP Hosts #
##################
FTP_COUNTER=0
         while [  $FTP_COUNTER -lt 254 ]; do
             propecia 10.6.$FTP_COUNTER 21 >> /tmp/customerAudit/internal/scan/services/ftp_hosts
             let FTP_COUNTER=FTP_COUNTER+1 
         done
echo "Done scanning for FTP hosts. SunRPC is next."


#####################
# Find SunRPC Hosts #
#####################
SRPC_COUNTER=0
         while [  $SRPC_COUNTER -lt 254 ]; do
             propecia 10.6.$SRPC_COUNTER 111 >> /tmp/customerAudit/internal/scan/services/sunrpc_hosts
             let SRPC_COUNTER=SRPC_COUNTER+1
         done

echo "Done scanning for SunRPC hosts. Telnet is next."


#####################
# Find Telnet Hosts #
#####################
TEL_COUNTER=0
         while [  $TEL_COUNTER -lt 254 ]; do
             propecia 10.6.$TEL_COUNTER 23 >> /tmp/customerAudit/internal/scan/services/telnet_hosts
             let TEL_COUNTER=TEL_COUNTER+1
         done
echo "Done scanning for Telnet hosts. Printers are next."


#################
# Find Printers #
################# 
PTR_COUNTER=0      
	while [  $PTR_COUNTER -lt 254 ]; do             
	    propecia 10.6.$PTR_COUNTER 9100 >> /tmp/customerAudit/internal/scan/services/printserver_hosts 
	    let PTR_COUNTER=PTR_COUNTER+1      
	done

echo "Done scanning for Printers. Databases are next."


##################
# Find Databases #
##################
MSSQL_COUNTER=0
         while [  $MSSQL_COUNTER -lt 254 ]; do
             propecia 10.6.$MSSQL_COUNTER 1433 >> /tmp/customerAudit/internal/scan/services/mssql_hosts
             let MSSQL_COUNTER=MSSQL_COUNTER+1
         done

ORA_COUNTER=0
         while [  $ORA_COUNTER -lt 254 ]; do
             propecia 10.6.$ORA_COUNTER 1521 >> /tmp/customerAudit/internal/scan/services/oracle_hosts
             let ORA_COUNTER=ORA_COUNTER+1
         done


MY_COUNTER=0
         while [  $MY_COUNTER -lt 254 ]; do
             propecia 10.6.$MY_COUNTER 3306 >> /tmp/customerAudit/internal/scan/services/mysql_hosts
             let MY_COUNTER=MY_COUNTER+1
         done
echo "Done doing the host discovery. Moving on to nmap'ing each host discovered. Windows hosts are first."


###############################
# Ok, let's do the NMAP files #
###############################

# Windows
for x in `cat /tmp/customerAudit/internal/scan/services/windows_hosts` ; do nmap -sV -O $x > /tmp/customerAudit/internal/scan/windows/$x ; done
echo "Done with Windows."
# FTP
for x in `cat /tmp/customerAudit/internal/scan/services/ftp_hosts` ; do nmap -sV -O $x > /tmp/customerAudit/internal/scan/ftp/$x ; done
echo "Done with FTP."
# SUNRPC
for x in `cat /tmp/customerAudit/internal/scan/services/sunrpc_hosts` ; do nmap -sV -O $x > /tmp/customerAudit/internal/scan/sunrpc/$x ; done
echo "Done with SunRPC."
# Telnet
for x in `cat /tmp/customerAudit/internal/scan/services/telnet_hosts` ; do nmap -sV -O $x > /tmp/customerAudit/internal/scan/telnet/$x ; done
echo "Done with Telnet."
# Printers
for x in `cat /tmp/customerAudit/internal/scan/services/printserver_hosts` ; do nmap -sV -O $x > /tmp/customerAudit/internal/scan/printers/$x ; done
echo "Done with printers."
# SQL Servers
for x in `cat /tmp/customerAudit/internal/scan/services/mssql_hosts` ; do nmap -sV -O $x > /tmp/customerAudit/internal/scan/mssql_databases/$x ; done
echo "Done with MS SQL."
# Oracle Servers
for x in `cat /tmp/customerAudit/internal/scan/services/oracle_hosts` ; do nmap -sV -O $x >> /tmp/customerAudit/internal/scan/oracle_databases/$x ; done
echo "Done with Oracle."
# MySQL Servers
for x in `cat /tmp/customerAudit/internal/scan/services/mysql_hosts` ; do nmap -sV -O $x >> /tmp/customerAudit/internal/scan/mysql_databases/$x ; done
echo "Done with MySQL."
echo " "
echo " "
echo "Done, now check your results."
