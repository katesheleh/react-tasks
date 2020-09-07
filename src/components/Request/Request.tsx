import React, {useState} from 'react';
import Checkbox from '../common/Checkbox/Checkbox';
import Button from '../common/Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../reducers/store';
import {RequestReducerStateType, requestTC} from '../../reducers/requestReducer';


const Request = () => {
	const request = useSelector<AppRootStateType, RequestReducerStateType>(state => state.request)
	const dispatch = useDispatch()

	const [checked, setChecked] = useState<boolean>(request.success)

	const onCheckboxChange = (checked: boolean) => setChecked(checked)

	const onBtnClick = () => {
		dispatch(requestTC(checked))
	}

	return (
			<div>
				<Checkbox
						onChange={onCheckboxChange}
						checked={checked}/>

				<Button
						text={'Send checkbox value'}
						onClick={onBtnClick}/>

				<p>{request.error && request.error}</p>
			</div>
	)
}

export default Request;