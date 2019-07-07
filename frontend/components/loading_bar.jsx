import React from 'react';
import { BarLoader } from 'react-spinners';
import { css } from 'emotion';

export const LoadingBar = () => {
	const override = css`
    display: block;
    margin: 0 auto;
    border-color: black;
`;

	return (
		<BarLoader
			css={override}
			width={100}
			height={25}
			color={'#21ce99'}
		/>
	)
};