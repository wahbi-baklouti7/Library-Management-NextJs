"use client";
import { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import Button from "react-bootstrap/Button";
import { deleteSpecialite} from "@/services/specialiteService";
import { useRouter } from "next/navigation";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Listspecialites = ({ specialites }) => {
  const router = useRouter();
  const deletespecialite = (id) => {
    if (window.confirm("supprimer Specialite O/N")) {
      deleteSpecialite(id)
        .then((res) => {
          console.log(res);
          router.refresh();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const columns = useMemo(
    () => [
      {
        accessorKey: "nomspecialite",
        header: "NOM SPECIALITE",
        size: 500,
      },
     
      {
        accessorKey: "_id",
        header: "actions",
        size: 100,
        Cell: ({ cell, row }) => (
          <div>
            <Button
              onClick={(e) => {
                deletespecialite(cell.row.original._id, e);
              }}
              variant="danger"
              size="md"
              className="text-danger btn-link delete"
            >
              <DeleteForeverIcon />
            </Button>
          </div>
        ),
      },
    ],
    [specialites]
  );
  return (
    <div>
      <MaterialReactTable columns={columns} data={specialites} />;
    </div>
  );
};
export default Listspecialites;
