import { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import { Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import moment from "moment";
import { FORMAT_DATE_TIME } from "@/app/common/constants";

const IvrMenuTable = ({ ivrMenu, onEdit }) => {
  const columns = useMemo(
    () => [
      { accessorKey: "menu_name", header: "Name", size: 50 },
      { accessorKey: "announcement_id", header: "Announcement ID", size: 150 },
      { accessorKey: "timeout", header: "Timeout", size: 150 },
      { accessorKey: "invalid_retries", header: "Invalid Retries", size: 150 },
      { accessorKey: "timeout_retries", header: "Timeout Retries", size: 150 },
      { accessorKey: "exit_action", header: "Exit Action", size: 150 },
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
        data={ivrMenu}
        enableSorting
        enablePagination
        enableFilters
      />
    </Box>
  );
};

export default IvrMenuTable;
