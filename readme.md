poc for cls/cls-middleware
==========================

usage
-----

```
# run server
node index.js
# send several messages in rapid succession
http :4444/bar x-myheader:$RANDOM
http :4444/bar x-myheader:$RANDOM
http :4444/bar x-myheader:$RANDOM
http :4444/bar x-myheader:$RANDOM
# expected output: something like
#
# timeout: 30148
# timeout: 22098
# timeout: 8096
# timeout: 22480
```
