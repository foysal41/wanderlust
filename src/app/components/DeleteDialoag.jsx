
"use client";
import {AlertDialog, Button} from "@heroui/react";
import { useRouter } from "next/navigation";

export default function DeleteDialoag({destination}) {
    const router = useRouter();
    const {_id,destinationName} = destination
    const handleDelete = async() => {
        const res = await fetch(`https://wanderlust-server-f87e.onrender.com/destination/${_id}`,{
            method: "DELETE",
            headers: {'content-type' : "application/json"}

        })


        const data = await res.json()
        router.push("/destination");
        router.refresh();

    }


  
  return (
     <AlertDialog>
      <Button variant="danger" className="border px-4 py-2 rounded-md text-sm text-white">🗑 Delete </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Destination permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{destinationName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete}  slot="close" variant="danger">
                Delete 
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  )
}



