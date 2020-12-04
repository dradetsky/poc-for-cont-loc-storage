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

# similar, but we use the example that threads them into the logger
http :4444/quux x-myheader:$RANDOM
http :4444/quux x-myheader:$RANDOM
http :4444/quux x-myheader:$RANDOM
http :4444/quux x-myheader:$RANDOM
# expected output:
# {"message":"sup quux","level":"info","timestamp":"2020-12-04T17:17:07.572Z","bbq":"15730"}
# {"message":"sup quux","level":"info","timestamp":"2020-12-04T17:17:14.049Z","bbq":"28032"}
# {"message":"sup quux","level":"info","timestamp":"2020-12-04T17:17:14.796Z","bbq":"21717"}
# {"message":"sup quux","level":"info","timestamp":"2020-12-04T17:17:15.354Z","bbq":"24962"}
```
