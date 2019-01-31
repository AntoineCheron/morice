import React from 'react';

interface Props { value: number }

const config = {
  amountOfDots: 5
}

const Scale: React.SFC<Props> = ({value}) => {
  const blackDots = value > 2 ? 2 : value < 0 ? 0 : value
  const lighDots = 2 - blackDots

  return (
    <div style={{fontSize: 26, color: 'black', textAlign: 'center'}}>
      { Array(blackDots).fill('•') }
      { Array(lighDots).fill(<span className='opacity-lighter-2'>•</span>) }
    </div>
  )
}

export default Scale