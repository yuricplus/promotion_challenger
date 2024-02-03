import './style.scss'
export const LoadingComponent = () => {
    return (
        <div className="container">
            <div className="content-loading">
                <span role="text">Aguarde</span>
                <span role="text">Estamos carregando as informações</span>

                <div className="loader-icon" aria-hidden="true"></div>
            </div>
        </div>
    )
}