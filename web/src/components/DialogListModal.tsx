import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useEffect } from "react";
import DataTableCustom from "./DataTableCustom";

interface ListModalProps {
  onClose: () => void;
  onSubmit: (value: any) => void;
  open: boolean;
  name: string;
  callInit: () => any;
  data: any[];
  setData: (data:object[]) => void,
  headers: object[],
}

export const DialogListModal = ({
  open,
  onClose,
  onSubmit,
  name,
  callInit,
  data, 
  setData,
  headers
}: ListModalProps) => {

  useEffect(() => {
    callInit()
  }, [])

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            margin: "auto",
            maxWidth: "1200px",  // Set your width here
          },
        },
      }}>
      <DialogTitle id="responsive-dialog-title">
        {`Log ${name}`}
      </DialogTitle>
      <DialogContent>
        <div className="md:flex bg-white w-full mt-4 rounded">
          <DataTableCustom headers={headers} data={data} setData={(data) => setData(data)} title={name} />
        </div>
      </DialogContent>
    <DialogActions>
      <Button autoFocus onClick={onClose}>
        Back
      </Button>
    </DialogActions>
  </Dialog>
  )
}