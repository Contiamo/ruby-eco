CoffeeScript = require "coffee-script"
{preprocess} = require "./preprocessor"
{indent}     = require "./util"

exports.precompile = precompile = (source) ->
  script = CoffeeScript.compile preprocess(source), noWrap: true

  """
    eco(
      function(__out, __capture, __sanitize, __safe, __objSafe, __escape){
    #{indent script, 4}
      }
    )
  """

exports.compile = (source) ->
  do new Function "return #{precompile source}"