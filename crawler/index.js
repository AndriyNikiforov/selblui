'use strict';

const Crawler = require('crawler');


const c = new Crawler({
  maxConnections: 10,
  callback: (err, res, done) => {
    if(err) console.error(err);

    const $ = res.$;
    console.log($('title').text());
  }
});

c.queue({
  uri: 'http://www.google.com/',
  jQuery: {
    name: 'cheerio',
    options: {
      normalizeWhitespace: true,
      decodeEntities: true
    }
  },
  callback: (err, res, done) => {
    if(err) console.error(err);

    const $ = res.$;

    console.log($('title').text());
    console.log('Length ', res.body.length);
    console.log('Status code ', res.statusCode);

    done();
  }
});
