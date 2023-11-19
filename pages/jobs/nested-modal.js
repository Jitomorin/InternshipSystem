import { Button } from "@/components/ui/button";
import { DialogContent } from "@/components/ui/dialog";
import { DialogTrigger } from "@/components/ui/dialog";
import { Dialog } from "@/components/ui/dialog";
import { Input } from "@mui/icons-material";






export default function NestedModal({ btnName, job }) {


  const onSubmit = async (EmailData) => {
    console.log(EmailData);
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
         
                  <Button variant="primary" className="w-1/5 hover:scale-105 bg-pink_red text-white text-xl px-2 mt-10">
              {btnName}
            </Button>
        </DialogTrigger>    

              <DialogContent className="flex w-[calc(100%_-_48px)] h-[50rem] flex-col justify-center rounded-2xl bg-white p-6 sm:max-w-[534px]">
                  <div>
                      <h1>
                          {`Apply to ${job.title}?`}
                      </h1>
                  </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
