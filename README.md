# Simple experimentations with Redis, express, socket.io on nodejs

### Using version 3.2.4 of redis

1. Run **redis-server**:
```bash
$ docker run --name my-redis -p 16379:6379 -d redis:3.2.4
````

2. Run **redis-cli** from docker image and expose the redis-cli port:
```bash
$ docker run -it  --link my-redis:redis --rm redis redis-cli -h redis -p 6379
```

> more to come