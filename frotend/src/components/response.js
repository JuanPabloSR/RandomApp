import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getParametro } from '../actions';


export const Response = ({ match }) => {

    const parametros = useSelector(state => state.parametros);
    const dispatch = useDispatch();
    const { id } = match.params;

    const volver = () => {
        window.location.href = "/";
    }

    useEffect(() => {
        dispatch(getParametro(id))
    }, [id])

    return (
        <div className='container form'>
            <h5 className='text-center mb-3'>Lista random: </h5>
            <div className="row">
                {parametros?.data?.randomList?.map((lista, key) =>
                    <div className="col-md-auto">
                        <ul id='columnas' >
                            Columna
                            {lista.map((numero, key) =>
                                <div>
                                    {numero}
                                </div>
                            )}
                            <br></br>
                        </ul>
                    </div>)}
            </div>
            <br />
            <button className='btn select' onClick={() => volver()}>volver</button>
        </div>
    )
}
