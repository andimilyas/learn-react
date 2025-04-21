import { useState } from 'react';

const useForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();  
    } 

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return { formData, handleChange, handleSubmit };
}

export default useForm;
