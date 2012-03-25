# Attach the class to window for global accessibility
class window.Step
  
  constructor: (@id, @properties={}) ->
    
    for key,value of @properties
      # A ghetto way to massage camels into snakes...
      key = 'rotate-x' if key is 'rotateX'
      key = 'rotate-y' if key is 'rotateY'
      key = 'rotate-z' if key is 'rotateZ'
      key = 'transition-duration' if key is 'transitionDuration'
      
      console.log "$('##{@id}').data(#{key}, #{value})"
      $("##{@id}").data(key, value)
      
class window.Impress

  @run: ->

    # Load impress.js
    loadImpress(document, window)