```
jspm install
npm install
gulp
```

It uses https to localhost so it remembers that you allowed access to the microphone. You have to accept the untrusted cert to get it going though.

Put some music on, make sure your laptop microphone is selected and at a good volume (max, probably), then see if the dark red lines are on the beat!

The blue line is 1.8 times the average of the past 512 red values. Red values are detected as 'maybe beats' (and are dark) when they're above the blue line.
