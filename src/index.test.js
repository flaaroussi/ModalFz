import React from 'react'
import { render } from '@testing-library/react'
import { Modal } from '.'

const onClose = () => {}

describe('"When i set isOpen to true', () => {
  test('is Then the Modal component should be displayed', () => {
    render(
      <Modal
        isOpen={1}
        title='Add employee'
        width='600px'
        onClose={onClose}
        modalContent={<p>Modal content</p>}
        footerContent={
          <>
            <button className='btn-modal'>ok</button>
            <button>close</button>
          </>
        }
      />
    )
  })
})
