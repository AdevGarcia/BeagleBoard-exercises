# Get fpp image here: https://github.com/FalconChristmas/fpp/releases
# Scroll down past source code to find images
# In xLights, follow the instructions in the case study in the PRU Cookbook.

# To get up more than one panel, 
# In fpp
#	Go to Input/Output Setup:Channel Inputs
#	Set Universe Count to 36, Click Save. restart FPPD
#	
#	go to Input/Output Setup:Channel Outputs
#	Set Panel Layout (WxH) to 3x1
#	Click Save and restart FPPD
#	On the LED Panel Layout: set the panles to P-3, P-2, P-1
# In xLights
#	Got to Setup lab and click E1.31 Setup
#	Unicast, IP address of Beagle, Starting Universe 1, # of Universes 36, Last Channel 512
#	Click Save
