import { useEffect, useState, useCallback } from 'react';

export const useInfiniteScroll = (allItems: any[], itemsPerPage: number) => {
  const [visibleItems, setVisibleItems] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);

  const loadMoreItems = useCallback(() => {
    if (isFetching) return;

    setIsFetching(true);
    const nextPage = currentPage + 1;
    const totalPages = Math.ceil(allItems.length / itemsPerPage);

    if (nextPage <= totalPages) {
      const newItems = allItems.slice(0, nextPage * itemsPerPage);
      setVisibleItems(newItems);
      setCurrentPage(nextPage);
    }

    setIsFetching(false);
  }, [allItems, currentPage, itemsPerPage, isFetching]);

  useEffect(() => {
    if (allItems.length > 0) {
      setVisibleItems(allItems.slice(0, itemsPerPage));
      setCurrentPage(1);
    }
  }, [allItems, itemsPerPage]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 500 &&
        !isFetching
      ) {
        loadMoreItems();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMoreItems, isFetching]);

  return { visibleItems, isFetching };
};
