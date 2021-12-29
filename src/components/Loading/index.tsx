import React from 'react'
import { ImSpinner11 as SpinnerIcon } from 'react-icons/im'

export const Loading = () => (
  <div className="flex justify-center mt-4">
    <SpinnerIcon className="animate-spin h-8 w-8 mr-3 text-fuchsia-500" />
  </div>
)
