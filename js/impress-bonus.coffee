# Attach the class to window for global accessibility
class window.Step
  
  constructor: (@content, @properties={}) ->
    
    # Add this step to window.steps
    window.steps or= []
    steps.push(this)

  # Convert object properties to a string of HTML5 data attributes
  dataProps: ->
    morsels = []
    for key,value of @properties        

      # A ghetto way to massage camels into snakes...
      key = 'rotate-x' if key is 'rotateX'
      key = 'rotate-y' if key is 'rotateY'
      key = 'rotate-z' if key is 'rotateZ'
      key = 'transition-duration' if key is 'transitionDuration'

      # Skip 'class'
      morsels.push "data-#{key}='#{value}'" unless key is 'class'
    
    console.log morsels.join(" ")
    morsels.join(" ")
      
  to_html: ->
    "<div class='step #{@properties.class}' #{@dataProps()}>#{@content}</div>"
      
class window.Impress

  @run: ->
    # Create the #impress container
    $('body').add('div').attr('id', 'impress')

    # Add steps to #impress
    for step in steps
      $("#impress").append step.to_html()

    # Load impress.js
    loadImpress(document, window)