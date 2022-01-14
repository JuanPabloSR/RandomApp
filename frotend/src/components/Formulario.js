import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postParametro } from '../actions';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';

export const Formulario = () => {

    const parametros = useSelector(state => state.parametros);
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const history = useHistory();

    useEffect(() => {
        if (parametros.redirect) {
            history.push(parametros.redirect);
        }
    }, [parametros.redirect, history])

    const onSubmit = data => {
        dispatch(postParametro(data));
    }
    return (
        <div>
            <section>
                <div className="form">
                    <hr></hr>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div >
                            <label htmlFor="valorMinimo">Valor minimo:</label>
                            <input  type="number" {...register("valorMinimo")} />
                        </div>
                        <div >
                            <label htmlFor="valorMaximo">Valor maximo:</label>
                            <input  type="number" {...register("valorMaximo")} />
                        </div>
                        <div >
                            <label htmlFor="cantidadColumnas"># columnas:</label>
                            <input  type="number" {...register("cantidadColumnas")} />
                        </div>
                        <br></br>
                        <button type='submit' className='btn select' disabled={parametros.loading}>
                            {parametros.loading ? "Generando..." : "generar"}
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}
