import React, { useState } from 'react'

import { IState } from '../../App'

interface IProps extends IState {
  setPeople: React.Dispatch<React.SetStateAction<IState["people"]>>
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {

  const [input, setInput] = useState({
    name: "",
    age: "",
    url: "",
    note: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = (): void => {
    if 
    (
      !input.name || 
      !input.age ||
      !input.url
    ) {
      return
    }

    setPeople([
      ...people,
      {
        ...input,
        age: parseInt(input.age)
      }
    ])

    setInput({
      name: "",
      age: "",
      url: "",
      note: ""
    })
  }

  return (
    <div className='AddToList'>
      <input 
        type='text'
        placeholder='Name'
        className='AddToList-input'
        value={input.name}
        onChange={handleChange}
        name="name"
      />
      <input 
        type='number'
        placeholder='Age'
        className='AddToList-input'
        value={input.age}
        onChange={handleChange}
        name="age"
      />
      <input 
        type='text'
        placeholder='Image URL'
        className='AddToList-input'
        value={input.url}
        onChange={handleChange}
        name="url"
      />
      <textarea 
        placeholder='Notes'
        className='AddToList-input'
        value={input.note}
        onChange={handleChange}
        name="note"
      />
      <button
        className='AddToList-btn'
        onClick={handleClick}
      >
        Add to List
      </button>
    </div>
  )
}

export default AddToList