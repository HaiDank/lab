import { DataGrid, GridColDef } from '@mui/x-data-grid';

import React from 'react';

export interface filmRow {
	id: number;
	img: string;
	title: string;
	year: string;
	nation: string;
	duration: string;
	actors: string;
	directors: string;
	description: string;
	trailer: string;
}

type DataTableProps = {
	columns: GridColDef[];
	rows: filmRow[];
};

function DataTable({ columns, rows }: DataTableProps) {
	return (
		<>
			<DataGrid
				rows={rows}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: { page: 0, pageSize: 5 },
					},
				}}
				pageSizeOptions={[5, 10, 15, 20]}
			/>
		</>
	);
}

export default DataTable;
