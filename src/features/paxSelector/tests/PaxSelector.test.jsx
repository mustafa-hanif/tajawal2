import * as React from 'react';
import { render } from '@testing-library/react';
import PaxSelector from '../PaxSelector';

describe('Performs and renders pax selector properly', () => {
  it('Renders the selector properly', () => {
    const { getByTestId } = render(<PaxSelector />);
  
    const adult = getByTestId('pax-adult');
    expect(adult).toHaveTextContent('Adult');

    const child = getByTestId('pax-child');
    expect(child).toHaveTextContent('Child');

    const infant = getByTestId('pax-infant');
    expect(infant).toHaveTextContent('Infant');
  })

  it('Adds normal pax properly', () => {
    const { getByTestId } = render(<PaxSelector />);
    
    const adultBtn = getByTestId('pax-adult-add-btn');
    adultBtn.click();
    adultBtn.click();
  
    const adult = getByTestId('pax-adult-count');
    expect(adult).toHaveTextContent('2');
  });


  it('Max handling is ok', () => {
    const { getByTestId } = render(<PaxSelector />);
    
    const adultBtn = getByTestId('pax-adult-add-btn');
    adultBtn.click();
    adultBtn.click();
    adultBtn.click();
    adultBtn.click();

    const infant = getByTestId('pax-infant-add-btn');
    infant.click();
    infant.click();
    infant.click()

    const child = getByTestId('pax-child-add-btn');
    child.click();
    child.click();
    child.click();
  
    const adult = getByTestId('pax-adult-count');
    expect(adult).toHaveTextContent('4');

    adultBtn.click();
    expect(adult).toHaveTextContent('4');
  });

  it('Infant handling is ok', () => {
    const { getByTestId } = render(<PaxSelector />);
    
    const adultBtn = getByTestId('pax-adult-add-btn');
    adultBtn.click();
    adultBtn.click();

    const infantBtn = getByTestId('pax-infant-add-btn');
    infantBtn.click();
    infantBtn.click();

    const infant = getByTestId('pax-infant-count');    
    expect(infant).toHaveTextContent('2');
    
    infantBtn.click();
    expect(infant).toHaveTextContent('2');

    const adultMinusBtn = getByTestId('pax-adult-remove-btn');
    adultMinusBtn.click();

    const adult = getByTestId('pax-adult-count');

    expect(infant).toHaveTextContent('1');
    expect(adult).toHaveTextContent('1');
  });
})
