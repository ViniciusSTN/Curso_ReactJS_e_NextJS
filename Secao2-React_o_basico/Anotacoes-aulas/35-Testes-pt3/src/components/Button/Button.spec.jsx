import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '.';

describe('<Button />', () => {
  it('should render the button with the text "Load more"', () => {
    render(<Button text="Load more" />);
    expect.assertions(1); // espera ter exatamente uma assertions -> comum em async

    const button = screen.getByRole('button', { name: /load more/i });
    // expect(button).toHaveAttribute('class', 'sdgdfgd'); // importante ver o teste falhar para testar o test
    expect(button).toBeInTheDocument();
  });

  it('should call function on button click', () => {
    const fn = jest.fn(); // mock para simular a função chamada no onlick
    render(<Button text="Load more" onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    userEvent.click(button); // simula click no botão

    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled is true', () => {
    render(<Button text="Load more"  disabled={true} />);
    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeDisabled();
  });

  it('should be enabled when disabled is false', () => {
    render(<Button text="Load more"  disabled={false} />);
    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeEnabled();
  });

  it('should match snapshot', () => {
    const {container} = render(<Button text="Load more"  disabled={false} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
