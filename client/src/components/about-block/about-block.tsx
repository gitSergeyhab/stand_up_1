

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';


type AboutRow = {
  point: string;
  value: string;
}


export const AboutBlock = ( {about} : {about: AboutRow[]} ) => (
  <Table sx={{ minWidth: 320, maxWidth: 680 }} aria-label="simple table">

    <TableBody>
      {about.map((row) => (
        <TableRow
          key={row.point}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {row.point}
          </TableCell>
          <TableCell align="right">{row.value}</TableCell>

        </TableRow>
      ))}
    </TableBody>
  </Table>
);
