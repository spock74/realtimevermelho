var express = require('express'),
  config = require('./config.js'),
  process = require('process'),
  redis = require('redis');
  io = require('socket.io')

var r = '<html><head></head><body><h1>Our redis app</h1> <p>Redis count: ';
var r2 = '</p></body></html>';


var app = express();

var redisClient = redis.createClient(config.redis_port, config.redis_host);
var publishClient = redis.createClient(config.redis_port, config.redis_host);
redisClient.on('message', (channel, message) => {
  console.log(message);
});

redisClient.subscribe('REQUESTS');

app.get('/', (req, res) => {
  publishClient.publish('REQUESTS', `Request on ${req.socket.localPort} for ${req.url}`);
  console.log(`local log for ${req.url}`)
  res.end();
});

app.listen(process.argv[2]);