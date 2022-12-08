import React  from "react";
import ReactPaginate from "react-paginate";

import style from './Paginator.module.css'

type TPaginationProps = {
    totalCount: number;
    pageCount: number;
    searchText?: string;
    isFetching?: boolean;
    onClick: (n : number) => void
        currentPage : number

};

const Pagination: React.FC<TPaginationProps> = React.memo(({ totalCount, pageCount, onClick, currentPage }) => {

    const pageQuantity = Math.max(Math.ceil(totalCount / pageCount));
    const handlePageChange = ({ selected }: { selected: number }) => {
        onClick(selected+1)

    };

    return (
        <ReactPaginate
            forcePage={currentPage > -1 ? currentPage - 1 : 0}
            pageCount={pageQuantity < 1 ? 1 : pageQuantity}
            pageRangeDisplayed={3}
            renderOnZeroPageCount={() => null}
            marginPagesDisplayed={1}
            containerClassName={style.pagination}
            onPageChange={handlePageChange}
            previousLabel={'prev'}
            nextLabel={'next'}
            pageLinkClassName={style.pageItem}
            activeClassName={style.active}
            previousLinkClassName={style.pageItem}
            nextLinkClassName={style.pageItem}
            breakLabel=". . ."
            breakClassName={style.pageItem}
            breakLinkClassName="page-link"
        />
    );
});

export default Pagination;
