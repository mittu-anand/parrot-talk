import { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import { Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit"; // Import edit icon

const SipUsersTable = ({ users, onEdit }) => {
  const columns = useMemo(
    () => [
      { accessorKey: "id", header: "ID", size: 50 },
      { accessorKey: "username", header: "Username", size: 150 },
      { accessorKey: "context", header: "Context", size: 150 },
      { accessorKey: "host", header: "Host", size: 150 },
      { accessorKey: "allow", header: "Allow", size: 100 },
      { accessorKey: "port", header: "Port", size: 100 },
      {
        accessorKey: "is_active",
        header: "Status",
        size: 100,
        Cell: ({ cell }) => (cell.getValue() ? "Active" : "Inactive"),
      },
      {
        id: "edit", // Add custom column for editing
        header: "Actions",
        size: 100,
        Cell: ({ row }) => (
          <IconButton onClick={() => onEdit(row.original)} color="primary">
            <EditIcon />
          </IconButton>
        ),
      }
    ],
    [onEdit]
  );

  return (
    <Box sx={{ width: "100%", overflowX: "auto" }}>
      <MaterialReactTable
        columns={columns}
        data={users}
        enableSorting
        enablePagination
        enableFilters
      />
    </Box>
  );
};

export default SipUsersTable;
