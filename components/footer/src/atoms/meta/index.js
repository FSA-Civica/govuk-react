import styled from 'styled-components';
import { GUTTER_HALF } from '@slice-and-dice/govuk-react-constants';
import { typography } from '@slice-and-dice/govuk-react-lib';

const Meta = styled('div')(
  {
    display: 'flex',
    marginRight: `-${GUTTER_HALF}`,
    marginLeft: `-${GUTTER_HALF}`,
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  typography.common()
);

export default Meta;
