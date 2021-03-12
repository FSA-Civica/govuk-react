import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { H3 } from '@slice-and-dice/govuk-react-heading';
import UnorderedList from '@slice-and-dice/govuk-react-unordered-list';
import Link from '@slice-and-dice/govuk-react-link';
import ListItem from '@slice-and-dice/govuk-react-list-item';

import RelatedItems from '.';

const wrapper = (
  <RelatedItems>
    <H3>Travel abroad</H3>
    <UnorderedList listStyleType="none">
      <ListItem>
        <Link href="https://example.com">Link A</Link>
      </ListItem>
      <ListItem>
        <Link href="https://example.com">Link B</Link>
      </ListItem>
      <ListItem>
        <Link href="https://example.com">
          <strong>more</strong>
        </Link>
      </ListItem>
    </UnorderedList>
  </RelatedItems>
);

describe('RelatedItems', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(wrapper, div);
  });

  it('matches wrapper snapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('wrapper mount');
  });
});
