# ReactModalFz

ReactModalFz is a modal library, is wrritten in Javascript. It is a minimal library without any other dependencies, while being performant and straightforward to use, requiring developers to write fewer lines of code than other form libraries.

A library of React components created using `create-react-app`.## Installation
Run the following command:
`npm install ReactModalFz`



# Demo

# Installation

Install ReactModalFz with npm:
npm install ReactModalFz

# Example

````javascript
import React, { useState } from 'react'

import 'ReactModalFz/dist/index.css'
import { Modal } from 'ReactModalFz'

const App = () => {
const [isOpen, setIsOpen] = useState(0)
return (
<>
<button onClick={() => setIsOpen(isOpen ? 0 : 1)}>Click me!</button>
<Modal
isOpen={isOpen}
onClose={setIsOpen}
title='Modal title'
width='600px'
modalContent={<p>Modal content</p>}
footerContent={
<>
<button className='btn-modal'>ok</button>
<button
className='btn-modal'
onClick={() => setIsOpen(isOpen ? 0 : 1)} >
close
</button>
</>
}
/>
</>
)
}

export default App
```
````
