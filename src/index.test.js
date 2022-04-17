import { render } from 'react-dom'
import { Modal } from '.'

describe('Modal', () => {
  test('is truthy', () => {
    render(
      <Modal
        isOpen={isOpen}
        onClose={setIsOpen}
        title='Add employee'
        width='600px'
        modalContent={<p>Modal content</p>}
        footerContent={
          <>
            <button className='btn-modal'>ok</button>
            <button
              className='btn-modal'
              onClick={() => setIsOpen(isOpen ? 0 : 1)}
            >
              close
            </button>
          </>
        }
      />
    )
  })
})
