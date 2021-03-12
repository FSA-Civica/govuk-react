import styled from 'styled-components';
import { MEDIA_QUERIES } from '@slice-and-dice/govuk-react-constants';
import { spacing, typography } from '@slice-and-dice/govuk-react-lib';

const TabsTitle = styled('h2')(typography.font({ size: 19 }), {
  marginBottom: spacing.simple(1),
  [MEDIA_QUERIES.TABLET]: {
    display: 'none',
  },
});

export default TabsTitle;
