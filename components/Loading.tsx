import RingLoader from 'react-spinners/RingLoader'

function Loading() {
  return (
    <div className='bg-[#091B18] h-screen flex flex-col items-center justify-center'>
      <div className='flex items-center space-x-2 mb-10'>
        <h1 className='text-lg text-white font-bold'>
          Loading Web3 Lottery
        </h1>
      </div>
      <RingLoader color='white' size={100} />
    </div>
  )
}

export default Loading