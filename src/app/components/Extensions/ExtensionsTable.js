import { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import { Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import moment from "moment";
import { FORMAT_DATE_TIME } from "@/app/common/constants";

const ExtensionsTable = ({ extensions, onEdit }) => {
  const columns = useMemo(
    () => [
      { accessorKey: "extension", header: "Extension", size: 50 },
      { accessorKey: "priority", header: "Priority", size: 150 },
      { accessorKey: "app", header: "App", size: 150 },
      { accessorKey: "appdata", header: "App Data", size: 150 },
      { accessorKey: "context", header: "Context", size: 150 },
      { accessorKey: "ivr_menu_id", header: "IVR Menu", size: 150 },
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
        data={extensions}
        enableSorting
        enablePagination
        enableFilters
      />
    </Box>
  );
};

export default ExtensionsTable;
