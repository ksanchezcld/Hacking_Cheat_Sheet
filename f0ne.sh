#!/bin/bash
#
############################################################################
#                    US Phone Number Generator by DERV                     #
############################################################################
# HELP
#   run the program with -h for help
#
#  ./f0ne.sh -h
#
############################################################################
#
# USES:
#  wget*
#  awk
#  sort**
#  uniq**
#  tr**
#
#  *internet access is required
#
#  **not necessary, but recommended
#
#
############################################################################
#
# CHANGE LOG
#
# revision 6 changes: (8/22/10)
#  -command-line arguments!
#   -to run: ./f0ne.sh [city] [style]
#  -outputs only phone numbers instead of a file (so user can pipe to a file or aircrack)
#  -ex: ./f0ne.sh "albuquerque, nm" 2
#   -this will create all alb numbers with style 555-666-1234 (- separators)
#
#
# revision 5 changes: (8/18/10)
#  -can run independent of crunch - slower, but it works if crunch isn't available
#  -saves to 'name_of_city.txt' instead of generic 'phone.txt'
#  -leeto burrito ascii art
#
# revision 4 changes:
#  -removes duplicates for numbers that don't contain the area code (prefix only)
#
# revision 3 changes:
#  -aircrack-ng passthrough for WPA cracking (saves time/space)
#    -key is outputted to aircrack.txt and script stops immediately if key is found 
#
# revision 2 changes:
#  -menu system to output certain phone number formats
#  -corrected error for cities with spaces in the name
#
############################################################################
#
# ToDo
#   receive city, format, aircrack info as arguments to be more linux-like
#    - just have if [[ $1 != ... everywhere!
#
############################################################################
#
# Note:
#   This script runs MUCH faster if crunch is installed!
#   program looks for crunch in directory /pentest/passwords/crunch/
#   edit the line below if crunch is located elsewhere on your computer:
#
CRUNCH="/home/traie/crunch-3.4/"
#CRUNCH="/derpderp/hurrdurr/./crunch" # for testing if user doesn't have crunch
#
#   crunch can be found here: http://sourceforge.n...runch-wordlist/
#
############################################################################
 
# check if the user needs help
if [[ $1 = 'h' ]] || [[ $1 = '--help' ]] || [[ $1 = '-h' ]] || [[ $1 = 'help' ]] || [[ $1 = '-help' ]]; then
  echo ""
  echo -e "\E[32m       /"
  echo -e "\E[32m      /\`\`/        \E[32mf 0 n e"
  echo -e "\E[32m     /__/"
  echo -e "\E[32m    /__/    \E[37mphone number generator"
  echo -e "\E[39m"
  echo ""
  echo -e "\E[37mabout:"
  echo -e "\E[39m"
  echo "  Phone numbers are a common password choice."
  echo "  Generating every 7-digit phone number for an area code leads to 10 million numbers."
  echo "  There is a website that finds only valid numbers (areacode and prefix) for certain cities."
  echo "  This program uses that website to generate customized lists of phone numbers."
  echo ""
  echo ""
  echo -e "\E[37mhow to use:"
  echo -e "\E[39m"
  echo " Enter the U.S. city, for example 'New York'."
  echo ""
  echo "  Then enter what format you want the phone number stored."
  echo "       1) (555)444-####"
  echo "       2) 555-444-####"
  echo "       3) 555444####"
  echo "       4) 444-####"
  echo "       5) 444####"
  echo ""
  echo "  f0ne will ask if you want to passthrough the results to aircrack-ng to crack WPA."
  echo "    This feature is designed to save time and harddisk space."
  echo "    Enter 'y' to select this option."
  echo "       You will be prompted for the .CAP file containing a WPA handshake,"
  echo "       and the name (SSID) of the access point."
  echo ""
  echo "  If you do not select aircrack-ng passthrough, f0ne will save the numbers to a file."
  echo ""
  echo ""
  echo -e "\E[37mnote:"
  echo "  f0ne uses Crunch to generate phone numbers quickly."
  echo "    The script defaults to /pentest/passwords/crunch/ to locate crunch"
  echo "    If needed, edit f0ne.sh to change the crunch path (LINE 66)"
  echo ""
  echo "  If crunch is not found, f0ne.sh uses a built-in script that is much slower than crunch."
  echo ""
  echo "  f0ne also accepts command-line arguments!"
  echo -e "    Usage:    \E[39m./f0ne.sh \E[32m[CITY] [STYLE]\E[37m"
  echo -e "    Example:  \E[39m./f0ne.sh \E[32m\"albuquerque, nm\" 5\E[37m"
  echo "  When using command-line arguments, f0ne will only output the phone numbers and no other data,"
  echo "   so piping to a file is recommened:"
  echo -e "    \E[39m./f0ne.sh \E[32m\"chicago, il\" 5 \E[36m> chicago.txt\E[37m"
  echo "   This will write all the phone numbers to the file 'chicago.txt'"
  echo -e "\E[39m"
  
  exit 0
fi
 
# trap term/keyboard interrupt signals
trap ITSATRAP INT
trap ITSATRAP TERM
ITSATRAP() {
  killall aircrack-ng 2> /dev/null & 1>  /dev/null
  if [[ $# -eq 0 ]]; then
    echo -e "\E[39m"
    echo -e "\E[31m[!] Keyboard interrupt; exiting\E[39m"
  fi
  
  exit 0
}
 
# banner
if [[ $# -eq 0 ]]; then # only print if user supplied no arguments
echo ""
echo -e "\E[32m       /"
echo -e "\E[32m      /\`\`/        \E[32mf 0 n e"
echo -e "\E[32m     /__/"
echo -e "\E[32m    /__/    \E[37mphone number generator"
echo -e "\E[39m"
echo ""
fi
# check if user has crunch installed
if [[ ! -f "$CRUNCH" ]]; then
  # crunch isn't found; use a built-in shell script instead
  
  # check if user is root; warn about not running as root (chmod!)
  if [[ `users` != 'root' ]] && [[ $# -eq 0 ]]; then
    echo "[+] It is recommened to run this script as root if you do not have crunch installed."
    echo -n "[?] Do you wish to continue? (y/n) "
    read ANSWER
    if [[ "${ANSWER}" = 'n' ]]; then
      exit 0;
    fi
  fi
  
  
  HAS_CRUNCH="0" # variable so we know if we are using CRUNCH or not
  
  if [[ $# -eq 0 ]]; then
  echo ""
  echo -e "\E[31m[!] \E[39mCrunch was not found."
  echo "[-] Creating temporary phone-number-generating script..."
  fi
  
  # create script that generates the last 4 phone numbers to the argument passed
  # as you can see, all this script does is echo (it's harmless)
  echo "#!/bin/bash
trap ITSATRAP INT
trap ITSATRAP TERM
ITSATRAP() {
  exit 0
}
PRE=\$1
COUNT=0
while [ \${COUNT} -lt 10000 ]; do
  TEMP=\${COUNT}
  if [ \${#TEMP} -eq 1 ]; then
    TEMP=\"000\${TEMP}\"
  elif [ \${#TEMP} -eq 2 ]; then
    TEMP=\"00\${TEMP}\"
  elif [ \${#TEMP} -eq 3 ]; then
    TEMP=\"0\${TEMP}\"
  fi
  echo \${PRE}\${TEMP}
  COUNT=\$((COUNT + 1))
done
exit 0" > f0ne-crunch.sh
  # end of script
  
  # change permissions on this temporary script (so we can run it)
  chmod +x f0ne-crunch.sh
  
  # let user know what's up
  if [[ $# -eq 0 ]]; then
    echo -e "\E[33m[-] \E[39mNote: Temporary script f0ne-crunch.sh will be deleted on exit."
  fi
  
  CRUNCH="./f0ne-crunch.sh"
  ## old style would quit ; fuck that!
  ## echo ""
  ## echo "[!] Path to crunch not found! ($CRUNCH)"
  ## echo "[!] Please edit phone.sh Line 40 to the correct path to Crunch"
  ## exit
  
else
  # if crunch is found, use it! (it's much faster than f0ne-crunch.sh)
  HAS_CRUNCH="1"
fi
 
 
 
if [[ $# -eq 0 ]]; then
echo -n -e "\E[32m[+] \E[39mEnter a U.S. City (e.g. \E[32mchicago, il\E[39m): \E[32m"
 
read CITY
 
OUTFILE=$CITY
# OUTFILE is the output file -- where the data is saved to
OUTFILE=${OUTFILE// /}            # strip out the spaces
OUTFILE=${OUTFILE//[^a-zA-Z0-9]/} # leave only alphanumeric characters
OUTFILE=`echo -n $OUTFILE | tr A-Z a-z`  # convert to lowercase
OUTFILE="${OUTFILE}.txt"          # make it a txt file
 
rm -rf ${OUTFILE}                 # remove the output file, just in case; so we don't 'stack' numbers together
 
elif [[ $# -eq 1 ]]; then
CITY=$1
STYLE=3    # default to [areacode][prefix][number] without any separators
OUTFILE="/home/traie/do/Documents/"
 
elif [[ $# -eq 2 ]]; then
CITY=$1
STYLE=$2  # user gave us city and separator!
OUTFILE=""
 
else
echo -e "\E[33m[+] \E[39mError: invalid amount of arguments"
echo ""
echo -e "\E[33m[+] \E[39mProper usage (with examples):"
echo ""
echo -e "\E[33m[+] \E[39m./f0ne.sh \E[32m[CITY]"
echo -e "\E[33m[+] \E[39m   ./f0ne.sh \E[32mchicago"
echo -e "\E[33m[+] \E[39m   ./f0ne.sh \E[32m\"chicago, il\""
echo ""
echo -e "\E[33m[+] \E[39m./f0ne.sh \E[32m[CITY] [STYLE]"
echo -e "\E[33m[+] \E[39m   ./f0ne.sh \E[32mchicago 3"
echo -e "\E[33m[+] \E[39m   ./f0ne.sh \E[32m\"chicago, il\" 3"
echo ""
exit 0
fi
 
# change format of CITY (used for URL request)
CITY=${CITY// /+}                 # website we use can't have spaces; use plus-signs (+) instead
CITY=${CITY//,/+}                 # convert commas to spaces
CITY=${CITY//[^a-zA-Z0-9+]/}      # only alphanumeric characters (and plus signs!)
CITY=`echo -n $CITY | tr A-Z a-z` # finally, lowercase
 
if [[ $# -eq 0 ]]; then
# phone number style menu
echo -e "\E[39m"
echo -e "[-] Select a phone number format:"
echo ""
echo -e "    \E[32m1\E[39m)  (555)555-5555  [13 chars]"
echo -e "    \E[32m2\E[39m)  555-555-1234   [12 chars]"
echo -e "    \E[32m3\E[39m)  5555555555     [10 chars]"
echo -e "    \E[32m4\E[39m)  555-1234       [ 8 chars]"
echo -e "    \E[32m5\E[39m)  5551234        [ 7 chars]"
echo ""
echo -n -e "\E[32m[+]\E[39m Enter a number between \E[32m1\E[39m and \E[32m5\E[39m: \E[32m"
 
read STYLE
fi
 
# check if style (phone number formatting) is a valid menu option
if [[ "$STYLE" -lt "1" ]] || [[ $STYLE -gt "5" ]]; then
# if they picked something < 1 or > 5
  echo -e "\E[31m[!] \E[39mInvalid menu number ($STYLE). Please use 1-5. \E[31mexiting.\E[39m"
  exit 0
fi
 
# if we're not using command-line arguments...
if [[ $# -eq 0 ]]; then
# wpa passthrough question
echo -e "\E[33m[?]\E[39m Do you want to passthrough the phone numbers into "
echo -n -e "     aircrack-ng to crack a WPA handshake capture file? (\E[32my\E[39m/\E[32mn\E[39m): \E[32m"
 
read ANS
 
# if they want to pass through to aircrack-ng...
if [[ "$ANS" == "y" ]]; then
# get .cap path
echo ""
echo -n -e "[+] Enter the \E[32mpath to the .cap file\E[39m containing a WPA handshake: \E[32m"
read CAP
echo -e "\E[39m"
if [[ ! -f "$CAP" ]]; then
# if the .cap file does not exist, gtfo
CAP=""
echo -e "\E[31m[!] \E[39mCAP file \E[31m\'${CAP}\' \E[39mnot found; defaulting output to \E[32m${OUTFILE}\E[39m"
else
# cap file exists, get the ESSID
echo -n -e "[+] Enter the \E[32mESSID\E[39m of the access point: \E[32m"
read ESSID
fi
 
# remove aircrack.txt now -- will contain if/when WPA key is found
rm -f aircrack.txt
 
else
# if CAP="", then we will only output phone numbers to the OUTFILE; no passthrough
CAP=""
fi
 
else
CAP=""
fi
 
# delete temporary files
rm -rf /tmp/page1.txt
rm -rf /tmp/page2.txt
 
# get html from site
if [[ $# -eq 0 ]]; then
echo -e "\E[39m"
echo -e "\E[32m[+] \E[39mGathering area-code and prefix information using wget; please wait..."
fi
 
wget -q -O /tmp/page1.txt http://www.melissada...?number=${CITY}
 
# if wget returned invalid data or nothing at all...
if [[ $(cat /tmp/page1.txt) = "" ]] || [[ ! -f /tmp/page1.txt ]]; then
  echo ""
  echo -e "\E[31m[!]\E[39m Unable to download phone numbers for city '${CITY}'; exiting"
  echo -e "\E[31m[!]\E[39m Unexpected errors occurred while accessing the following site:"
  echo -e "\E[31mhttp://www.melissada...r=${CITY}\E[39m"
  echo -e "\E[31m[!]\E[39m Check to make sure your internet connection is working and this URL provides relevant data."
  
  exit 0
fi
 
# echo "[-] Prefixes gathered.  Parsing..."
 
# the next few lines are pretty ugly
# i don't know much about awk, so I basically juggled the data between two files (page1.txt and page2.txt)
# this is horrible code and I'm sure there's a one-line awk solution to this, but I wasn't able to find it...
 
# grab the beginning of the phone numbers from page1, store in page2
awk ' BEGIN {FS = "?number=" } {print $2} ' /tmp/page1.txt >> /tmp/page2.txt
rm /tmp/page1.txt
 
# strip the end of the number (ignoring the trailing '0000' for each #)
awk ' BEGIN {FS = "0000\"" } {print $1} ' /tmp/page2.txt >> /tmp/page1.txt
rm /tmp/page2.txt
 
# remove blank lines 'cause I suck at awk
awk '$0!~/^$/ {print $0}' /tmp/page1.txt >> /tmp/page2.txt
rm /tmp/page1.txt
 
# if the user selected a menu item larger than 3...
if [[ "${STYLE}" -gt "3" ]]; then
  # we don't need area code!
  while read Lines
  do
  # remove areacode from each line
    echo ${Lines:3} >> /tmp/page1.txt
  done < /tmp/page2.txt
  rm /tmp/page2.txt
  
  # remove duplicates -- this is possible for large cities where different areacodes have the same prefix!
  cat /tmp/page1.txt | sort | uniq > /tmp/page2.txt
  rm /tmp/page1.txt
fi
 
# at this point, /tmp/page2.txt contains all of the [area codes and] prefixes for the city
 
# the following lines/loop counts how many prefixes there are
# this is purely to let the user know how much longer the process will take
COUNT=0                # COUNT will be the total amount of prefixes to generate
CURRENT=0              # CURRENT keeps track of which prefix we are currently working on
while read Line; do    # go through every line in the prefix file
  COUNT=$((COUNT + 1)) # increment counter
done < /tmp/page2.txt  # stop at the end of the file
 
 
 
# loop through every areacode/prefix
while read Line
do
  # if we are passing through to aircrack and we've cracked it, stop!
  if [[ ! "$CAP" == "" ]] && [[ -f "aircrack.txt" ]]; then
    break
  fi
  
  # sometimes the website returns only 3 digits (invalid numbers)
  # i hit this error briefly, might have been isolated, but still gonna check for it!
  if [[ "${STYLE}" -lt "4" ]] && [[ ${#Line} -eq 3 ]]; then
    continue # move onto the next one
  fi
  
  CURRENT=$((CURRENT + 1)) # increment counter of how many prefixes we've done
  
  # format the line to fit the style
  if [ $STYLE = '1' ]; then
    # Style: (###)###-@@@@
    Line="(${Line:0:3})${Line:3}-"
    LEN=13
 
  elif [ $STYLE = '2' ]; then
    # Style: ###-###-@@@@
    Line="${Line:0:3}-${Line:3}-"
    LEN=12
 
  elif [ $STYLE = '3' ]; then
    # Style: ######@@@@
    Line=${Line} #nothing changes
    LEN=10
 
  elif [ $STYLE = '4' ]; then
    # Style: ###-@@@@
    Line="${Line}-"
    LEN=8
 
  elif [ $STYLE = '5' ]; then
    # Style: ###@@@@
    LEN=7
  fi
  
  # now that we know the format, see if we are passing through to aircrack or OUTFILE
  if [[ ! "$CAP" == "" ]]; then
    # cap file exists, need to pass through to aircrack
    
    echo -e "\E[32m[+] \E[39mPassing through to aircrack-ng: \E[32m${Line}####\E[39m..."
    
    if [[ HAS_CRUNCH = '1' ]]; then
      ${CRUNCH} $LEN $LEN 0123456789 -t ${Line}@@@@ | aircrack-ng -l aircrack.txt -w - -e ${ESSID} ${CAP}
      
    else
      ${CRUNCH} "${Line}" | aircrack-ng -l aircrack.txt -w - -e ${ESSID} ${CAP}
    fi
    
  else
    # no cap file, just output to OUTFILE
    
    # if user didn't supply any arguments (we're in verbose mode)
    if [[ $# -eq 0 ]]; then
    echo -e "\E[32m[+] \E[39mGenerating phone numbers: \E[32m${Line}####\E[39m... (${CURRENT}/${COUNT})"
    
    if [[ HAS_CRUNCH -eq 1 ]]; then
      ${CRUNCH} $LEN $LEN 0123456789 -t ${Line}@@@@ >> "${OUTFILE}"
     
    else
      ${CRUNCH} "${Line}" >> "${OUTFILE}"
    fi
   
    else
    # user supplied arguments, ONLY OUTPUT VALID NUMBERS!
    if [[ HAS_CRUNCH -eq 1 ]]; then
      ${CRUNCH} $LEN $LEN 0123456789 -t ${Line}@@@@
     
    else
      ${CRUNCH} "${Line}"
    fi
    fi
    
  fi
done < /tmp/page2.txt
 
# at this point, we're done generating!
 
# delete temporary file containing area codes/prefixes
rm /tmp/page2.txt
 
if [[ ! "$CAP" == "" ]]; then
# if we were trying to passthrough
  echo -n -e "\E[32m[!]\E[39m Finished! "
  
  if [[ -f "aircrack.txt" ]]; then
# if we cracked it
    echo -e "\E[32mPassword found: " + $(cat aircrack.txt)
    echo -e "\E[32m[!] Saved to 'aircrack.txt'"
  else
# if we didn't crack it
    echo -e "\E[31mPassword not found."
  fi
  
else
# if we were just generating phone numbers
  if [[ $# -eq 0 ]]; then
  echo ""
  echo -e "\E[32m[!] Finished;\E[39m results are saved in \E[32m${OUTFILE}\E[39m"
  fi
fi
 
# if we used the crunch script, delete it
if [[ $HAS_CRUNCH -eq 0 ]]; then
  rm -rf f0ne-crunch.sh
fi
 
# print out a single white line so the next lines the user types/sees will be white (normal)
if [[ $# -eq 0 ]]; then
echo -e "\E[39m"
fi
 
exit 0