import subprocess, signal
import webbrowser
import time
import os

print '\t ##################################################'
print '\t ## My website is https://swe.umbc.edu/~xinliu1/ ##'
print '\t ##################################################'

url = 'https://swe.umbc.edu/~xinliu1/'
refresh = input("Enter refresh rate (seconds) (Suggested 5 ): ")
brow = 'chrome'

def OpenUrl():
	p = subprocess.Popen(['ps', '-A'], stdout=subprocess.PIPE)
	out, err = p.communicate()
	# os.system("pkillall -9  -x " + brow)
	for line in out.splitlines():
		if brow in line:
			pid = int(line.split(None, 1)[0])
			os.kill(pid, signal.SIGKILL)
			
	webbrowser.open(url)
	print("Successfully Viewed. ")
	time.sleep(int(refresh))

for i in range (5):
	OpenUrl()

