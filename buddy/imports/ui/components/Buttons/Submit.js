import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const ButtonExampleAnimated = () => (
  <div>
  
    <Button animated='vertical'>
      <Button.Content hidden>Submit</Button.Content>
      <Button.Content visible>
        <Icon name='thumbs up outline' />
      </Button.Content>
    </Button>
 
  </div>
)

export default ButtonExampleAnimated