import React, { useState } from 'react'
const AddUserForm = props => {
	const initialFormState = { id: null, skillName: '', expMonths: '', expYears: '', selfRate: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<div>
			<form
				onSubmit={event => {
					event.preventDefault()
					if (!user.skillName || !user.expMonths || !user.expYears || !user.selfRate ) return

					props.addUser(user)
					setUser(initialFormState)
				}}
			>
				<label>Skill Name</label>
				<input type="text" name="skillName" value={user.skillName} onChange={handleInputChange} />
				<label>Exp in Years</label>
				<input type="text" name="expYears" value={user.expYears} onChange={handleInputChange} />
				<label>Exp in Months</label>
				<input type="text" name="expMonths" value={user.expMonths} onChange={handleInputChange} />
				<label>Self Rating</label>
				<input type="text" name="selfRate" value={user.selfRate} onChange={handleInputChange} />
				<button>Add new user</button>
			</form>
		</div>
	)
}

export default AddUserForm
