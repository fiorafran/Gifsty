import { useState } from 'react';
import { Search } from './components/Search/Search';
import { RadioWrapper, MainWrapper, AppTitle, RadioLabel, RadioInput } from './styles';

const GifstyApp = () => {

  const [bgColor, setBgColor] = useState('');
  const handlebgColor = ev => setBgColor(ev.target.value);
  console.log(bgColor)
  const theme = {
    bgColor: bgColor,
    Color: bgColor === 'white' ? 'black': 'white',
  }

  return (
    <MainWrapper theme={theme}>
      <RadioWrapper>
        <RadioLabel onClick={handlebgColor}>
          White
          <RadioInput type="radio" name="radioColor" value='white'/>
        </RadioLabel>
        <RadioLabel onClick={handlebgColor}>
          Black
          <RadioInput type="radio" name="radioColor" value='black'/>
        </RadioLabel>
        <RadioLabel onClick={handlebgColor}>
          Purple
          <RadioInput type="radio" name="radioColor" value='#7900FF'/>
        </RadioLabel>
      </RadioWrapper>
      <AppTitle>Gifsty</AppTitle>
      <Search/>
    </MainWrapper>
  );
}

export default GifstyApp;
