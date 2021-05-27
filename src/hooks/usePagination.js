import { useState } from 'react'

export const usePagination = (data=[], itemsPerPage) => {
    
    const [ currentPage, setcurrentPage ] = useState(1)
    const maxPage = Math.ceil(data.length / itemsPerPage)

    const begin = (currentPage - 1) * itemsPerPage; // (2 - 1) * 10
    const end = begin + itemsPerPage
    
    const currenCharacters = () => {
        return data.slice(begin, end)
    };

    const next = () => {
        setcurrentPage((currentPage) => Math.min(currentPage + 1, maxPage))
    }

    const prev = () => {
        setcurrentPage((currentPage) => Math.max(currentPage - 1, 1))
    }
    
    const jump = (page) => {
       const pageNumber = Math.max(1, page)
       setcurrentPage((currentPage) => Math.min(pageNumber, maxPage))
    }
    
    return { next, prev, currentPage, jump, currenCharacters, maxPage }
}