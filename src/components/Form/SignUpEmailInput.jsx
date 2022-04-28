import React, {useState, useEffect} from 'react'

const SignUpEmailInput = ({handler, email, sendButtonState, setSendButtonState}) => {
	const [pClass, setPClass] = useState('')

	const onEmailInput = (e) => {
		let input = e.target
	
		if (input.value.match(/\S@\S+\.\S+/i)) { email('correct'); setPClass('correct') }
		else { email('input correct email'); setPClass('incorrect') }

		if(input.value === '') { email(''); setPClass('') }
	}

	useEffect(() => {
		if(pClass === 'correct')
			setSendButtonState({...sendButtonState, email: true})
		else
			setSendButtonState({...sendButtonState, email: false})
	}, [pClass])

	return (
		<div className='inputPlaceholder'>
			<input
				className='input'
				type='text'
				placeholder='email'
				id={'em'}
				onInput={onEmailInput}
				onChange={handler}
			/>
			<p className={pClass}>{pClass}</p>
		</div>
	)
}

export default SignUpEmailInput
