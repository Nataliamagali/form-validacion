import React from 'react';
import { useForm } from 'react-hook-form';
import './Form.css';

const Form = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    const password = watch('password', '');

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Nombre</label>
                    <input
                        {...register('firstName', { required: true, minLength: 2 })}
                    />
                    {errors.firstName && errors.firstName.type === 'minLength' && (
                        <p className="error-message">El nombre debe tener al menos 2 caracteres</p>
                    )}
                </div>

                <div>
                    <label>Apellido</label>
                    <input
                        {...register('lastName', { required: true, minLength: 2 })}
                    />
                    {errors.lastName && errors.lastName.type === 'minLength' && (
                        <p className="error-message">El apellido debe tener al menos 2 caracteres</p>
                    )}
                </div>

                <div>
                    <label>Correo Electrónico</label>
                    <input
                        type="email"
                        {...register('email', { required: true, minLength: 5 })}
                    />
                    {errors.email && errors.email.type === 'minLength' && (
                        <p className="error-message">El correo electrónico debe tener al menos 5 caracteres</p>
                    )}
                </div>

                <div>
                    <label>Contraseña</label>
                    <input
                        type="password"
                        {...register('password', { required: true, minLength: 8 })}
                    />
                    {errors.password && errors.password.type === 'minLength' && (
                        <p className="error-message">La contraseña debe tener al menos 8 caracteres</p>
                    )}
                </div>

                <div>
                    <label>Confirmar Contraseña</label>
                    <input
                        type="password"
                        {...register('confirmPassword', {
                            required: true,
                            validate: (value) => value === password || 'Las contraseñas no coinciden',
                        })}
                    />
                    {errors.confirmPassword && (
                        <p className="error-message">{errors.confirmPassword.message}</p>
                    )}
                </div>

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Form;
