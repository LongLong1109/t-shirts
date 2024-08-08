import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import SignUp from '..';

describe('SignUp component', () => {
  const onSignUp = jest.fn();
  const error = 'Sign up failed';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the SignUp form correctly', () => {
    render(<SignUp onSignUp={onSignUp} />);

    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByLabelText('Entry Password Again')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Sign Up/i })).toBeInTheDocument();
  });

  it('submits the form with the correct data', async () => {
    render(<SignUp onSignUp={onSignUp} />);

    fireEvent.change(screen.getByLabelText(/first name/i), {
      target: { value: 'John' },
    });
    fireEvent.change(screen.getByLabelText(/last name/i), {
      target: { value: 'Doe' },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: 'password123' },
    });
    fireEvent.change(screen.getByLabelText('Entry Password Again'), {
      target: { value: 'password123' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Sign Up/i }));

    await waitFor(() => {
      expect(onSignUp).toHaveBeenCalledWith({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        password: 'password123',
        entryPassword: 'password123',
      });
    });
  });

  it('displays an error message when there is an error', () => {
    render(<SignUp onSignUp={onSignUp} error={error} />);

    expect(screen.getByText(error)).toBeInTheDocument();
  });

  it('displays validation errors when inputs are invalid', async () => {
    render(<SignUp onSignUp={onSignUp} />);

    fireEvent.click(screen.getByRole('button', { name: /Sign Up/i }));

    expect(await screen.findAllByText(/this field is required/i)).toHaveLength(2);
  });

  it('displays password mismatch error', async () => {
    render(<SignUp onSignUp={onSignUp} />);

    fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: 'password123' },
    });
    fireEvent.change(screen.getByLabelText('Entry Password Again'), {
      target: { value: 'password456' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Sign Up/i }));

    expect(await screen.findByText(/passwords do not match/i)).toBeInTheDocument();
  });
});
