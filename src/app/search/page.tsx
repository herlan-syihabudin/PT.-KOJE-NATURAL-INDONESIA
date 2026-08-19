// src/app/search/page.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { HiArrowLeft, HiSearch, HiX } from 'react-icons/hi'

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    setIsLoading(true)
    // Implementasi search logic di sini
    // Bisa panggil API atau filter products
    setTimeout(() => {
      setIsLoading(false)
      // setResults(filteredProducts)
    }, 500)
  }

  return (
    <main className="min-h-screen bg-white pt-24 md:pt-28">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-700 transition mb-6"
        >
          <HiArrowLeft className="w-4 h-4" />
          Back
        </Link>

        {/* Search form */}
        <form onSubmit={handleSearch} className="relative">
          <div className="relative">
            <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products, categories, or brands..."
              className="w-full pl-12 pr-12 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-base focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              autoFocus
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <HiX className="text-xl" />
              </button>
            )}
          </div>
        </form>

        {/* Results */}
        <div className="mt-8">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="w-12 h-12 border-4 border-gray-200 border-t-primary rounded-full animate-spin mx-auto" />
              <p className="mt-4 text-gray-500">Searching...</p>
            </div>
          ) : results.length === 0 && query ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No results found for "{query}"</p>
              <p className="text-sm text-gray-400 mt-2">Try different keywords or browse our categories</p>
            </div>
          ) : results.length > 0 ? (
            <div className="grid gap-4">
              {/* Render results */}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400">Type to search products...</p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
