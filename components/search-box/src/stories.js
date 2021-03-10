import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocsCustom } from '@govuk-react/storybook-components';

import Layout from '@slice-and-dice/govuk-react-layout';
import GridRow from '@slice-and-dice/govuk-react-grid-row';
import GridCol from '@slice-and-dice/govuk-react-grid-col';

import SearchBox from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Form/SearchBox', module);

stories.addDecorator(withDocsCustom(ReadMe));

stories.add('Component default', () => (
  <Layout>
    <GridRow>
      <GridCol>
        <SearchBox placeholder="Search GOV.UK">SearchBox example</SearchBox>
      </GridCol>
    </GridRow>
  </Layout>
));
