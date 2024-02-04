import IHistoricSearch from '../../interfaces/historic-search.interface';
import './style.scss'

interface IFormSearchComponentProps {
    searchProducts: Function
}

const FormSearch = (props: IFormSearchComponentProps) => {
    return (
        <form className="form" onSubmit={(e) => props.searchProducts(e)} data-testid='form'>
            <div className="form-group">
                <input type="search" name="search" id="search" className="inpt" autoComplete='off' placeholder='Buscar Produto'/>
                <button aria-label='buscar' className='btn' data-testid="buscar">
                    <i className='icon-search' aria-hidden="true"></i>
                </button>
            </div>
        </form>
    )
}

export default FormSearch;