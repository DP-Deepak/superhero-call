import React from 'react';
import { getQuery } from '../../api/api';
import { SharedSnackbarConsumer } from '../../context/SharedSnackbar.context';

import Button from './Button';
import Screen from './Screen';
import {
  Wrapper, Parent,
} from './styles';

class Keypad extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  updateValue = (value) => {
    this.setState({ value })
  }
  handleClick = (e) => {
    this.updateValue(this.state.value + '' + e.target.value)
  }
  getHeroName = async (openSnackbar) => {
    const { value } = this.state
    const code = value.substring(0, 2);
    if (value.trim()) {
      if (code === '0 ') {
        const res = await getQuery(`call/?num=${value.toString().substring(2)}`)
        if (res.status === 200) {
          this.updateValue(res.data)
          openSnackbar('Calling........')
        } else {
          openSnackbar('Invalid Phone number!')
          this.updateValue('')
        }
      } else openSnackbar('Incorrect code, Please use 0#')
    } else {
      openSnackbar('Please enter a phone number!')
    }
  }

  render() {
    const { value } = this.state
    console.log('value: ', value);

    return (
      < SharedSnackbarConsumer >
        {({ openSnackbar }) => {
          return <>
            <Parent>
              <Wrapper />
              <Wrapper>
                <Screen value={value.trim() || 'Dial...'} />
                <Button value="1" id="one" onClick={this.handleClick} />
                <Button value="2" id="two" onClick={this.handleClick} />
                <Button value="3" id="three" onClick={this.handleClick} />
                <Button value="4" id="four" onClick={this.handleClick} />
                <Button value="5" id="five" onClick={this.handleClick} />
                <Button value="6" id="six" onClick={this.handleClick} />
                <Button value="7" id="seven" onClick={this.handleClick} />
                <Button value="8" id="eight" onClick={this.handleClick} />
                <Button value="9" id="nine" onClick={this.handleClick} />
                <Button value="call" id="call" onClick={() => this.getHeroName(openSnackbar)} />
                <Button value="0" id="zero" onClick={this.handleClick} />
                <Button value="#" id="space" onClick={(e) => this.updateValue(value + ' ')} />
                <Button value="Clear" id="clear" size="true" onClick={() => this.updateValue('')} />
              </Wrapper>
            </Parent>
          </>
        }
        }
      </SharedSnackbarConsumer>
    );
  }
}

export default Keypad;
