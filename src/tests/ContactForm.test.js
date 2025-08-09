import { fireEvent, render, screen } from '@testing-library/react';
import ContactForm from '../components/ContactForm';

test('renderiza inputs de nome, email e telefone', () => {
    render(<ContactForm />);

    expect(screen.getByLabelText(/nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Telefone/i)).toBeInTheDocument();
});

test('chama onSubmit com dados carros', () =>{
    const handleSubmit = jest.fn(); //faz uma sumulação de envio.
    render(<ContactForm onSubmit={handleSubmit}/>);

    fireEvent.change(screen.getByLabelText(/nome/i), {target: {value: 'Ana'}});  //pega os campos e vai simular para ver se tem esse valores
    fireEvent.change(screen.getByLabelText(/email/i), {target: {value: 'ana@gmail.com'}});
    fireEvent.change(screen.getByLabelText(/Telefone/i), {target: {value: '11999999999'}});

    fireEvent.submit(screen.getByRole('form'));  // vai simular o prencimento do formulario.

    expect(handleSubmit).toHaveBeenCalledWith({
        nome: 'Ana',
        email: 'ana@gmail.com',
        telefone: '11999999999'
    }); // e uma expequitativa para que tenha esse elementos.
});//testa para ver se esse dados foram submetidos ao banco de dados.  