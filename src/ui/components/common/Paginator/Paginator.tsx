import React  from "react";
import {MyPaginate} from "./styled";
import {SmallArrowIcon} from "../../../assets/icons/SmallArrowIcon";

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
        <MyPaginate
            forcePage={currentPage > -1 ? currentPage - 1 : 0}
            pageCount={pageQuantity < 1 ? 1 : pageQuantity}
            pageRangeDisplayed={3}
            renderOnZeroPageCount={() => null}
            marginPagesDisplayed={1}
            onPageChange={handlePageChange}
            previousLabel={<SmallArrowIcon rotate='90deg'/>}
            nextLabel={<SmallArrowIcon rotate='270deg'/>}
            pageLinkClassName="page-item"
            activeClassName="active"
            previousLinkClassName={"page-item arrow"}
            nextLinkClassName="page-item arrow"
            breakLabel=". . ."
            breakClassName="page-item"
            breakLinkClassName="page-link"

        />
    );
});

export default Pagination;
