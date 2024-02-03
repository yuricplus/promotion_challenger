import './style.scss'
interface IPropsPagination {
	handlePageChange: Function,
	totalPages: number,
	actualPage: number
}

interface IPage {
	page: number,
}
export const PaginationComponent = (props: IPropsPagination) => {
	let startFrom = 1;

	if(props.totalPages <= 1) return null;

	const limitPagination = ():number => {
		const maxItem = 10;
		let page = 1;

		if(props.totalPages < maxItem) return props.totalPages;

		if(props.actualPage >= maxItem) {
			startFrom = props.actualPage - 10 + 1;
			page = maxItem + startFrom + 1;

			console.log(page)

			console.log(startFrom)
			return page;
		}
		return maxItem;
	}


	const ButtonComponent = (btnProps: IPage) => {
		if(btnProps.page < startFrom) return null;
		return (
			<li className='content-item'>
				<button
					onClick={() => props.handlePageChange(btnProps.page)}
					aria-label={`Pagina ${btnProps.page}`}
					className={btnProps.page === props.actualPage ? 'active' : ''}>
					{btnProps.page}
				</button>
				</li>
		)
	}

	
	return (
		<ul className="container-pagination">
			{Array.from(Array(limitPagination()), (_, i) => i + 1).map((page: number) => (
				<ButtonComponent page={page} key={page}/>
			))}
		</ul>
	)
}