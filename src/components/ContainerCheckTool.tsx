'use client'

import React, { useState } from 'react'
import { calculateCheckDigit } from '@/utils/calculateCheckDigit'

export default function ContainerCheckTool() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase()
    setInput(value)

    if (value.length === 11 && /^[A-Z]{4}\d{7}$/.test(value)) {
      const base = value.slice(0, 10)
      const expected = calculateCheckDigit(base)
      const actual = parseInt(value[10], 10)

      setResult(
        expected === actual
          ? '✅ This is a valid ISO 6346 container number.'
          : `❌ Invalid check digit. Did you mean ${base}${expected}?`,
      )
    } else {
      setResult('')
    }
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-2xl shadow-xl">
      <h1 className="text-3xl font-extrabold mb-2">
        ISO 6346 Container Number Validator
      </h1>
      <p className="text-sm text-gray-600 mb-4">
        Instantly validate shipping container numbers using the official ISO
        6346 check digit algorithm. Ensure your logistics data is accurate and
        compliant.
      </p>
      <input
        type="text"
        maxLength={11}
        value={input}
        onChange={handleChange}
        className="border border-gray-300 p-3 w-full text-lg rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="e.g. MSKU6011672"
        aria-label="Container Number"
      />
      {result && (
        <p className="mt-4 text-lg font-medium text-blue-800">{result}</p>
      )}
    </div>
  )
}
