// src/components/DataTable.tsx
import { TableContainer, Paper, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import '../../styles/DataTable.css';

interface DataTableProps<T> {
    data: T[];
    columns: { key: keyof T; label: string }[];
    actions?: (row: T) => JSX.Element; 
}

const DataTable = <T,>({ data, columns, actions }: DataTableProps<T>) => {
    return (
        <div className="table-wrapper">
            <TableContainer component={Paper} className="table-container">
                <Table>
                    <TableHead>
                        <TableRow className="table-header">
                            {columns.map((column) => (
                                <TableCell key={column.key as string} className="table-cell-header">{column.label}</TableCell>
                            ))}
                            {actions && <TableCell className="table-cell-header">Acciones</TableCell>}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, rowIndex) => (
                            <TableRow key={rowIndex} className="table-row">
                                {columns.map((column) => (
                                    <TableCell key={column.key as string} className="table-cell">{row[column.key] as string}</TableCell>
                                ))}
                                {actions && <TableCell className="table-cell">{actions(row)}</TableCell>} 
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default DataTable;
