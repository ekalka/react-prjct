import { IUniversityData } from '../../сonstants/constants'
import { FC } from 'react'


export const UniversityCard: FC<{ data: IUniversityData }> = ({ data }) => {
	return (
		<div>
			<h1>{data.name}</h1>
			<span>{data.country}</span>
		</div>
	)
}

export default UniversityCard