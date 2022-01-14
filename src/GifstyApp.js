import { useState } from 'react';
import { Search } from './components/Search/Search';
import { RadioWrapper, MainWrapper, AppTitle, RadioLabel, RadioInput, GlobalCss } from './styles';

const GifstyApp = () => {

  const [bgColor, setBgColor] = useState('white');
  const handlebgColor = ev => setBgColor(ev.target.value);

  const theme = {
    bgColor: bgColor,
    Color: bgColor === 'white' ? 'black': 'white',
    inputBg: bgColor,
    inputColor: bgColor !== 'white' ? 'white' : 'black',
    spanColor: bgColor === '#7900FF' ? 'white' : '#7900FF'
  }

  return (
    <MainWrapper theme={theme}>
      <GlobalCss theme={theme} />
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
      <Search theme={theme} />
    </MainWrapper>
  );
}

export default GifstyApp;
