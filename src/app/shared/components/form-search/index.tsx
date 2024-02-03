import IHistoricSearch from '../../interfaces/historic-search.interface';
import './style.scss'

const historic = [
    {
        name: 'teste'
    }
]
interface IFormSearchComponentProps {
    searchProducts: Function
}

const FormSearch = (props: IFormSearchComponentProps) => {
    return (
        <form className="form" onSubmit={(e) => props.searchProducts(e)}>
            <div className="form-group">
                <input type="search" name="search" id="search" className="inpt" autoComplete='off' placeholder='Buscar Produto'/>
                <button aria-label='buscar' className='btn'>
                    <i className='icon-search' aria-hidden="true"></i>
                </button>
            </div>
        </form>
    )
}

export default FormSearch;