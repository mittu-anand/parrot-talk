import { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import { Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import moment from "moment";
import { FORMAT_DATE_TIME } from "@/app/common/constants";

const IvrAudioTable = ({ audios, onEdit }) => {
  const columns = useMemo(
    () => [
      { accessorKey: "name", header: "Name", size: 50 },
      { accessorKey: "file_path", header: "File Path", size: 150 },
      { accessorKey: "format", header: "Format", size: 150 },
      {
        accessorKey: "created_at",
        header: "Created",
        size: 150,
        Cell: ({ cell }) => moment(cell.getValue()).utc().format(FORMAT_DATE_TIME),
      },
      {
        accessorKey: "updated_at",
        header: "Updated",
        size: 150,
        Cell: ({ cell }) => moment(cell.getValue()).utc().format(FORMAT_DATE_TIME),
      },
      {
        id: "edit",
        header: "Actions",
        size: 100,
        Cell: ({ row }) => (
          <IconButton onClick={() => onEdit(row.original)} color="primary">
            <EditIcon />
          </IconButton>
        ),
      },
    ],
    [onEdit]
  );

  return (
    <Box sx={{ width: "100%", overflowX: "auto" }}>
      <MaterialReactTable
        columns={columns}
        data={audios}
        enableSorting
        enablePagination
        enableFilters
      />
    </Box>
  );
};

export default IvrAudioTable;
