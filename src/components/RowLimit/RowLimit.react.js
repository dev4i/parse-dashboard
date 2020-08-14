/*
 * Copyright (c) 2016-present, Parse, LLC
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import React from 'react';
import styles from 'components/RowLimit/RowLimit.scss';

let RowLimit = ({ maxRows, setMaxRows, setCurrent, refresh }) => (
	<div className={styles.limitRow}>
		<span>Row Limit:</span>
		<input
			onKeyDown={(e) => {
				if (e.key === 'Enter') {
					refresh();
				}
			}}
			type="number"
			value={maxRows}
			onFocus={() => setCurrent(null)}
			onChange={(e) => {
				let num = Number(e.target.value);
				if (num === 0) {
					setMaxRows('');
				} else {
					setMaxRows(num);
				}
			}}
		/>
	</div>
);

export default RowLimit;
