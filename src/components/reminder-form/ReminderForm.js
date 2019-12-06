import React, { useState } from 'react'
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import DatePicker from 'react-date-picker'
import TimePicker from 'react-time-picker'

const ReminderForm = (props) => {
  const [text, setText] = useState(props.reminder ? props.reminder.text : '')
  const [date, setDate] = useState(props.reminder ? props.reminder.date : null)
  const [time, setTime] = useState(props.reminder ? props.reminder.time : null)
  const [location, setLocation] = useState(props.reminder ? props.reminder.location : '')
  const [list, setList] = useState(props.reminder ? props.reminder.list : '')
  const [isCompleted, setIsCompleted] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setIsCompleted(false)
    props.onSubmit({ text, date, time, location, list, isCompleted })
    setText('')
    setDate(null)
    setTime(null)
    setLocation('')
    setList('')
  }

  return (
    <Grid centered columns={1}>
      <Grid.Column>
        <Form>
          <Segment>
            <Form.Input
              className='form-element'
              fluid
              placeholder='Remind me to...'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Form.Input
              className='form-element'
              fluid
              icon='location arrow'
              iconPosition='left'
              placeholder='At a Location'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <Form.Input
              className='form-element'
              fluid
              icon='flag'
              iconPosition='left'
              placeholder='Add to a List'
              value={list}
              onChange={(e) => setList(e.target.value)}
            />
            <Segment>
              <DatePicker
                className='form-element'
                value={date}
                onChange={setDate}
              />
            </Segment>
            <Segment>
              <TimePicker
                className='form-element'
                value={time}
                onChange={setTime}
              />
            </Segment>
          </Segment>
          <Button className='button' fluid size='medium' onClick={onSubmit}>Done</Button>
        </Form>
      </Grid.Column>
    </Grid>
  )
}
export { ReminderForm as default }