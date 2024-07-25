import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import SignIn from '..';

describe('SignIn component', () => {
  const onSignIn = jest.fn();
  const error = 'Sign in failed';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the SignIn form correctly', () => {
    render(<SignIn onSignIn={onSignIn} />);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  it('submits the form with the correct data', async () => {
    render(<SignIn onSignIn={onSignIn} />);

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'password123' },
    });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    await waitFor(() => {
      expect(onSignIn).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123',
      });
    });
  });

  it('displays an error message when there is an error', () => {
    render(<SignIn onSignIn={onSignIn} error={error} />);

    expect(screen.getByText(error)).toBeInTheDocument();
  });

  it('displays validation errors when inputs are invalid', async () => {
    render(<SignIn onSignIn={onSignIn} />);

    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/password is required/i)).toBeInTheDocument();
  });
});
