import { FormSearch } from '..';

import './style.scss';

const historic = [ {name: ''}]

interface IHeaderComponentProps {
    callBackSearch: Function
}

const HeaderComponent = (props: IHeaderComponentProps) => {
    return (
        <header className="container-header">
            <div className="content-search">
                <FormSearch searchProducts={props.callBackSearch}/>
            </div>
        </header>
    )
}

export default HeaderComponent;