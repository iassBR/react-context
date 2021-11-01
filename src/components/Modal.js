function Modal(props) {
    return (
        <div className='modal'>
            <p>Are you sure you want to delete, { props.title } ?</p>
            <button className='btn btn--alt' onClick={props.onCancel}>Cancelar</button>
            <button className='btn' onClick={props.onCancel}>Confirmar</button>
        </div>
    );
}


export default Modal;