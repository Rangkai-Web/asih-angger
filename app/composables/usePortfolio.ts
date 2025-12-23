export interface PortfolioItem {
  id: number
  cat: 'product' | 'beauty' | 'baby' | 'event'
  img: string
  class: 'tall' | 'wide' | ''
}

export const portfolioItems: PortfolioItem[] = [
  { id: 1, cat: 'product', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800', class: 'tall' },
  { id: 2, cat: 'beauty', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800', class: '' },
  { id: 3, cat: 'baby', img: 'https://images.unsplash.com/photo-1608365151231-7dbed3034787?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', class: 'wide' },
  { id: 4, cat: 'event', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800', class: '' },
  { id: 5, cat: 'product', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800', class: '' },
  { id: 6, cat: 'beauty', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800', class: 'tall' },
  { id: 7, cat: 'event', img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800', class: 'wide' },
  { id: 8, cat: 'baby', img: 'https://images.unsplash.com/photo-1533483595632-c5f0e57a1936?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', class: '' },
]

export const usePortfolio = () => {
  const activeFilter = ref<'all' | 'product' | 'beauty' | 'baby' | 'event'>('all')

  const filteredItems = computed(() => {
    if (activeFilter.value === 'all') {
      return portfolioItems
    }
    return portfolioItems.filter(item => item.cat === activeFilter.value)
  })

  const setFilter = (filter: typeof activeFilter.value) => {
    activeFilter.value = filter
  }

  return {
    activeFilter,
    filteredItems,
    setFilter,
  }
}

