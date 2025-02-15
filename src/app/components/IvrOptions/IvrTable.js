import { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import { Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import moment from "moment";
import { FORMAT_DATE_TIME } from "@/app/common/constants";

const IvrTable = ({ ivrOptions, onEdit }) => {
  const columns = useMemo(
    () => [
      { accessorKey: "ivr_menu_id", header: "IVR MENU ID", size: 50 },
      { accessorKey: "keypress", header: "Key Press", size: 150 },
      { accessorKey: "action", header: "Action", size: 150 },
      { accessorKey: "destination", header: "Destination", size: 150 },
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
        data={ivrOptions}
        enableSorting
        enablePagination
        enableFilters
      />
    </Box>
  );
};

export default IvrTable;
