import React, {useState} from "react"

const ContactForm = ({onSubmit}) => {
    const [formData, setFormData] = useState({nome: '',email: '', telefone: ''});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };

    const hendleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    }
      return(
        <form role="form" onSubmit={hendleSubmit}>
            <label>
                Nome
                <input type="text" name="nome" value={formData.nome} onChange={handleChange}/>
            </label>
            <label>
                Email
                <input type="email" name="email" value={formData.email} onChange={handleChange}/>
            </label>
            <label>
                Telefone
                <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange}/>
            </label>
        </form>
    );
};



export default ContactForm;