import React from 'react'
import Header from './header'
import Head from './head'

const Dummy = () => {
  return (
    <div>
      <Header> </Header>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 hover:text-red-500 text-white font-bold rounded-lg border shadow-lg p-10">
          Abracardabara
        </div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
