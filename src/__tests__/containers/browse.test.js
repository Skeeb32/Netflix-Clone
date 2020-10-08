import React from 'react';
import { render } from '@testing-library/react';
import { BrosweContainer } from '../../containers/browse';

jest.mock('react-router-dom');

it('renders the <Card /> with and clicks the card feature', () => {
    const { container, queryByText, getByAltText, getByTestId } = render(
        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
            City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
            futile attempt to feel like he's part of the world around him.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
    );

    expect(queryByText('18')).toBeFalsy();
    fireEvent.click(getByTestId('tiger-king-item-feature'));
    expect(queryByText('18')).toBeTruthy();

    fireEvent.click(getByAltText('Close'));
    expect(queryByText('18')).toBeFalsy();

    expect(queryByText('PG')).toBeFalsy();
    fireEvent.click(getByTestId('juno-item-feature'));
    expect(queryByText('PG')).toBeTruthy();

    fireEvent.click(getByAltText('Close'));
    expect(queryByText('PG')).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
