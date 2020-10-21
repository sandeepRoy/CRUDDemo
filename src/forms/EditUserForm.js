import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label>Skill Name</label>
      <input type="text" name="skillName" value={user.skillName} onChange={handleInputChange} />
      <label>Exp Years</label>
      <input type="text" name="expYears" value={user.expYears} onChange={handleInputChange} />
      <label>Exp Months</label>
      <input type="text" name="expMonths" value={user.expMonths} onChange={handleInputChange} />
      <label>Self Rate</label>
      <input type="text" name="selfRate" value={user.selfRate} onChange={handleInputChange} />
      <button>Update user</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm
