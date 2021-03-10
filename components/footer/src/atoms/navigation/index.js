import styled from 'styled-components';
import { GUTTER_HALF } from '@slice-and-dice/govuk-react-constants';

const NavigationContainer = styled('div')({
  display: 'flex',
  marginRight: `-${GUTTER_HALF}`,
  marginLeft: `-${GUTTER_HALF}`,
  flexWrap: 'wrap',
});

export default NavigationContainer;
