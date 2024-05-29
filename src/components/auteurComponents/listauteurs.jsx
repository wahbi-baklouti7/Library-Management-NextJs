"use client";
import { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import Button from "react-bootstrap/Button";
import { deleteAuteur} from "@/services/auteurService";
import { useRouter } from "next/navigation";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Listauteurs = ({ auteurs }) => {
  const router = useRouter();
  const deleteauteur = (id) => {
    if (window.confirm("supprimer Auteur O/N")) {
      deleteAuteur(id)
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
        accessorKey: "nomauteur",
        header: "NOM AUTEUR",
        size: 200,
      },
      {
        accessorKey: "email",
        header: "EMAIL",
        size: 200,
      },
      {
        accessorKey: "numtel",
        header: "NUMERO TEL",
        size: 200,
      },
      {
        accessorKey: "_id",
        header: "actions",
        size: 100,
        Cell: ({ cell, row }) => (
          <div>
            <Button
              onClick={(e) => {
                deleteauteur(cell.row.original._id, e);
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
    [auteurs]
  );
  return (
    <div>
      <MaterialReactTable columns={columns} data={auteurs} />;
    </div>
  );
};
export default Listauteurs;
