import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const GridExampleColumns = (props) => (
  <Grid>
    <Grid.Row>
      <Grid.Column width={props.width}>
        <Image src='/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column width={props.width}>
        <Image src='/images/wireframe/paragraph.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={props.width}>
        <Image src='/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column width={props.width}>
        <Image src='/images/wireframe/paragraph.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleColumns