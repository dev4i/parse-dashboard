/*
 * Copyright (c) 2016-present, Parse, LLC
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import React from 'react';
import styles from 'components/ColumnFilter/ColumnFilter.scss';


let ColumnFilter = ({ setColumnFilter, columnFilterValue }) => (
	<div className={styles.filterColumns}>
		<input placeholder='Column filter...' value={columnFilterValue} onChange={(e)=> {
      setColumnFilter(e.target.value)
      }} />
	</div>
);

export default ColumnFilter;
