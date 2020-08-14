/*
 * Copyright (c) 2016-present, Parse, LLC
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import React, { useState } from 'react';
import styles from 'components/ColumnFilter/ColumnFilter.scss';

let ColumnFilter = ({ setCurrent, order, handleColumnsOrder }) => {
	const [ columnFilterValue, setColumnFilter ] = useState('');
	return (
		<div className={styles.filterColumns}>
			<input
				placeholder="Column filter"
				value={columnFilterValue}
				onFocus={() => setCurrent(null)}
				onChange={(e) => {
					setColumnFilter(e.target.value);
					const updatedOrder = [ ...order ];
					updatedOrder.forEach(function(col, index, columns) {
						var visible = false;
						if (col.name.toLowerCase().includes(e.target.value.toLowerCase())) {
							visible = true;
						}
						columns[index] = {
							...col,
							visible
						};
					});
					handleColumnsOrder(updatedOrder);
				}}
			/>
		</div>
	);
};

export default ColumnFilter;
