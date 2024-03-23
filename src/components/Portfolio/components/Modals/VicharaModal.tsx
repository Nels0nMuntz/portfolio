import { useModals, useModalsDispatch } from "@/contexts";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DialogDesLink, DialogDescription, DialogHeading } from "@/components/Dialog/Dialog";

export default function VicharaModal() {
  const { vichara } = useModals();
  const dispatch = useModalsDispatch();
  const closeModal = () => dispatch({ type: "CLOSE_MODAL", payload: "vichara" });
  return (
    <Dialog open={vichara.isOpen} onOpenChange={closeModal} modal={true}>
      <DialogContent>
        <div className="h-[90vh] overflow-y-auto overflow-x-hidden">
          <div className="flex flex-col items-center gap-8 sm:gap-6 px-4 md:px-10 pt-8 bg-[#F5F7F8]">
            <div className="text-center">
              <DialogHeading className="mb-0">Vichara Technologies</DialogHeading>
            </div>
            <div className="flex flex-col items-center">
              <DialogDescription className="text-left md:text-center ml-0 md:ml-auto">
                Developed a multi-page website using HTML, CSS, JS and Tailwind CSS. Implemented a
                variety of animations using GSAP that enhance the user experience with amazing
                visual elements.
              </DialogDescription>
              <DialogDesLink href="https://demovichara.netlify.app">Open demo</DialogDesLink>
            </div>
            <div className="pb-12">
              <video
                className="w-full h-auto"
                width={768}
                height={590}
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/vichara/portfolio-home.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="pt-12 pb-12">
              <video
                className="w-full h-auto"
                width={768}
                height={590}
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/vichara/portfolio-story.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="pt-12 pb-12">
              <video
                className="w-full h-auto"
                width={768}
                height={590}
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/vichara/portfolio-solution.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
