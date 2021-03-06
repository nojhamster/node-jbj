/*jshint node:true,laxcomma:true*/
/* global describe, it */
'use strict';
var assert = require('assert')
  , JBJ = require('..');

describe('json', function () {

  var input = {
    "a" : {
      "b" : ["x","y","z"],
      "d" : null
    }
  };

  it('json #1', function() {
    var stylesheet = {
      "$e" : {
        "find#0": "a",
        "mask": "b",
        "find#1": "b",
        "json" : ",",
      }
    };
    var output = JBJ.renderSync(stylesheet, input);
    assert.equal(output.e, "[\"x\",\"y\",\"z\"]");
  });

 it('json #2', function() {
    var stylesheet = {
      "find": "a.b",
      "json" : true,
      "parseJSON": true
    };
    var output = JBJ.renderSync(stylesheet, input);
    assert.equal(output[0], "x");
    assert.equal(output[1], "y");
    assert.equal(output[2], "z");
  });

});
